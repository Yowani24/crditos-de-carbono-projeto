import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  Dimensions,
  Animated,
} from 'react-native';

import {
  responsiveWidth, responsiveHeight
} from 'react-native-responsive-dimensions';

import { LinearGradient } from 'expo-linear-gradient';
import { TextInput, RadioButton } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';

import Icon from 'react-native-vector-icons/Fontisto';
import Icon1 from 'react-native-vector-icons/Feather';

import styles from '../../style/styles';

const Calculator4 = ({ navigation, isEnglish, footPrint, setFootPrint, acumulo2,setAcumulo2, acumulo3, setAcumulo3 }) => {
  const [distance, setDistance] = useState(null);
  const [selectedCar, setSelectedCar] = useState('none');
  const [checked, setChecked] = useState('m³');

  const w = Dimensions.get('window').width;
  const h = Dimensions.get('window').height;

  const right = useRef(new Animated.Value(-500)).current;

  const calculo = () => {
    let calc = Math.round(distance * (0.002))
    if(calc === 0){
      calc = 1
    }
    setFootPrint(acumulo2 + calc)
    setAcumulo3(footPrint)

    console.log(acumulo2, calc)

  }

  const moveRight = () => {
    Animated.timing(right, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const fade = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fade, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  };

  const fade1 = useRef(new Animated.Value(0)).current;

  const fadeIn1 = () => {
    Animated.timing(fade1, {
      toValue: 1,
      duration: 2200,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        style={{ position: 'absolute', width: w, height: h }}
        source={require('../../assets/gifs/forest.gif')}
      />
      <View style={styles.navBar}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.navigate('Calculator3')}
          >
            <Icon1 name="chevron-left" color="#FFF" size={24} />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          width: responsiveWidth(90),
          top: responsiveHeight(7),
          height: "auto",
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
        }}
      >
        <View
          style={{ width: 160, justifyContent: 'center', alignItems: 'center' }}
        >
          <View>
            <Text
              style={{ fontSize: 56, fontWeight: 'bold', color: '#00CB00' }}
            >
              {footPrint}
            </Text>
          </View>
          <View>
            <Text
              style={{ fontSize: 18, fontWeight: 'bold', color: '#20376D' }}
            >
              Tons CO2
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 166,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
          }}
        >
          <Animated.View onLayout={fadeIn1} style={{ opacity: fade1 }}>
            <LinearGradient
              colors={['#179BD9', '#00CB00']}
              style={styles.logoGradient}
            >
              <Image
                source={require('../../assets/logo_w.png')}
                style={{
                  width: 35,
                  height: 35,
                }}
              />
            </LinearGradient>
          </Animated.View>
          <Animated.View
            onLayout={(fadeIn(), moveRight())}
            style={{
              backgroundColor: '#E1F3FB',
              width: responsiveWidth(72),
              height: 'auto',
              paddingHorizontal: 24,
              paddingVertical: 20,
              alignItems: 'center',
              justifyContent: 'center',
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
              borderBottomRightRadius: 10,
              opacity: fade,
              transform: [{ translateX: right }],
            }}
          >
            {isEnglish ? (
              <Text style={{ color: '#20376D' }}>
                We'll estimate&nbsp;
                <Text style={{ fontWeight: 'bold' }}>
                  your monthly consumption&nbsp;
                </Text>
                based on the type of vehicle and fuel:
              </Text>
            ) : (
              <Text style={{ color: '#20376D' }}>
                Calcularemos o seu&nbsp;
                <Text style={{ fontWeight: 'bold' }}>
                  consumo mensal de combustível&nbsp;
                </Text>
                com base no tipo de veículo e combustível:
              </Text>
            )}
          </Animated.View>
        </View>
        <View
          style={{
            marginTop: 22,
            backgroundColor: '#FFF',
            width: responsiveWidth(90),
            height: 'auto',
            paddingBottom: 10,
            alignItems: 'center',
            justifyContent: 'center',
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            paddingBottom: 12,
          }}
        >
          <View style={{ justifyContent: 'flex-start' }}>
            <View style={styles.boxTitleDiv}>
              <Icon
                name="car"
                size={20}
                color="#20376D"
                style={{ marginRight: 8 }}
              />
              <Text style={styles.boxTitle}>
                {isEnglish ? (
                  <>Vehicle consumption</>
                ) : (
                  <>Consumo do seu automóvel</>
                )}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#EFEFEF',
                borderRadius: 8,
                width: responsiveWidth(80),
                height: responsiveHeight(5),
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 16,
              }}
            >
              <Picker
                mode="dropdown"
                selectedValue={selectedCar}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedCar(itemValue)
                }
                dropdownIconColor="#20376D"
                style={{
                  color: '#20376D',
                  fontSize: 16,
                  backgroundColor: '#EFEFEF',
                  width: responsiveWidth(80),
                  height: responsiveHeight(5),
                  paddingHorizontal: 20,
                  border: 'none',
                  borderRadius: 10,
                }}
              >
                <Picker.Item label={isEnglish ? "I don't have a car" : "Não possuo carro"} value="none" />
                <Picker.Item label={isEnglish ? "Gas" : "Gasolina"} value="gas" />
                <Picker.Item label={isEnglish ? "Ethanol" : "Etanol"} value="alcohol" />
                <Picker.Item label="Diesel" value="diesel" />
                <Picker.Item label="Biodiesel" value="biodiesel" />
                <Picker.Item label={isEnglish ? "VNG" : "GNV"} value="gnv" />
                <Picker.Item label={isEnglish ? "Electric" : "Elétrico"} value="electric" />
              </Picker>
            </View>
            {selectedCar === 'electric' ? (
              <TextInput
                keyboardType="number-pad"
                type="number"
                mode="outlined"
                style={styles.input2}
                label={isEnglish ? "kWh/month" : "kWh/mês"}
                value={distance}
                onChangeText={(distance) => setDistance(distance)}
                onChange={calculo}
                theme={{
                  colors: {
                    placeholder: '#999999',
                    text: '#20376D',
                    primary: '#20376D',
                    underlineColor: '#20376D',
                    background: '#FFF',
                  },
                }}
              />
            ) : selectedCar === 'gnv' ? (
              <TextInput
                keyboardType="number-pad"
                type="number"
                mode="outlined"
                style={styles.input2}
                label="m³/kg"
                value={distance}
                onChangeText={(distance) => setDistance(distance)}
                onChange={calculo}
                theme={{
                  colors: {
                    placeholder: '#999999',
                    text: '#20376D',
                    primary: '#20376D',
                    underlineColor: '#20376D',
                    background: '#FFF',
                  },
                }}
              />
            ) : selectedCar === 'none' ? (
              <></>
            ) : (
              <TextInput
                keyboardType="number-pad"
                type="number"
                mode="outlined"
                style={styles.input2}
                label={isEnglish ? "Liters" : "Litros"}
                value={distance}
                onChangeText={(distance) => setDistance(distance)}
                onChange={calculo}
                theme={{
                  colors: {
                    placeholder: '#999999',
                    text: '#20376D',
                    primary: '#20376D',
                    underlineColor: '#20376D',
                    background: '#FFF',
                  },
                }}
              />
            )}
          </View>
          {selectedCar === 'electric' ? (
            <View>
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#20376D',
                    marginTop: 16,

                    fontWeight: 'bold',
                  }}
                >
                  {isEnglish ? (
                    <>Where do you charge your vehicle batteries?</>
                  ) : (
                    <>Onde você recarrega a sua bateria?</>
                  )}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginBottom: 20,
                  marginTop: 16,
                  alignItems: 'center',
                  justifyContent: "space-between"
                }}
              >
                <RadioButton
                  value="home"
                  status={checked === 'home' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('home')}
                  color="#20376D"
                />
                <Text
                  style={{ marginRight: 24, fontSize: 16, color: '#999999' }}
                >
                  {isEnglish ? <>Home</> : <>Em casa</>}
                </Text>
                <RadioButton
                  value="outdoor"
                  status={checked === 'outdoor' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('outdoor')}
                  color="#20376D"
                />
                <Text
                  style={{ marginRight: 24, fontSize: 16, color: '#999999' }}
                >
                  {isEnglish ? <>Outdoors</> : <>Fora de casa</>}
                </Text>
              </View>
            </View>
          ) : (
            <></>
          )}
        </View>
      </View>
      <View style={{ position: 'absolute', bottom: 22 }}>
        <TouchableOpacity
          style={[styles.btn2, { backgroundColor: '#179BD9' }]}
          onPress={() => navigation.navigate('Calculator5')}
        >
          <Text style={styles.btnTxt}>
            {isEnglish ? <>NEXT</> : <>PRÓXIMO</>}
          </Text>
        </TouchableOpacity>
        <Text style={styles.stepsTxt}>
          {isEnglish ? <>3 of 4</> : <>Etapa 3 de 4</>}
        </Text>
      </View>
    </View>
  );
};

export default Calculator4;
