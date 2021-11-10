import React from "react";
import {
  Text,
  View,
  Image,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";

import styles from "../style/styles";

import logo from "../assets/logo_4x.png";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const Homescreen1 = ({ navigation, isEnglish, setIsEnglish }) => {
  const w = Dimensions.get("window").width;
  const h = Dimensions.get("window").height;

  const setLanguage = () => {
    setIsEnglish(!isEnglish);
  };

  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          resizeMode="cover"
          style={{ position: "absolute", width: w, height: h }}
          source={require("../assets/gifs/forest.gif")}
        />
        <View
          style={{
            position: "absolute",
            top: responsiveHeight(10),
            right: responsiveWidth(5),
          }}
        >
          <TouchableOpacity onPress={setLanguage}>
            <Icon name="language" size={40} color="#FFF" />
          </TouchableOpacity>
          <Text style={{ color: "#FFF", fontWeight: "bold" }}>
            {isEnglish ? <>EN-US</> : <>PT-BR</>}
          </Text>
        </View>
        <View
          style={{
            width: 200,
            height: 169,
            position: "absolute",
            top: responsiveHeight(22),
          }}
        >
          <Image source={logo} style={{ width: "100%", height: "100%" }} />
        </View>
        <View style={{ position: "relative", top: responsiveHeight(20) }}>
          <TouchableOpacity onPress={() => navigation.navigate("Calculator")}>
            <View style={[styles.btn2, { marginBottom: responsiveHeight(2) }]}>
              <Text style={styles.btnTxt}>
                {isEnglish ? (
                  <>CALCULATE MY IMPACT</>
                ) : (
                  <>CALCULAR O MEU IMPACTO</>
                )}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <View
              style={[
                styles.btn2,
                { backgroundColor: "rgba(255,255,255,0.8)" },
              ]}
            >
              <Text style={[styles.btnTxt, { color: "#00CB00" }]}>
                {isEnglish ? <>SIGN UP</> : <>CADASTRE-SE</>}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.homescreenText}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={{ fontSize: 16, color: "#FFF" }}>
            {isEnglish ? (
              <>Skip and login</>
            ) : (
              <>Pular etapa e entrar no aplicativo</>
            )}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Homescreen1;
