import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';

import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

import { ProgressBar } from 'react-native-paper';

import Icon1 from 'react-native-vector-icons/Feather';

import styles from '../../style/styles';

const Calculator = ({ navigation, isEnglish, footPrint, acumulo, acumulo2, acumulo3, acumulo4 }) => {
  const w = Dimensions.get('window').width;
  const h = Dimensions.get('window').height;
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
            onPress={() => navigation.navigate('Calculator5')}
          >
            <Icon1 name="chevron-left" color="#FFF" size={24} />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          width: responsiveWidth(90),
          height: "auto",
          position: 'absolute',
          top: responsiveHeight(7),
        }}
      >
        <View>
          <View style={{ alignItems: 'center' }}>
            <Text
              style={{ fontSize: 48, fontWeight: 'bold', color: '#00CB00' }}
            >
              {footPrint}
            </Text>
            <Text
              style={{ fontSize: 16, fontWeight: 'bold', color: '#20376D' }}
            >
              Tons CO2
            </Text>
            <Text style={{ fontSize: 16, color: '#20376D' }}>
              {isEnglish ? <>Your emissions</> : <>Suas emissões</>}
            </Text>
          </View>
          <View
            style={{
              borderBottomColor: '#FFF',
              borderBottomWidth: 4,
              marginTop: 10,
            }}
          />
        </View>
      </View>
      <View style={styles.resultsBox}>
        {isEnglish ? (
          <>
            <Text
              style={{
                fontSize: responsiveFontSize(2),
                fontWeight: 'bold',
                marginBottom: 22,
                color: '#FFFFFF',
              }}
            >
              Composition of your footprint:
            </Text>
            <View>
              <Text style={{ color: '#FFF', fontSize: 16 }}>Electricity</Text>
              <ProgressBar
                progress={(acumulo/100)}
                color={'#00CB00'}
                style={{ height: 40, borderRadius: 50, marginVertical: 8 }}
              />
              <Text style={{ color: '#FFF', fontSize: 16 }}>Household</Text>
              <ProgressBar
                progress={(acumulo2/100)}
                color={'#00CB00'}
                style={{ height: 40, borderRadius: 50, marginVertical: 8 }}
              />
              <Text style={{ color: '#FFF', fontSize: 16 }}>Fuel</Text>
              <ProgressBar
                progress={(acumulo3/100)}
                color={'#00CB00'}
                style={{ height: 40, borderRadius: 50, marginVertical: 8 }}
              />
              <Text style={{ color: '#FFF', fontSize: 16 }}>
                Trips by plane
              </Text>
              <ProgressBar
                progress={(acumulo4/100)}
                color={'#00CB00'}
                style={{ height: 40, borderRadius: 50, marginVertical: 8 }}
              />
            </View>
          </>
        ) : (
          <>
            <Text
              style={{
                fontSize: responsiveFontSize(2),
                fontWeight: 'bold',
                marginBottom: 22,
                color: '#FFFFFF',
              }}
            >
              Contribuições por seguimento:
            </Text>
            <View>
              <Text style={{ color: '#FFF', fontSize: 16 }}>Energia</Text>
              <ProgressBar
                progress={(acumulo/100)}
                color={'#00CB00'}
                style={{ height: 40, borderRadius: 50, marginVertical: 8 }}
              />
              <Text style={{ color: '#FFF', fontSize: 16 }}>Gás</Text>
              <ProgressBar
                progress={(acumulo2/100)}
                color={'#00CB00'}
                style={{ height: 40, borderRadius: 50, marginVertical: 8 }}
              />
              <Text style={{ color: '#FFF', fontSize: 16 }}>Combustível</Text>
              <ProgressBar
                progress={(acumulo3/100)}
                color={'#00CB00'}
                style={{ height: 40, borderRadius: 50, marginVertical: 8 }}
              />
              <Text style={{ color: '#FFF', fontSize: 16 }}>
                Viagens Aéreas
              </Text>
              <ProgressBar
                progress={(acumulo4/100)}
                color={'#00CB00'}
                style={{ height: 40, borderRadius: 50, marginVertical: 8 }}
              />
            </View>
          </>
        )}
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: responsiveHeight(5),
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
            fontWeight: 'bold',
            marginBottom: 20,
            color: '#FFFFFF',
          }}
        >
          {isEnglish ? (
            <>Take immediate climate action</>
          ) : (
            <>Tome uma ação agora</>
          )}
        </Text>
        <TouchableOpacity
          style={[styles.btn2, { width: 174 }]}
          onPress={() => navigation.navigate('Payments')}
        >
          <Text style={styles.btnTxt}>
            {isEnglish ? <>OFFSET</> : <>COMPENSAR</>}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Calculator;
