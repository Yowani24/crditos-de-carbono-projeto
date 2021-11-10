import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  Animated,
} from "react-native";

import { TextInput } from "react-native-paper";
import { responsiveHeight } from "react-native-responsive-dimensions";

import { signInWithEmailAndPassword, onAuthStateChanged } from "@firebase/auth";

import styles from "../style/styles";
import { auth } from "../firebase";

const Login = ({ navigation, isEnglish }) => {
  const w = Dimensions.get("window").width;
  const h = Dimensions.get("window").height;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {}
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        navigation.navigate("Home");
      }
    });
  }, []);

  const top = useRef(new Animated.Value(500)).current;

  const moveTop = () => {
    Animated.timing(top, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          resizeMode="cover"
          style={{ position: "absolute", width: w, height: h }}
          source={require("../assets/gifs/beach.gif")}
        />
        <View
          style={{
            width: 300,
            height: 200,
            justifyContent: "center",
            flexDirection: "row",
            position: "absolute",
            top: responsiveHeight(10),
          }}
        >
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
              marginLeft: -20,
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 32,
            fontWeight: "bold",
            textAlign: "center",
            color: "#fff",
            position: "absolute",
            top: responsiveHeight(20),
          }}
        >
          {isEnglish ? (
            <>For a more {"\n"} sustainable planet</>
          ) : (
            <>Crie um planeta {"\n"}mais sustentável.</>
          )}
        </Text>
        <Text
          style={{
            fontSize: 16,
            position: "absolute",
            top: responsiveHeight(30),
            color: "#FFF",
          }}
        >
          {isEnglish ? (
            <>Offset your emissions now</>
          ) : (
            <>Neutralize suas emissões agora</>
          )}
        </Text>
        <Animated.View
          onLayout={moveTop}
          style={[styles.loginScreen, { transform: [{ translateY: top }] }]}
        >
          <View>
            <Text style={styles.loginTitle}>
              {isEnglish ? <>Login</> : <>Entrar</>}
            </Text>
            <TextInput
              style={styles.input2}
              keyboardType="email-address"
              value={email}
              label="E-mail"
              mode="outlined"
              onChangeText={(text) => setEmail(text)}
              theme={{
                colors: {
                  placeholder: "#999999",
                  text: "#20376D",
                  primary: "#20376D",
                  underlineColor: "#20376D",
                  background: "#FFF",
                },
              }}
            />
            <TextInput
              style={styles.input2}
              keyboardType="default"
              label={isEnglish ? "Password" : "Senha"}
              mode="outlined"
              secureTextEntry
              value={password}
              onChangeText={(text) => setPassword(text)}
              theme={{
                colors: {
                  placeholder: "#999999",
                  text: "#20376D",
                  primary: "#20376D",
                  underlineColor: "#20376D",
                  background: "#FFF",
                },
              }}
            />
            <TouchableOpacity onPress={handleLogin}>
              <View style={[styles.btn2, { marginVertical: 18 }]}>
                <Text style={styles.btnTxt}>
                  {isEnglish ? <>LOGIN</> : <>ENTRAR</>}
                </Text>
              </View>
            </TouchableOpacity>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <Text
                style={{ fontSize: 16, color: "#888", textAlign: "center" }}
              >
                {isEnglish ? (
                  <>Don't have an account?</>
                ) : (
                  <>Não possui uma conta?</>
                )}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: "#00CB00",
                  marginLeft: 5,
                  textAlign: "center",
                }}
                onPress={() => navigation.navigate("Signup")}
              >
                {isEnglish ? <>Sign up</> : <>Cadastre-se</>}
              </Text>
            </View>
          </View>
        </Animated.View>
      </View>
    </>
  );
};

export default Login;
