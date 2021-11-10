import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from "react-native";

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

import { auth } from "../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";

import Icon from "react-native-vector-icons/AntDesign";
import Icon1 from "react-native-vector-icons/Feather";

import styles from "../style/styles";

const Wallet = ({ navigation, isEnglish }) => {
  const w = Dimensions.get("window").width;
  const h = Dimensions.get("window").height;

  const [balance, setBalance] = useState(0);
  const [compensate, setCompensate] = useState(0);

  let total = 0;
  let qnt = 0;
  var transactions = [];

  useEffect(() => {
    const db = getDatabase();
    const auth = getAuth();

    const userId = auth.currentUser.uid;

    return onValue(
      ref(db, "/compras/" + userId),
      (snapshot) => {
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
    );
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        style={{ position: "absolute", width: w, height: h }}
        source={require("../assets/background.png")}
      />
      <View style={styles.navBar}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Icon
              name="arrowleft"
              color="#FFF"
              size={26}
              style={{ marginRight: responsiveWidth(5) }}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#FFF" }}>
            {isEnglish ? <>Wallet</> : <>Carteira</>}
          </Text>
        </View>
        {/*<TouchableOpacity>
          <Icon1 name="menu" color="#FFF" size={32} />
        </TouchableOpacity>*/}
      </View>
      <View>
        <View
          style={{
            width: responsiveWidth(90),
            flexDirection: "row",
            alignItems: "center",
            marginBottom: responsiveHeight(2),
          }}
        >
          <Icon1
            name="credit-card"
            color="#FFF"
            size={38}
            style={{ marginRight: 25 }}
          />
          <View>
            <Text style={{ fontSize: 20, color: "#FFF" }}>
              {isEnglish ? <>Balance</> : <>Saldo</>}
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "#FFF",
                marginTop: responsiveHeight(1),
              }}
            >
              {compensate} ONECO2
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
                style={{ fontSize: responsiveFontSize(2), color: "#00CB00" }}
              >
                {compensate} ton. CO2
              </Text>
            </View>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate("History")}>
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
        <View style={styles.card}>
          <Text style={styles.h4}>
            {isEnglish ? <>Wallet</> : <>Carteira</>}
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
            <View>
              <Text style={{ fontSize: 16, color: "#707070" }}>
                {isEnglish ? <>Your balance</> : <>Valor total da carteira</>}
              </Text>
              <Text
                style={{
                  fontSize: 24,
                  color: "#00CB00",
                  fontWeight: "bold",
                  marginTop: responsiveHeight(3),
                }}
              >
                R$ {balance}
              </Text>
              <View
                style={{
                  width: responsiveWidth(80),
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: responsiveHeight(3),
                }}
              >
                <Text style={{ fontSize: 16, color: "#707070" }}>
                  {isEnglish ? <>Offset credits</> : <>Créditos compensados</>}
                </Text>
                <Text style={{ color: "#00CB00" }}>{compensate}</Text>
              </View>
              <View
                style={{
                  borderBottomColor: "#ddd",
                  borderBottomWidth: 1,
                  marginTop: 10,
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Wallet;
