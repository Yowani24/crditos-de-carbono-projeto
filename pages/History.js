import React, { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";

import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

import { auth } from "../firebase";
import { signOut, getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";

import Icon from "react-native-vector-icons/AntDesign";
import Icon1 from "react-native-vector-icons/Feather";
import HistoryTabs from "../navigation/HistoryTabs";

import styles from "../style/styles";

const History = ({ navigation, isEnglish }) => {
  const w = Dimensions.get("window").width;
  const h = Dimensions.get("window").height;

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
            {isEnglish ? <>Transactions</> : <>Movimentações</>}
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
          top: responsiveHeight(15),
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
            name="box"
            color="#FFF"
            size={38}
            style={{ marginRight: 25 }}
          />
          <View>
            <Text style={styles.p}>
              {isEnglish ? <>History</> : <>Histórico</>}
            </Text>
            <Text style={styles.h2}>
              {isEnglish ? <>My Transactions</> : <>Minhas Movimentações</>}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          top: 250,
          height: "100%",
          width: "100%",
          backgroundColor: "#FFF",
          alignItems: "center",
          justifyContent: "center",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
      >
        <View
          style={{
            marginTop: 10,
            height: "100%",
            width: "100%",
          }}
        >
          <HistoryTabs isEnglish={isEnglish} transactions={transactions} />
        </View>
      </View>
    </View>
  );
};

export default History;
