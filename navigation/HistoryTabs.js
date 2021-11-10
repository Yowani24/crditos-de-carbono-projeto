import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon1 from "react-native-vector-icons/MaterialCommunityIcons";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

const HistoryTabs = ({ isEnglish, transactions }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{ headerShown: false }}
        name={isEnglish ? "Purchases" : "Compras"}
      >
        {(props) => (
          <Purchases
            {...props}
            isEnglish={isEnglish}
            transactions={transactions}
          />
        )}
      </Tab.Screen>
      {/*<Tab.Screen name="Neutralizados" component={Neutralized} />*/}
      {/*<Tab.Screen name="Transações" component={Transactions} />*/}
    </Tab.Navigator>
  );
};

const Purchases = ({ isEnglish, transactions }) => {
  return (
    <View style={{ backgroundColor: "#FFF", height: "100%" }}>
      <View style={{ marginTop: 40 }}>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 32,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ flex: 5, fontWeight: "bold", color: "#707070" }}>
            {isEnglish ? <>Date</> : <>Data</>}
          </Text>
          <Text style={{ flex: 4, fontWeight: "bold", color: "#707070" }}>
            {isEnglish ? <>Value Un.</> : <>Valor Un.</>}
          </Text>
          <Text style={{ flex: 2, fontWeight: "bold", color: "#707070" }}>
            {isEnglish ? <>Qnt</> : <>Qtd</>}
          </Text>
          <Text style={{ flex: 4, fontWeight: "bold", color: "#707070" }}>
            Total
          </Text>
          <Text style={{ flex: 5, fontWeight: "bold", color: "#707070" }}>
            {isEnglish ? <>Certificates</> : <>Certificados</>}
          </Text>
        </View>
        {Object.keys(transactions).forEach((element) => {
          <>
            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 32,
                alignItems: "center",
                marginVertical: 20,
              }}
            >
              <Text style={{ flex: 4, fontSize: 10, color: "#20376D" }}>
                {element}
              </Text>
              <Text
                style={{
                  flex: 3,
                  fontSize: 12,
                  color: "#20376D",
                  textAlign: "left",
                  marginRight: 10,
                  paddingLeft: 5,
                }}
              >
                {element.valorUnitario}
              </Text>
              <Text
                style={{
                  flex: 1,
                  fontSize: 12,
                  color: "#20376D",
                  marginRight: 10,
                }}
              >
                10
              </Text>
              <Text
                style={{
                  flex: 4,
                  fontSize: 12,
                  fontWeight: "bold",
                  color: "#20376D",
                }}
              >
                {element.valorTotal}
              </Text>
              <TouchableOpacity style={{ flex: 3 }}>
                <Text>
                  <Icon1 name="certificate" color="#1F3368" size={32} />
                </Text>
              </TouchableOpacity>
            </View>
          </>;
        })}
      </View>
    </View>
  );
};
{
  /******** DEACTIVATED TABS
  const Neutralized = () => {
  return (
    <View style={{ backgroundColor: "#FFF", height: "100%" }}>
      <View style={{ marginTop: 40 }}>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 32,
            alignItems: "center",
          }}
        >
          <Text style={{ flex: 6, fontWeight: "bold", color: "#707070" }}>
            Data
          </Text>
          <Text style={{ flex: 3, fontWeight: "bold", color: "#707070" }}>
            Status
          </Text>
          <Text style={{ flex: 3, fontWeight: "bold", color: "#707070" }}>
            Qtd
          </Text>
          <Icon name="right" color="#fff" size={15} />
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 32,
            alignItems: "center",
            marginVertical: 30,
          }}
        >
          <Text style={{ flex: 6, fontSize: 16, color: "#20376D" }}>
            22/09/2021 10:15
          </Text>
          <Text style={{ flex: 3 }}>
            <Icon name="clockcircleo" size={18} color="#707070" />
          </Text>
          <Text
            style={{
              flex: 3,
              fontSize: 16,
              fontWeight: "bold",
              color: "#20376D",
            }}
          >
            2
          </Text>
          <TouchableOpacity>
            <Icon name="right" color="#1F3368" size={15} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const Transactions = () => {
  return (
    <View style={{ backgroundColor: "#FFF", height: "100%" }}>
      <View style={{ marginTop: 40 }}>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 32,
            alignItems: "center",
          }}
        >
          <Text style={{ flex: 6, fontWeight: "bold", color: "#707070" }}>
            Data
          </Text>
          <Text style={{ flex: 3, fontWeight: "bold", color: "#707070" }}>
            Status
          </Text>
          <Text style={{ flex: 3, fontWeight: "bold", color: "#707070" }}>
            Qtd
          </Text>
          <Icon name="right" color="#fff" size={15} />
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 32,
            alignItems: "center",
            marginVertical: 30,
          }}
        >
          <Text style={{ flex: 6, fontSize: 16, color: "#20376D" }}>
            22/09/2021 10:15
          </Text>
          <Text style={{ flex: 3 }}>
            <Icon name="clockcircleo" size={18} color="#707070" />
          </Text>
          <Text
            style={{
              flex: 3,
              fontSize: 16,
              fontWeight: "bold",
              color: "#20376D",
            }}
          >
            2
          </Text>
          <TouchableOpacity>
            <Icon name="right" color="#1F3368" size={15} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderBottomColor: "#ddd",
            borderBottomWidth: 1,
            marginHorizontal: 30,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 32,
            alignItems: "center",
            marginVertical: 30,
          }}
        >
          <Text style={{ flex: 6, fontSize: 16, color: "#20376D" }}>
            07/06/2021 20:15
          </Text>
          <Text style={{ flex: 3 }}>
            <Icon name="checkcircleo" size={18} color="#00CB00" />
          </Text>
          <Text
            style={{
              flex: 3,
              fontSize: 16,
              fontWeight: "bold",
              color: "#20376D",
            }}
          >
            3
          </Text>
          <TouchableOpacity>
            <Icon name="right" color="#1F3368" size={15} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
******** DEACTIVATED TABS*/
}

export default HistoryTabs;
