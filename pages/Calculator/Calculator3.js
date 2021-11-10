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
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import { LinearGradient } from 'expo-linear-gradient';
import { TextInput } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/Feather';

import styles from '../../style/styles';

const Calculator3 = ({ navigation, isEnglish, footPrint, setFootPrint, setAcumulo2, acumulo }) => {
  const [consume, setConsume] = useState(null);
  const [fuel, setFuel] = useState(null);

  const calculo = () => {
    let calc = Math.round(consume * (0.003))
    if(calc === 0){
      calc = 1
    }
    setFootPrint(acumulo + calc)
    setAcumulo2(footPrint)
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
        source={require('../../assets/gifs/wind.gif')}
      />
      <View style={styles.navBar}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.navigate('Calculator2')}
          >
            <Icon1 name="chevron-left" color="#FFF" size={24} />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          height: "auto",
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: responsiveHeight(7),
          width: responsiveWidth(90),
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
                <Text style={{ fontWeight: 'bold' }}>
                  Let us know your monthly consumption of fuel&nbsp;
                </Text>
                considering the demand in your household:
              </Text>
            ) : (
              <Text style={{ color: '#20376D' }}>
                <Text style={{ fontWeight: 'bold' }}>
                  Informe o consumo mensal de combustíveis&nbsp;
                </Text>
                com base no volume utilizado em sua residência:
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
          }}
        >
          <View style={{ justifyContent: 'flex-start' }}>
            <View style={styles.boxTitleDiv}>
              <Icon
                name="house"
                size={20}
                color="#20376D"
                style={{ marginRight: 8 }}
              />
              <Text style={styles.boxTitle}>
                {isEnglish ? (
                  <>Household consumption</>
                ) : (
                  <>Consumo na sua residência</>
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
                selectedValue={fuel}
                onValueChange={(itemValue, itemIndex) => setFuel(itemValue)}
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
                <Picker.Item
                  label={isEnglish ? 'Cooking gas' : 'Gás'}
                  value="gas"
                />
                <Picker.Item
                  label={isEnglish ? 'Coal' : 'Carvão'}
                  value="coal"
                />
                <Picker.Item
                  label={isEnglish ? 'Wood' : 'Lenha'}
                  value="wood"
                />
                <Picker.Item label="Diesel" value="diesel" />
              </Picker>
            </View>
            {fuel !== 'diesel' ? (
              <TextInput
                keyboardType="number-pad"
                type="number"
                mode="outlined"
                style={styles.input2}
                label="kg"
                value={consume}
                onChangeText={(consume) => setConsume(consume)}
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
            ) : (
              <TextInput
                keyboardType="number-pad"
                type="number"
                mode="outlined"
                style={styles.input2}
                label={isEnglish ? 'Liters' : 'Litros'}
                value={consume}
                onChangeText={(consume) => setConsume(consume)}
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
        </View>
      </View>
      <View style={{ position: 'absolute', bottom: 22 }}>
        <TouchableOpacity
          style={[styles.btn2, { backgroundColor: '#179BD9' }]}
          onPress={() => navigation.navigate('Calculator4')}
        >
          <Text style={styles.btnTxt}>
            {isEnglish ? <>NEXT</> : <>PRÓXIMO</>}
          </Text>
        </TouchableOpacity>
        <Text style={styles.stepsTxt}>
          {isEnglish ? <>2 of 4</> : <>Etapa 2 de 4</>}
        </Text>
      </View>
    </View>
  );
};

export default Calculator3;
