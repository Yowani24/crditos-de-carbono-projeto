import React, { useState } from "react";

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Navigator from "./navigation/Navigator";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#00CB00",
    border: "#1f3368",
    card: "transparent",
    background: "transparent",
  },
};

export default function App() {
  const [credits, setCredits] = useState(0);
  const [valorUn, setValorUn] = useState((103.4).toFixed(2));
  const valorTotal = (credits * valorUn).toFixed(2);
  const [isEnglish, setIsEnglish] = useState(false);
  let dollar = 5.45;
  const [footPrint,setFootPrint] = useState(0);
  const [acumulo, setAcumulo] = useState(0);
  const [acumulo2, setAcumulo2] = useState(0);
  const [acumulo3, setAcumulo3] = useState(0);
  const [acumulo4, setAcumulo4] = useState(0);

  return (
    <>
      <NavigationContainer theme={MyTheme}>
        <Navigator
          credits={credits}
          setCredits={setCredits}
          isEnglish={isEnglish}
          setIsEnglish={setIsEnglish}
          valorTotal={valorTotal}
          valorUn={valorUn}
          dollar={dollar}
          footPrint = {footPrint}
          setFootPrint={setFootPrint}
          acumulo={acumulo}
          setAcumulo={setAcumulo}
          acumulo2={acumulo2}
          setAcumulo2={setAcumulo2}
          acumulo3={acumulo3}
          setAcumulo3={setAcumulo3}
          acumulo4={acumulo4}
          setAcumulo4={setAcumulo4}

        />
      </NavigationContainer>
    </>
  );
}
