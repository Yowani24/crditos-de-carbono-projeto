import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  Dimensions,
  Modal,
} from "react-native";

import * as ImagePicker from "expo-image-picker";

import { auth } from "../firebase";
import { signOut, getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";

import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

import Icon from "react-native-vector-icons/AntDesign";
import Icon1 from "react-native-vector-icons/Feather";
import Icon2 from "react-native-vector-icons/MaterialIcons";

import styles from "../style/styles";

const Home = ({ navigation, isEnglish, setIsEnglish }) => {
  const w = Dimensions.get("window").width;
  const h = Dimensions.get("window").height;

  const [currentUserName, setCurrentUserName] = useState("");
  const [balance, setBalance] = useState(0);
  const [compensate, setCompensate] = useState(0);
  const [selectedImg, setSelectedImg] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  let total = 0;
  let qnt = 0;

  const setLanguage = () => {
    setIsEnglish(!isEnglish);
  };

  const logOut = async () => {
    await signOut(auth)
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  useEffect(() => {
    const db = getDatabase();
    const auth = getAuth();

    const userId = auth.currentUser.uid;
    return (
      onValue(
        ref(db, "/users/" + userId),
        (snapshot) => {
          const username =
            (snapshot.val() && snapshot.val().username) || "Anonymous";
          setCurrentUserName(username);
        },
        {
          onlyOnce: true,
        }
      ),
      onValue(
        ref(db, "/compras/" + userId),
        (snapshot) => {
          var transactions = [];
          snapshot.forEach(function (childSnapshot) {
            var key = childSnapshot.key;
            var data = childSnapshot.val().date;
            var quantidade = childSnapshot.val().quantidade;
            var valorUnitario = childSnapshot.val().valorUnitario;
            var valorTotal = childSnapshot.val().valorTotal;
            transactions.push(
              data + ";" + quantidade + ";" + valorUnitario + ";" + valorTotal
            );
            total += parseFloat(valorTotal);
            setBalance(total.toFixed(2));

            qnt += quantidade;
            setCompensate(compensate + qnt);
          });
        },
        {
          onlyOnce: true,
        }
      )
    );
  }, []);

  let openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Você precisa permitir o acesso à câmera.");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }
    setSelectedImg({ localUri: pickerResult.uri });
  };

  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          resizeMode="cover"
          style={{ position: "absolute", width: w, height: h }}
          source={require("../assets/background.png")}
        />
        <Modal
          animationType="fade"
          transparent
          visible={modalVisible}
          style={{ flex: 1 }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "rgba(0,0,0,0.2)",
              alignItems: "flex-end",
            }}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View
              style={{
                width: responsiveWidth(50),
                height: h,
                padding: responsiveWidth(8),
                backgroundColor: "#FFF",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <View>
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                >
                  <Icon name="close" color="#20376D" size={32} />
                </TouchableOpacity>
              </View>
              <View>
                <View style={{ alignItems: "flex-end" }}>
                  <TouchableOpacity onPress={setLanguage}>
                    <Icon2 name="language" size={40} color="#20376D" />
                  </TouchableOpacity>
                  <Text style={{ color: "#20376D", fontWeight: "bold" }}>
                    {isEnglish ? <>EN-US</> : <>PT-BR</>}
                  </Text>
                </View>
                <View>
                  <View
                    style={{
                      borderBottomColor: "#ddd",
                      borderBottomWidth: 1,
                      marginTop: 20,
                    }}
                  />
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: 24,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Password")}
                    >
                      <Text
                        style={{
                          fontSize: responsiveFontSize(1.8),
                          color: "#707070",
                          textAlign: "right",
                        }}
                      >
                        {isEnglish ? <>Change password</> : <>Alterar senha</>}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View>
                  <View
                    style={{
                      borderBottomColor: "#ddd",
                      borderBottomWidth: 1,
                      marginTop: 20,
                    }}
                  />
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginTop: 24,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: responsiveFontSize(1.8),
                        color: "#707070",
                        marginRight: 8,
                      }}
                    >
                      {isEnglish ? <>Logout</> : <>Sair</>}
                    </Text>
                    <TouchableOpacity onPress={logOut}>
                      <Icon2 name="logout" size={32} color="#20376D" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={{ alignItems: "center" }}>
                <Image
                  source={require("../assets/logo_name_b.png")}
                  style={{
                    width: responsiveWidth(40),
                    height: responsiveHeight(3),
                  }}
                />
                <Text
                  style={{
                    fontSize: responsiveFontSize(2),
                    color: "#707070",
                  }}
                >
                  ©{new Date().getFullYear()}
                </Text>
              </View>
            </View>
          </View>
        </Modal>
        <View style={styles.navBar}>
          <Image
            source={require("../assets/logo_w.png")}
            style={{
              width: 48,
              height: 48,
            }}
          />
          <Image
            source={require("../assets/logo_name_w.png")}
            style={{
              width: 200,
              height: 48,
            }}
          />
          <TouchableOpacity
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <Icon1 name="menu" color="#FFF" size={32} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            position: "absolute",
            top: responsiveHeight(12),
            height: responsiveHeight(80),
            justifyContent: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: responsiveHeight(5),
            }}
          >
            {selectedImg !== null ? (
              <TouchableOpacity
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  width: 64,
                  height: 64,
                  backgroundColor: "#DDD",
                  borderRadius: 50,
                  marginRight: 20,
                }}
                onPress={openImagePickerAsync}
              >
                <Image
                  source={{ uri: selectedImg.localUri }}
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 50,
                  }}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  width: 64,
                  height: 64,
                  backgroundColor: "#DDD",
                  borderRadius: 50,
                  marginRight: 20,
                }}
                onPress={openImagePickerAsync}
              >
                <Icon name="camera" color="#BBB" size={40} />
              </TouchableOpacity>
            )}
            <View>
              <Text
                style={{
                  fontSize: responsiveFontSize(2),
                  fontWeight: "bold",
                  color: "#FFF",
                }}
              >
                {isEnglish ? (
                  <>Welcome, {currentUserName}</>
                ) : (
                  <>Bem - vindo, {currentUserName}</>
                )}
              </Text>
              <Text style={styles.p}>
                {isEnglish ? (
                  <>Contribute to the planet today!</>
                ) : (
                  <>Contribua com o planeta hoje!</>
                )}
              </Text>
            </View>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate("Buy")}>
              <View
                style={[
                  styles.btn2,
                  {
                    width: responsiveWidth(90),
                    alignItems: "flex-start",
                    paddingLeft: responsiveWidth(10),
                    marginBottom: responsiveHeight(2),
                  },
                ]}
              >
                <Text style={styles.btnTxt}>
                  {isEnglish ? <>BUY ONECO2</> : <>COMPRAR ONECO2</>}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Wallet")}>
            <View style={styles.card}>
              <Text style={styles.h4}>
                {isEnglish ? <>My Transactions</> : <>Minhas Movimentações</>}
              </Text>
              <View
                style={{
                  borderBottomColor: "#ddd",
                  borderBottomWidth: 1,
                  marginTop: responsiveHeight(2),
                }}
              />
              <View
                style={{
                  width: responsiveWidth(90),
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: responsiveHeight(2),
                }}
              >
                <Icon1
                  name="box"
                  color="#BBB"
                  size={40}
                  style={{ marginRight: responsiveWidth(5) }}
                />
                <View>
                  <Text
                    style={{ fontSize: responsiveFontSize(1.8), color: "#888" }}
                  >
                    {isEnglish ? <>Offset total</> : <>Total compensado:</>}
                  </Text>
                  <Text
                    style={{
                      fontSize: responsiveFontSize(2),
                      color: "#00CB00",
                    }}
                  >
                    {/*{compensate} ton. CO2*/}
                  </Text>
                </View>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => navigation.navigate("History")}
                >
                  <View
                    style={[
                      styles.btn2,
                      {
                        backgroundColor: "#20376D",
                        marginTop: responsiveHeight(3),
                      },
                    ]}
                  >
                    <Text style={styles.btnTxt}>
                      {isEnglish ? <>TRANSACTIONS</> : <>MOVIMENTAÇÕES</>}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Wallet")}>
            <View style={[styles.card, { height: responsiveHeight(20) }]}>
              <Text style={styles.h4}>
                {isEnglish ? <>Wallet</> : <>Carteira</>}
              </Text>
              <View
                style={{
                  borderBottomColor: "#ddd",
                  borderBottomWidth: 1,
                  marginTop: responsiveHeight(2),
                }}
              ></View>
              <View
                style={{
                  width: responsiveWidth(90),
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: responsiveHeight(2),
                }}
              >
                <Icon1
                  name="credit-card"
                  color="#BBB"
                  size={40}
                  style={{ marginRight: responsiveWidth(5) }}
                />
                <View>
                  <Text style={{ fontSize: 16, color: "#888" }}>
                    {isEnglish ? <>Balance</> : <>Saldo</>}
                  </Text>
                  <Text
                    style={{
                      fontSize: responsiveFontSize(2),
                      color: "#00CB00",
                      fontWeight: "bold",
                    }}
                  >
                    {/*R$ {balance}*/}
                  </Text>
                  <Text
                    style={{ fontSize: responsiveFontSize(2), color: "#888" }}
                  >
                    {isEnglish ? <>Carbon credits</> : <>Créditos de Carbono</>}
                    (ONECO2)
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Home;
