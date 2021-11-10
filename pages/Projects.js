import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Dimensions,
} from 'react-native';

import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Map from '../components/Map';

import styles from '../style/styles';

const Projects = ({ navigation, isEnglish }) => {
  const w = Dimensions.get('window').width;
  const h = Dimensions.get('window').height;

  return (
    <View style={[styles.container, { flex: 1 }]}>
      <ImageBackground
        resizeMode="cover"
        style={{ position: 'absolute', width: w, height: h }}
        source={require('../assets/background.png')}
      />
      <View style={styles.navBar}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => navigation.navigate('Buy')}>
            <Icon
              name="arrowleft"
              color="#FFF"
              size={26}
              style={{ marginRight: responsiveWidth(5) }}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#FFF' }}>
            {isEnglish ? <>Projects</> : <>Projetos</>}
          </Text>
        </View>
        {/*<TouchableOpacity>
          <Icon1 name="menu" color="#FFF" size={32} />
        </TouchableOpacity>*/}
      </View>
      <View
        style={{
          backgroundColor: '#FFF',
          height: responsiveHeight(90),
          position: 'absolute',
          bottom: 0,
        }}
      >
        <ScrollView
          style={{
            height: '100%',
          }}
        >
          <View style={{ marginLeft: 32 }}>
            <Text
              style={{
                color: '#20376D',
                fontSize: 18,
                fontWeight: 'bold',
                marginBottom: 8,
                marginTop: 16,
                paddingRight: 20,
              }}
            >
              {isEnglish ? (
                <>
                  Reforestation as Renewable Source of Wood Supplies for
                  Industrial Use in Brazil
                </>
              ) : (
                <>
                  Reflorestamento como fonte renovável de madeira para o uso
                  industrial no Brasil
                </>
              )}
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <Icon2
                name="location-outline"
                color="#00CB00"
                size={20}
                style={{ marginRight: 8 }}
              />
              <Text
                style={{ color: '#707070', fontSize: 16, fontWeight: 'bold' }}
              >
                Morada Nova de Minas, MG -{' '}
                {isEnglish ? <>Brazil</> : <>Brasil</>}
              </Text>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              height: responsiveHeight(30),
              backgroundColor: '#DDD',
              marginTop: responsiveHeight(2),
              marginBottom: responsiveHeight(2),
            }}
          >
            <Map />
          </View>
          <View style={{ width: responsiveWidth(90) }}>
            <View style={{ width: responsiveWidth(90), marginLeft: responsiveWidth(5) }}>
              <Text
                style={{
                  color: '#20376D',
                  fontSize: responsiveFontSize(2),
                  fontWeight: 'bold',
                  marginBottom: 16,
                }}
              >
                {isEnglish ? <>More details</> : <>Mais detalhes</>}
              </Text>
              <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <View style={styles.projectCards}>
                  <Icon1
                    name="calendar"
                    color="#00CB00"
                    size={28}
                    style={{ marginBottom: 18 }}
                  />
                  <Text
                    style={{ fontSize: 16, color: '#707070', fontWeight: 'bold' }}
                  >
                    2000
                  </Text>
                  <Text style={{ fontSize: 14, color: '#999' }}>
                    {isEnglish ? <>year</> : <>ano</>}
                  </Text>
                </View>
                <View style={styles.projectCards}>
                  <Icon2
                    name="map"
                    color="#00CB00"
                    size={28}
                    style={{ marginBottom: 18 }}
                  />
                  <Text
                    style={{ fontSize: 16, color: '#707070', fontWeight: 'bold' }}
                  >
                    11.700
                  </Text>
                  <Text style={{ fontSize: 14, color: '#999' }}>hectares</Text>
                </View>
                <View style={styles.projectCards}>
                  <Icon2
                    name="time-outline"
                    color="#00CB00"
                    size={28}
                    style={{ marginBottom: 18 }}
                  />
                  <Text
                    style={{ fontSize: 16, color: '#707070', fontWeight: 'bold' }}
                  >
                    30 {isEnglish ? <>years</> : <>anos</>}
                  </Text>
                  <Text style={{ fontSize: 14, color: '#999' }}>
                    {isEnglish ? <>timespan</> : <>duração</>}
                  </Text>
                </View>
              </View>
            </View>
            <View style={{ width: responsiveWidth(90), marginLeft: responsiveWidth(5) }}>
              <Text
                style={{
                  color: '#20376D',
                  fontSize: responsiveFontSize(2),
                  fontWeight: 'bold',

                  marginTop: 16,
                }}
              >
                {isEnglish ? <>Description</> : <>Descrição</>}
              </Text>
              <Text
                style={{
                  color: '#707070',
                  fontSize: 16,
                  marginTop: responsiveHeight(2),
                  marginBottom: responsiveHeight(5),
                  paddingRight: responsiveWidth(2),
                  textAlign: 'justify',
                }}
              >
                {isEnglish ? (
                  <>
                    The establishment of plantations as a renewable source of
                    energy for industrial needs is expected to result in a twofold
                    benefit to the climate: (i) generation of carbon stocks and
                    GHG removals by sinks additional to those that would occur in
                    the absence of such plantations, and (ii) use of sustainable
                    sources of biomass in place of fossil fuels and non-renewable
                    biomass to reduce GHG emission in one of Brazil’s major
                    industrial sector, i.e. the iron and steel industry. Whereas
                    98.55% of the world’s iron ore reduction in blast furnaces was
                    undertaken using coal coke, only 0.73% of the global iron
                    production in 2005 used charcoal from renewable biomass from
                    planted forests supplies as the reducing agent (Research on
                    IISI 2006; SINDIFER, 2006 and AMS, 2006).
                  </>
                ) : (
                  <>
                    Espera-se que o estabelecimento de plantações como fonte
                    renovável de energia para necessidades industriais resulte em
                    um benefício duplo para o clima: (i) geração de estoques de
                    carbono e remoção de GEE por pias adicionais às que ocorreriam
                    na ausência de tais plantações, e (ii) uso de fontes
                    sustentáveis de biomassa no lugar de combustíveis fósseis e
                    biomassa não renovável para reduzir a emissão de GEE em um dos
                    principais setores industriais do Brasil, ou seja, a indústria
                    de ferro e aço. Considerando que 98,55% da redução mundial do
                    minério de ferro em alto-fornos foi realizada usando coque de
                    carvão, apenas 0,73% da produção global de ferro em 2005 usou
                    carvão vegetal a partir de biomassa renovável de suprimentos
                    de florestas plantadas como agente redutor (Pesquisa sobre
                    iisi 2006; SINDIFER, 2006 e AMS, 2006).
                  </>
                )}
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Projects;
