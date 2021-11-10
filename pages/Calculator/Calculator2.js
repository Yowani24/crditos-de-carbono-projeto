import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  ImageBackground,
  Animated,
} from 'react-native';

import {
  responsiveWidth, responsiveHeight
} from 'react-native-responsive-dimensions';

import { LinearGradient } from 'expo-linear-gradient';

import { TextInput } from 'react-native-paper';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Icon1 from 'react-native-vector-icons/Feather';

import styles from '../../style/styles';
import Delayed from '../../components/Delayed';

const Calculator2 = ({ navigation, isEnglish, footPrint, setFootPrint, setAcumulo, acumulo  }) => {
  const [electricity, setElectricity] = useState(null);
  // const coeficiente = (coeficiente)

  const calculo = () => {
    let calc = Math.round(electricity * (0.01))
    if(calc ===0){
      calc = 1
    }
    setFootPrint(calc)
    setAcumulo(footPrint)
    console.log(acumulo)
    
  }

  const w = Dimensions.get('window').width;
  const h = Dimensions.get('window').height;

  const right = useRef(new Animated.Value(-500)).current;

  const moveRight = () => {
    Animated.timing(right, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const fade1 = useRef(new Animated.Value(0)).current;

  const fadeIn1 = () => {
    Animated.timing(fade1, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  };

  const fade2 = useRef(new Animated.Value(0)).current;

  const fadeIn2 = () => {
    Animated.timing(fade2, {
      toValue: 1,
      duration: 1400,
      useNativeDriver: true,
    }).start();
  };

  const fade3 = useRef(new Animated.Value(0)).current;

  const fadeIn3 = () => {
    Animated.timing(fade3, {
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
            onPress={() => navigation.navigate('Calculator')}
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
          position: 'relative',
          alignItems: 'flex-end',
          position: 'absolute',
          bottom: 166,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}
        >
          <Animated.View onLayout={fadeIn3} style={{ opacity: fade3 }}>
            <LinearGradient
              colors={['#179BD9', '#00CB00']}
              style={[styles.logoGradient, { marginRight: 20 }]}
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
          <View>
            <Delayed>
              <Animated.View
                onLayout={(fadeIn1(), moveRight())}
                style={{
                  backgroundColor: '#E1F3FB',
                  width: responsiveWidth(72),
                  height: 'auto',
                  paddingHorizontal: 24,
                  paddingVertical: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                  opacity: fade1,
                  transform: [{ translateX: right }],
                }}
              >
                {isEnglish ? (
                  <Text style={{ color: '#20376D' }}>
                    Let us know your&nbsp;
                    <Text style={{ fontWeight: 'bold' }}>
                      monthly expenses&nbsp;
                    </Text>
                    with electricity!
                  </Text>
                ) : (
                  <Text style={{ color: '#20376D' }}>
                    Informe seus&nbsp;
                    <Text style={{ fontWeight: 'bold' }}>
                      gastos mensais&nbsp;
                    </Text>
                    com energia elétrica!
                  </Text>
                )}
              </Animated.View>
            </Delayed>
            <Delayed waitBeforeShow={3200}>
              <Animated.View
                onLayout={fadeIn2}
                style={{
                  alignItems: 'flex-end',
                  justifyContent: 'space-between',
                  opacity: fade2,
                }}
              >
                <View
                  style={{
                    backgroundColor: '#E1F3FB',
                    width: responsiveWidth(72),
                    height: 'auto',
                    marginTop: 8,
                    paddingHorizontal: 24,
                    paddingVertical: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderTopRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderBottomRightRadius: 10,
                  }}
                >
                  {isEnglish ? (
                    <Text style={{ color: '#20376D' }}>
                      <Text style={{ fontWeight: 'bold' }}>
                        We'll estimate your consumption&nbsp;
                      </Text>
                      {'\n'}considering the average price of electricity:
                    </Text>
                  ) : (
                    <Text style={{ color: '#20376D' }}>
                      <Text style={{ fontWeight: 'bold' }}>
                        Estimaremos o seu consumo de energia&nbsp;
                      </Text>
                      com base no preço médio da energia elétrica:
                    </Text>
                  )}
                </View>
              </Animated.View>
            </Delayed>
          </View>
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
          }}
        >
          <View style={{ justifyContent: 'flex-start' }}>
            <View style={styles.boxTitleDiv}>
              <Icon
                name="energy"
                size={20}
                color="#20376D"
                style={{ marginRight: 8 }}
              />
              <Text style={styles.boxTitle}>
                {isEnglish ? <>Value</> : <>Medida</>}
              </Text>
            </View>
            <TextInput
              keyboardType="number-pad"
              type="number"
              mode="outlined"
              style={styles.input2}
              label={isEnglish ? "kWh/month" : "kWh/mês"}
              value={electricity}
              onChange={calculo}
              onChangeText={(electricity) => setElectricity(electricity)}
             
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
          </View>
        </View>
      </View>
      <View style={{ position: 'absolute', bottom: 22 }}>
        <TouchableOpacity
          style={[styles.btn2, { backgroundColor: '#179BD9' }]}
          onPress={() => navigation.navigate('Calculator3')}
        >
          <Text style={styles.btnTxt}>
            {isEnglish ? <>NEXT</> : <>PRÓXIMO</>}
          </Text>
        </TouchableOpacity>
        <Text style={styles.stepsTxt}>
          {isEnglish ? <>1 of 4</> : <>Etapa 1 de 4</>}
        </Text>
      </View>
    </View>
  );
};

export default Calculator2;
