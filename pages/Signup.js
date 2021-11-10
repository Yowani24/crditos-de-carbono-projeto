import React, { useRef, useState, useEffect, createContext } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Alert,
  Dimensions,
  Animated,
} from "react-native";

import { responsiveHeight } from "react-native-responsive-dimensions";

import { TextInput } from "react-native-paper";

import styles from "../style/styles";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../firebase";
import { getDatabase, ref, set } from "firebase/database";

const Signup = ({ navigation, isEnglish }) => {
  const w = Dimensions.get("window").width;
  const h = Dimensions.get("window").height;

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const currentUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      ).then(() => {
        const userId = auth.currentUser.uid;
        const db = getDatabase();
        set(ref(db, "users/" + userId), {
          username: userName,
          email: email,
        });
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const top = useRef(new Animated.Value(500)).current;

  const moveTop = () => {
    Animated.timing(top, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  const creatAcc = () => {
    if (isEnglish) {
      Alert.alert("Account creation successful!", [
        {
          text: "CONTINUE",
          onPress: () => navigation.navigate("Home"),
        },
      ]);
    } else {
      Alert.alert("Conta criada com sucesso!", [
        { text: "CONTINUAR", onPress: () => navigation.navigate("Home") },
      ]);
    }
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
            <>Sign up to start</>
          ) : (
            <>Crie sua conta {"\n"}para começar.</>
          )}
        </Text>
        <Text
          style={{
            fontSize: 16,
            position: "absolute",
            top: responsiveHeight(30),
            color: "#FFF",
            lineHeight: 24,
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
              {isEnglish ? <>Sign up</> : <>Cadastrar</>}
            </Text>
            <TextInput
              style={styles.input2}
              keyboardType="default"
              label={isEnglish ? "Name" : "Nome"}
              mode="outlined"
              value={userName}
              onChangeText={(text) => setUserName(text)}
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
              keyboardType="email-address"
              label="E-mail"
              mode="outlined"
              value={email}
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
            {email === "" || password === "" || userName === "" ? (
              <TouchableOpacity
                disabled
                style={[
                  styles.btn2,
                  { marginTop: 16, backgroundColor: "#707070" },
                ]}
              >
                <View>
                  <Text style={styles.btnTxt}>
                    {isEnglish ? <>SIGN UP</> : <>CADASTRAR</>}
                  </Text>
                </View>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={handleRegister}>
                <View style={[styles.btn2, { marginTop: 16 }]}>
                  <Text style={styles.btnTxt}>
                    {isEnglish ? <>SIGN UP</> : <>CADASTRAR</>}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          </View>
        </Animated.View>
      </View>
    </>
  );
};

export default Signup;
