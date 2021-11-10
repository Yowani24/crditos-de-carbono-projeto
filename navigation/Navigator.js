import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Homescreen from "../pages/Homescreen";
import Homescreen1 from "../pages/Homescreen1";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import Buy from "../pages/Buy";
import Projects from "../pages/Projects";
import Payments from "../pages/Payment";
import Wallet from "../pages/Wallet";
import History from "../pages/History";
import Calculator from "../pages/Calculator/Calculator";
import Calculator5 from "../pages/Calculator/Calculator5";
import Calculator4 from "../pages/Calculator/Calculator4";
import Calculator3 from "../pages/Calculator/Calculator3";
import Calculator2 from "../pages/Calculator/Calculator2";
import Results from "../pages/Calculator/Results";
import Password from "../pages/Password";

const Stack = createNativeStackNavigator();

const Navigator = ({
  credits,
  setCredits,
  isEnglish,
  setIsEnglish,
  valorTotal,
  valorUn,
  dollar,
  footPrint,
  setFootPrint,
  acumulo,
  setAcumulo,
  acumulo2,
  setAcumulo2,
  acumulo3,
  setAcumulo3,
  acumulo4,
  setAcumulo4

}) => {
  return (
    <Stack.Navigator initialRouteName="Homescreen">
      <Stack.Screen options={{ headerShown: false }} name="Homescreen">
        {(props) => (
          <Homescreen
            {...props}
            isEnglish={isEnglish}
            setIsEnglish={setIsEnglish}
          />
        )}
      </Stack.Screen>
      <Stack.Screen options={{ headerShown: false }} name="Homescreen1">
        {(props) => (
          <Homescreen1
            {...props}
            isEnglish={isEnglish}
            setIsEnglish={setIsEnglish}
          />
        )}
      </Stack.Screen>
      <Stack.Screen options={{ headerShown: false }} name="Calculator">
        {(props) => <Calculator {...props} isEnglish={isEnglish} />}
      </Stack.Screen>
      <Stack.Screen options={{ headerShown: false }} name="Calculator2">
        {(props) => <Calculator2 {...props} footPrint={footPrint} setAcumulo={setAcumulo} acumulo={acumulo} setFootPrint={setFootPrint} isEnglish={isEnglish} />}
      </Stack.Screen>
      <Stack.Screen options={{ headerShown: false }} name="Calculator3">
        {(props) => <Calculator3 {...props} footPrint={footPrint} acumulo={acumulo} acumulo2={acumulo2} setAcumulo2={setAcumulo2} setFootPrint={setFootPrint} isEnglish={isEnglish} />}
      </Stack.Screen>
      <Stack.Screen options={{ headerShown: false }} name="Calculator4">
        {(props) => <Calculator4 {...props} footPrint={footPrint} acumulo2={acumulo2} setAcumulo2={setAcumulo2} acumulo3={acumulo3} setAcumulo3={setAcumulo3} setFootPrint={setFootPrint} isEnglish={isEnglish} />}
      </Stack.Screen>
      <Stack.Screen options={{ headerShown: false }} name="Calculator5">
        {(props) => <Calculator5 {...props} footPrint={footPrint} acumulo3={acumulo3} setAcumulo3={setAcumulo3} setAcumulo4={setAcumulo4} setFootPrint={setFootPrint} isEnglish={isEnglish} />}
      </Stack.Screen>
      <Stack.Screen options={{ headerShown: false }} name="Results">
        {(props) => <Results {...props} footPrint={footPrint} acumulo={acumulo} acumulo2={acumulo2} acumulo3={acumulo3} acumulo4={acumulo4} isEnglish={isEnglish} />}
      </Stack.Screen>
      <Stack.Screen options={{ headerShown: false }} name="Signup">
        {(props) => <Signup {...props} isEnglish={isEnglish} />}
      </Stack.Screen>
      <Stack.Screen options={{ headerShown: false }} name="Login">
        {(props) => <Login {...props} isEnglish={isEnglish} />}
      </Stack.Screen>
      <Stack.Screen options={{ headerShown: false }} name="Home">
        {(props) => (
          <Home {...props} isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
        )}
      </Stack.Screen>
      <Stack.Screen options={{ headerShown: false }} name="Wallet">
        {(props) => <Wallet {...props} isEnglish={isEnglish} />}
      </Stack.Screen>
      <Stack.Screen options={{ headerShown: false }} name="Buy">
        {(props) => (
          <Buy
            {...props}
            credits={credits}
            setCredits={setCredits}
            isEnglish={isEnglish}
            valorTotal={valorTotal}
            valorUn={valorUn}
            dollar={dollar}
          />
        )}
      </Stack.Screen>
      <Stack.Screen options={{ headerShown: false }} name="Payments">
        {(props) => (
          <Payments
            {...props}
            credits={credits}
            setCredits={setCredits}
            isEnglish={isEnglish}
            valorTotal={valorTotal}
            valorUn={valorUn}
            dollar={dollar}
            footPrint={footPrint}
          />
        )}
      </Stack.Screen>
      <Stack.Screen options={{ headerShown: false }} name="History">
        {(props) => <History {...props} isEnglish={isEnglish} />}
      </Stack.Screen>
      <Stack.Screen options={{ headerShown: false }} name="Projects">
        {(props) => <Projects {...props} isEnglish={isEnglish} />}
      </Stack.Screen>
      <Stack.Screen options={{ headerShown: false }} name="Password">
        {(props) => <Password {...props} isEnglish={isEnglish} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default Navigator;
