import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Dimensions,
  ImageBackground,
} from "react-native";

import {
  responsiveWidth,
  responsiveHeight,
} from "react-native-responsive-dimensions";

import { getDatabase, ref, push, set } from "firebase/database";
import { auth } from "../firebase";

import moment from "moment";

import Icon from "react-native-vector-icons/AntDesign";
import Icon1 from "react-native-vector-icons/Feather";
import Icon2 from "react-native-vector-icons/Ionicons";
import Icon3 from "react-native-vector-icons/MaterialIcons";

import styles from "../style/styles";

const Payments = ({
  navigation,
  credits,
  setCredits,
  isEnglish,
  valorTotal,
  valorUn,
  dollar,
  footPrint
}) => {
  const w = Dimensions.get("window").width;
  const h = Dimensions.get("window").height;

  //const [modalVisible, setModalVisible] = useState(false);

  const handlePayment = () => {
    const userId = auth.currentUser.uid;
    const db = getDatabase();

    const compra = ref(db, "compras/" + userId);
    const novaCompra = push(compra);
    set(novaCompra, {
      date: moment().format("DD/MM/YYYY HH:mm:ss"),
      quantidade: credits,
      valorTotal: valorTotal,
      valorUnitario: valorUn,
    });
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        style={{ position: "absolute", width: w, height: h }}
        source={require("../assets/background.png")}
      />
      {/******MODAL DEACTIVATED
       <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        style={{ flex: 1 }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.2)",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: 392,
              height: 314,
              borderRadius: 8,
              backgroundColor: "#FFF",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                Importante!
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
              <Text
                style={{
                  fontSize: 16,
                  color: "#707070",
                  textAlign: "center",
                  margin: 24,
                }}
              >
                Você deverá realizar a transferência a partir de uma conta
                bancária de sua titularidade. Em seguida, você será
                redirecionado para o provedor de pagamentos da ONEARTH.
              </Text>
            </View>
            <TouchableOpacity>
              <View
                style={[
                  styles.btn2,
                  { backgroundColor: "#00CB00", width: 344 },
                ]}
              >
                <Text
                  style={{ color: "#FFF", fontSize: 18, fontWeight: "bold" }}
                >
                  FINALIZAR COMPRA
                </Text>
              </View>
            </TouchableOpacity>
            <Text
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
              style={{
                marginTop: 16,
                textDecorationLine: "underline",
                fontSize: 16,
                color: "#707070",
              }}
            >
              Cancelar
            </Text>
          </View>
        </View>
      </Modal>
      ******/}
      <View style={styles.navBar}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => navigation.navigate("Buy")}>
            <Icon
              name="arrowleft"
              color="#FFF"
              size={26}
              style={{ marginRight: responsiveWidth(5) }}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#FFF" }}>
            {isEnglish ? <>Payment</> : <>Pagamento</>}
          </Text>
        </View>
        {/*<TouchableOpacity>
          <Icon1 name="menu" color="#FFF" size={32} />
        </TouchableOpacity>*/}
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: responsiveWidth(90),
          position: "absolute",
          top: responsiveHeight(12),
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginRight: 50,
          }}
        >
          <Icon1
            name="credit-card"
            color="#FFF"
            size={38}
            style={{ marginRight: 25 }}
          />
          <View>
            <Text style={styles.h2}>
              {isEnglish ? <>Buy Credits</> : <>Comprar Créditos</>}
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.p}>
                {isEnglish ? (
                  <>Current market price:</>
                ) : (
                  <>Valor atual de mercado:</>
                )}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                  color: "#FFF",
                  marginLeft: 5,
                }}
              >
                { isEnglish ? <> $ {(valorUn / dollar).toFixed(2) }</> : <> R$ {valorUn}</> }
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          height: responsiveHeight(75),
          backgroundColor: "#FFF",
          alignItems: "center",
          paddingTop: responsiveHeight(5),
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          position: "absolute",
          bottom: 0,
        }}
      >
        <View
          style={{
            position: "relative",
            bottom: responsiveHeight(2),
          }}
        >
          <View
            style={{
              width: responsiveWidth(80),
              marginTop: responsiveHeight(2),
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "#20376D",
                marginBottom: 10,
              }}
            >
              {isEnglish ? <>Order summary</> : <>Resumo do pedido</>}
            </Text>
            <Text style={{ fontSize: 16, color: "#707070" }}>
              {isEnglish ? <>You're buying</> : <>Você está comprando</>}
            </Text>
            {credits <= 1 ? (
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  marginTop: 8,
                  marginBottom: 22,
                  color: "#00CB00",
                }}
              >
                {footPrint === 0 ? credits : footPrint }
                {isEnglish ? (
                  <>&nbsp;carbon credit</>
                ) : (
                  <>&nbsp;crédito de carbono</>
                )}
              </Text>
            ) : (
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  marginTop: 8,
                  marginBottom: 22,
                  color: "#00CB00",
                }}
              >
                {footPrint === 0 ? credits : footPrint }
                {isEnglish ? (
                  <>&nbsp;carbon credits</>
                ) : (
                  <>&nbsp;créditos de carbono</>
                )}
              </Text>
            )}

            <View style={{ flexDirection: "row" }}>
              <Text
                style={{ fontSize: 16, fontWeight: "bold", color: "#707070" }}
              >
                {isEnglish ? <>Edit quantity</> : <>Editar a quantidade</>}
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Buy")}>
                <Icon2
                  name="pencil-sharp"
                  color="#707070"
                  size={20}
                  style={{ marginLeft: 8 }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                borderBottomColor: "#ddd",
                borderBottomWidth: 1,
                marginTop: 20,
                marginBottom: 20,
              }}
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 26,
              }}
            >
              <Text style={{ fontSize: 16, color: "#707070" }}>
                {isEnglish ? <>Total amount:</> : <>Valor total:</>}
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: "#20376D",
                    fontWeight: "bold",
                    marginRight: 10,
                  }}
                >
                </Text>
                <Text
                  style={{
                    fontSize: 24,
                    color: "#20376D",
                    fontWeight: "bold",
                  }}
                >
                  { isEnglish ? <> $ {(valorTotal / dollar).toFixed(2) }</> : <> R$ {valorTotal}</> }
                </Text>
              </View>
            </View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "#20376D",
                marginBottom: 24,
              }}
            >
              {isEnglish ? <>Payment method</> : <>Forma de pagamento</>}
            </Text>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <TouchableOpacity
                onPress={() => {
                  setPaymentMethod("card");
                }}
              >
                <View
                  style={[styles.projectCards, { backgroundColor: "#00CB00" }]}
                >
                  <Icon3
                    name="payment"
                    color="#FFF"
                    size={28}
                    style={{ marginBottom: 18 }}
                  />
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#FFF",
                      fontWeight: "bold",
                    }}
                  >
                    {isEnglish ? <>Credit</> : <>Crédito</>}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setPaymentMethod("boleto");
                }}
              >
                <View
                  style={[styles.projectCards, { backgroundColor: "#00CB00" }]}
                >
                  <Icon
                    name="barcode"
                    color="#FFF"
                    size={28}
                    style={{ marginBottom: 18 }}
                  />
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#FFF",
                      fontWeight: "bold",
                    }}
                  >
                    {isEnglish ? <>Bank slip</> : <>Boleto</>}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                marginTop: 72,
                alignItems: "center",
              }}
            >
              <TouchableOpacity onPress={handlePayment}>
                <View style={[styles.btn2, { width: responsiveWidth(50) }]}>
                  <Text style={styles.btnTxt}>
                    {isEnglish ? <>CHECKOUT</> : <>PROSSEGUIR</>}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Payments;
