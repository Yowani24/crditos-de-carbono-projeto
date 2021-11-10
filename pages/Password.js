import React, { useRef } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Alert,
  Animated,
  Dimensions,
} from 'react-native';

import { responsiveHeight } from 'react-native-responsive-dimensions';

import { TextInput } from 'react-native-paper';

import styles from '../style/styles';

const Password = ({ navigation, isEnglish }) => {
  const w = Dimensions.get('window').width;
  const h = Dimensions.get('window').height;

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
      Alert.alert(
        'Password changed successfully!',
        'Login with your new credentials.',
        [{ text: 'CONTINUE', onPress: () => navigation.navigate('Login') }]
      );
    } else {
      Alert.alert(
        'Senha alterada com sucesso!',
        'Acesse com suas novas credenciais.',
        [{ text: 'CONTINUAR', onPress: () => navigation.navigate('Login') }]
      );
    }
  };

  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          resizeMode="cover"
          style={{ position: 'absolute', width: w, height: h }}
          source={require('../assets/gifs/beach.gif')}
        />
        <View
          style={{
            width: 300,
            height: 200,
            justifyContent: 'center',
            flexDirection: 'row',
            position: 'absolute',
            top: responsiveHeight(10),
          }}
        >
          <Image
            source={require('../assets/logo_w.png')}
            style={{
              width: 48,
              height: 48,
            }}
          />
          <Image
            source={require('../assets/logo_name_w.png')}
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
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#fff',
            position: 'absolute',
            top: responsiveHeight(20),
          }}
        >
          {isEnglish ? (
            <>For a more {'\n'} sustainable planet</>
          ) : (
            <>Crie um planeta {'\n'}mais sustentável.</>
          )}
        </Text>
        <Text
          style={{
            fontSize: 16,
            position: 'absolute',
            top: responsiveHeight(30),
            color: '#FFF',
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
              {isEnglish ? <>Update password</> : <>Alterar senha</>}
            </Text>
            <TextInput
              style={styles.input2}
              keyboardType="email-address"
              label="E-mail"
              mode="outlined"
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
              style={styles.input2}
              keyboardType="default"
              label={isEnglish ? 'Password' : 'Senha'}
              mode="outlined"
              secureTextEntry
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
              style={styles.input2}
              keyboardType="default"
              label={isEnglish ? 'New password' : 'Nova senha'}
              mode="outlined"
              secureTextEntry
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
            <TouchableOpacity onPress={creatAcc}>
              <View style={[styles.btn2, { marginTop: 16 }]}>
                <Text style={styles.btnTxt}>
                  {isEnglish ? <>UPDATE</> : <>ATUALIZAR</>}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    </>
  );
};

export default Password;
