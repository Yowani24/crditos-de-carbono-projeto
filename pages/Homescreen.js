import React from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from '../style/styles';

import logo from '../assets/logo_4x.png';

import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const Homescreen = ({ navigation, isEnglish, setIsEnglish }) => {
  const w = Dimensions.get('window').width;
  const h = Dimensions.get('window').height;

  const setLanguage = () => {
    setIsEnglish(!isEnglish);
  };

  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          resizeMode="cover"
          style={{ position: 'absolute', width: w, height: h }}
          source={require('../assets/gifs/forest.gif')}
        />
        <View
          style={{
            position: 'absolute',
            top: responsiveHeight(10),
            right: responsiveWidth(5),
          }}
        >
          <TouchableOpacity onPress={setLanguage}>
            <Icon name="language" size={40} color="#FFF" />
          </TouchableOpacity>
          <Text style={{ color: '#FFF', fontWeight: 'bold' }}>
            {isEnglish ? <>EN-US</> : <>PT-BR</>}
          </Text>
        </View>
        <View style={{ width: 200, height: 169 }}>
          <Image source={logo} style={{ width: '100%', height: '100%' }} />
        </View>
        <TouchableOpacity
          style={styles.homescreenText}
          onPress={() => navigation.navigate('Homescreen1')}
        >
          <Text style={{ fontSize: 16, color: '#FFF' }}>
            {isEnglish ? <>Tap to start</> : <>Toque para começar</>}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Homescreen;
