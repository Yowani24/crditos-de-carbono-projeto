import React, { useRef } from 'react';
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

import Icon1 from 'react-native-vector-icons/Feather';

import styles from '../../style/styles';
import Delayed from '../../components/Delayed';

const Calculator = ({ navigation, isEnglish }) => {
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
      duration: 1200,
      useNativeDriver: true,
    }).start();
  };

  const fade3 = useRef(new Animated.Value(0)).current;

  const fadeIn3 = () => {
    Animated.timing(fade3, {
      toValue: 1,
      duration: 1800,
      useNativeDriver: true,
    }).start();
  };

  const fade4 = useRef(new Animated.Value(0)).current;

  const fadeIn4 = () => {
    Animated.timing(fade4, {
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
            onPress={() => navigation.navigate('Homescreen1')}
          >
            <Icon1 name="chevron-left" color="#FFF" size={24} />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          top: responsiveHeight(15),
          width: responsiveWidth(80),
        }}
      >
        <View>
          <Text style={styles.calculatorTxt}>
            {isEnglish ? (
              <>WHAT IS YOUR CARBON FOOTPRINT?</>
            ) : (
              <>QUAL É A SUA PEGADA DE CARBONO?</>
            )}
          </Text>
        </View>
        <View
          style={{
            position: 'relative',
            top: responsiveHeight(15),
            alignItems: 'flex-end',
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
            <Animated.View onLayout={fadeIn4} style={{ opacity: fade4 }}>
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
            <View>
              <Delayed>
                <Animated.View
                  onLayout={(fadeIn1(), moveRight())}
                  style={{
                    backgroundColor: '#FFF',
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
                      Let's figure out what your&nbsp;
                      <Text style={{ fontWeight: 'bold' }}>
                        personal carbon footprint&nbsp;
                      </Text>
                      looks like!
                    </Text>
                  ) : (
                    <Text style={{ color: '#20376D' }}>
                      Vamos entender como está a sua&nbsp;
                      <Text style={{ fontWeight: 'bold' }}>
                        pegada de carbono!
                      </Text>
                    </Text>
                  )}
                </Animated.View>
              </Delayed>
              <Delayed waitBeforeShow={2500}>
                <Animated.View
                  onLayout={fadeIn2}
                  style={{
                    backgroundColor: '#FFF',
                    width: responsiveWidth(72),
                    height: 'auto',
                    paddingHorizontal: 24,
                    paddingVertical: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                    marginTop: 8,
                    opacity: fade2,
                  }}
                >
                  {isEnglish ? (
                    <Text style={{ color: '#20376D' }}>
                      <Text style={{ fontWeight: 'bold' }}>
                        Keep an eye on the value&nbsp;
                      </Text>
                      on top of the screen as it will update as you answer the
                      questions!
                    </Text>
                  ) : (
                    <Text style={{ color: '#20376D' }}>
                      <Text style={{ fontWeight: 'bold' }}>
                        Fique de olho pois o valor atualizará&nbsp;
                      </Text>
                      conforme você responde as perguntas!
                    </Text>
                  )}
                </Animated.View>
              </Delayed>
              <Delayed waitBeforeShow={5000}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    justifyContent: 'space-between',
                  }}
                >
                  <Animated.View
                    onLayout={fadeIn3}
                    style={{
                      backgroundColor: '#FFF',
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
                      opacity: fade3,
                    }}
                  >
                    {isEnglish ? (
                      <Text style={{ color: '#20376D' }}>
                        <Text style={{ fontWeight: 'bold' }}>
                          We'll ask you some questions&nbsp;
                        </Text>
                        about your routine.
                        <Text style={{ fontWeight: 'bold' }}>
                          &nbsp;Just go with the info&nbsp;
                        </Text>
                        that suits better your daily routine.
                      </Text>
                    ) : (
                      <Text style={{ color: '#20376D' }}>
                        <Text style={{ fontWeight: 'bold' }}>
                          Faremos algumas perguntas&nbsp;
                        </Text>
                        sobre sua rotina e&nbsp;
                        <Text style={{ fontWeight: 'bold' }}>
                          basta você selecionar&nbsp;
                        </Text>
                        qual opção tem mais a ver com o seu dia a dia.
                      </Text>
                    )}
                  </Animated.View>
                </View>
              </Delayed>
            </View>
          </View>
        </View>
      </View>
      <View style={{ position: 'absolute', bottom: 40 }}>
        <TouchableOpacity
          style={styles.btn2}
          onPress={() => navigation.navigate('Calculator2')}
        >
          <Text style={styles.btnTxt}>
            {isEnglish ? <>START</> : <>COMEÇAR</>}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Calculator;
