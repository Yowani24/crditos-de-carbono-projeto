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

import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/Feather';

import styles from '../../style/styles';

const Calculator5 = ({ navigation, isEnglish, footPrint, setFootPrint, acumulo3, setAcumulo4 }) => {
  const [trips, setTrips] = useState(null);
  const [inTrips, setInTrips] = useState(null);

  const w = Dimensions.get('window').width;
  const h = Dimensions.get('window').height;

  const right = useRef(new Animated.Value(-500)).current;

  const calculo = () => {
    let calc = Math.round(((trips * (0.24)) + (inTrips * (2.32))))
    if(calc === 0){
      calc = 1
    }
    setFootPrint(acumulo3 + calc)
    setAcumulo4(footPrint)

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
        source={require('../../assets/gifs/wind.gif')}
      />
      <View style={styles.navBar}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.navigate('Calculator4')}
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
                Estimate how many&nbsp;
                <Text style={{ fontWeight: 'bold' }}>
                  national and international trips by plane&nbsp;
                </Text>
                you take in a year:
              </Text>
            ) : (
              <Text style={{ color: '#20376D' }}>
                <Text style={{ fontWeight: 'bold' }}>
                  Informe a quantidade de viagens aéreas
                </Text>
                , nacionais e internacionais, que você realiza por ano:
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
            alignItems: 'center',
            paddingBottom: 10,
            justifyContent: 'center',
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
          }}
        >
          <View style={{ justifyContent: 'flex-start' }}>
            <View style={styles.boxTitleDiv}>
              <Icon
                name="airplane"
                size={20}
                color="#20376D"
                style={{ marginRight: 8 }}
              />
              <Text style={styles.boxTitle}>
                {isEnglish ? <>Trips by plane</> : <>Viagens aéreas</>}
              </Text>
            </View>
            <TextInput
              keyboardType="number-pad"
              type="number"
              mode="outlined"
              style={styles.input2}
              label={isEnglish ? "National trips" : "Viagens nacionais"}
              value={trips}
              onChangeText={(trips) => setTrips(trips)}
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
            <TextInput
              keyboardType="number-pad"
              mode="outlined"
              style={styles.input2}
              label={isEnglish ? "International trips" : "Viagens internacionais"}
              value={inTrips}
              onChangeText={(inTrips) => setInTrips(inTrips)}
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

          </View>
        </View>
      </View>
      <View style={{ position: 'absolute', bottom: 22 }}>
        <TouchableOpacity
          style={styles.btn2}
          onPress={() => navigation.navigate('Results')}
        >
          <Text style={styles.btnTxt}>
            {isEnglish ? <>NEXT</> : <>PRÓXIMO</>}
          </Text>
        </TouchableOpacity>
        <Text style={styles.stepsTxt}>
          {isEnglish ? <>4 of 4</> : <>Etapa 4 de 4</>}
        </Text>
      </View>
    </View>
  );
};

export default Calculator5;
