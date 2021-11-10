import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  Dimensions,
} from "react-native";

import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

import Icon from "react-native-vector-icons/AntDesign";
import Icon1 from "react-native-vector-icons/Feather";

import styles from "../style/styles";

const Buy = ({ navigation, credits, setCredits, isEnglish, valorUn, dollar }) => {
  const w = Dimensions.get("window").width;
  const h = Dimensions.get("window").height;

  

  const addCredits = () => {
    setCredits(credits + 1);
  };

  const removeCredits = () => {
    if (credits > 1) {
      setCredits(credits - 1);
    } else {
      setCredits(0);
    }
  };

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
            {isEnglish ? <>Buy</> : <>Comprar</>}
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
          marginTop: responsiveHeight(5),
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
                  fontSize: responsiveFontSize(2),
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
        style={[
          styles.card,
          {
            height: 88,
            marginTop: 40,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          },
        ]}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: responsiveFontSize(2),
            color: "#20376D",
          }}
        >
          {isEnglish ? <>Select quantity</> : <>Selecionar quantidade</>}
        </Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => removeCredits()}>
            <Icon name="minuscircleo" size={24} color="#00CB00" />
          </TouchableOpacity>
          <View
            style={{
              borderBottomColor: "#ddd",
              borderBottomWidth: 1,
              width: responsiveWidth(16),
            }}
          >
            <Text
              style={{
                fontSize: 24,
                textAlign: "center",
                marginBottom: 10,
                color: "#20376D",
              }}
            >
              {credits}
            </Text>
          </View>
          <TouchableOpacity onPress={() => addCredits()}>
            <Icon name="pluscircleo" size={24} color="#00CB00" />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: responsiveWidth(90),
          marginVertical: responsiveHeight(2),
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: responsiveFontSize(2),
              color: "#FFF",
            }}
          >
            Total:
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              color: "#FFF",
              marginLeft: 5,
            }}
          >
            {credits} ONECO2
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            if (credits >= 1) {
              navigation.navigate("Payments");
            }
          }}
        >
          <View style={[styles.btn2, { width: responsiveWidth(50) }]}>
            <Text style={styles.btnTxt}>
              {isEnglish ? <>PROCEED</> : <>AVANÇAR</>}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ width: responsiveWidth(90), marginBottom: 40 }}>
        <Text style={[styles.p, { textAlign: "justify" }]}>
          {isEnglish ? (
            <>
              The trading of carbon credits by ONEARTH pays REDD+ environmental
              projects, which through their sustainable activities protect and
              preserve together an area of approximately 1m hectares.
            </>
          ) : (
            <>
              A comercialização de créditos de carbono pela ONEARTH remunera
              projetos ambientais REDD+, que através de suas atividades
              sustentáveis protegem e preservam em conjunto uma área de
              aproximadamente 1mi de hectares.
            </>
          )}
        </Text>
      </View>
      <View style={{ width: responsiveWidth(90), marginBottom: 20 }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: "#FFF",
            textAlign: "left",
          }}
        >
          {isEnglish ? <>Get to know the project:</> : <>Conheça o projeto:</>}
        </Text>
      </View>
      <View
        style={[
          styles.card,
          {
            height: responsiveHeight(16),
            flexDirection: "row",
            justifyContent: "space-between",
          },
        ]}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Projects")}>
          <Image
            source={require("../assets/project.jpg")}
            style={{
              width: responsiveWidth(40),
              height: responsiveHeight(12),
              borderRadius: 8,
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            width: responsiveWidth(40),
            height: responsiveHeight(12),
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Projects")}>
            <Text
              style={{
                fontSize: responsiveFontSize(1.5),
                color: "#707070",
                textAlign: "center",
              }}
            >
              {isEnglish ? (
                <>
                  Reforestation as Renewable Source of Wood Supplies for
                  Industrial Use in Brazil
                </>
              ) : (
                <>
                  Reflorestamento como fonte renovável de madeira para o uso
                  industrial no Brasil
                </>
              )}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Buy;
