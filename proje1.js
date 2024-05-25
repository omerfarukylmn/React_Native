import {
  View,
  Text,
  Dimensions,
  SafeAreaView,
  Image,
  ScrollView,
  
} from 'react-native';

import { kart , kart1 , man} from './src/assent/icons';
import React from 'react';
import Totalsent from './src/component/totalsent/Text';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const proje1 = () => {
  return (
    <SafeAreaView>
      
      <View
        style={{
          width: windowWidth,
          height: windowWidth * 0.2,
          //backgroundColor:'red',
          justifyContent: 'center',
        }}>
        
     
      </View>
      
      <ScrollView
        style={{
          
          width: windowWidth,
          height: windowHeight,
        }}>
        <View
          style={{
            width: windowWidth,
            height: windowWidth * 0.15,
            //backgroundColor:'red',
            justifyContent: 'center',
            marginLeft: 12,
          }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: '700',
            }}>
            My Cards
          </Text>
        </View>
        <ScrollView
          horizontal={true}
          style={{
            width: windowWidth,
            height: windowWidth * 0.4,
            //backgroundColor: 'yellow',
          }}>
          <View
            style={{
              //backgroundColor: 'red',
              width: windowWidth * 0.7,
              height: windowWidth * 0.37,
            }}>
            <Image
              source={kart}
              style={{
                marginLeft: 12,
              }}
            />
            <Text
              style={{
                position: 'absolute',
                fontSize: 18,
                color: '#FFFFFF',
                fontWeight: '500',
                marginLeft: 30,
                marginTop: 20,
              }}>
              Balance
            </Text>
            <Text
              style={{
                position: 'absolute',
                fontSize: 25,
                fontWeight: '500',
                color: '#FFFFFF',
                marginLeft: 30,
                marginTop: 45,
              }}>
              33,2941 USD
            </Text>
            <Text
              style={{
                position: 'absolute',
                fontSize: 20,
                fontWeight: '500',
                color: '#FFFFFF',
                marginLeft: 30,
                marginTop: 80,
              }}>
              **** **** **** 4545
            </Text>
            <Text
              style={{
                position: 'absolute',
                fontSize: 15,
                fontWeight: '500',
                color: '#FFFFFF',
                marginLeft: 30,
                marginTop: 125,
              }}>
              12/20
            </Text>
            <Text
              style={{
                position: 'absolute',
                fontSize: 17,
                fontWeight: '800',
                color: '#FFFFFF',
                marginLeft: 230,
                marginTop: 125,
              }}>
              VISA
            </Text>
          </View>
          <View
            style={{
              //backgroundColor: 'yellow',
              width: windowWidth * 0.7,
              height: windowWidth * 0.37,
            }}>
            <Image
              source={kart1}
              style={{
                marginLeft: 12,
              }}
            />
            <Text
              style={{
                position: 'absolute',
                fontSize: 18,
                color: '#FFFFFF',
                fontWeight: '500',
                marginLeft: 30,
                marginTop: 20,
              }}>
              Balance
            </Text>
            <Text
              style={{
                position: 'absolute',
                fontSize: 25,
                fontWeight: '500',
                color: '#FFFFFF',
                marginLeft: 30,
                marginTop: 45,
              }}>
              35,5085 EUR
            </Text>
            <Text
              style={{
                position: 'absolute',
                fontSize: 20,
                fontWeight: '500',
                color: '#FFFFFF',
                marginLeft: 30,
                marginTop: 80,
              }}>
              **** **** **** 4545
            </Text>
            <Text
              style={{
                position: 'absolute',
                fontSize: 15,
                fontWeight: '500',
                color: '#FFFFFF',
                marginLeft: 30,
                marginTop: 125,
              }}>
              12/20
            </Text>
            <Text
              style={{
                position: 'absolute',
                fontSize: 17,
                fontWeight: '800',
                color: '#FFFFFF',
                marginLeft: 230,
                marginTop: 125,
              }}>
              VISA
            </Text>
          </View>
        </ScrollView>
        <View
          style={{
            //backgroundColor:'red',
            marginTop: 20,
            width: windowWidth * 0.95,
            height: windowWidth * 0.08,
            marginLeft: 12,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '500',
            }}>
            Send Money to
          </Text>
          <Text
            style={{
              position: 'absolute',
              marginLeft: 310,
              fontSize: 20,
              fontWeight: '500',
            }}>
            Search
          </Text>
          <Image
            source={require('/Users/omerfarukyelman/proje3/search.png')}
            style={{
              position: 'absolute',
              width: windowWidth * 0.07,
              height: windowWidth * 0.07,
              alignSelf: 'flex-end',
            }}></Image>
        </View>
        <View
          style={{
            marginTop: 20,
            width: windowWidth * 0.6,
            height: windowWidth * 0.2,
            //backgroundColor: 'yellow',
          }}>
          <View
            style={{
              width: windowWidth * 0.2,
              height: windowWidth * 0.2,
              backgroundColor: '#C4C4C4',
              borderRadius: 100,
              marginLeft: 12,
              justifyContent: 'center',
            }}>
            <Image
              source={require('./src/assent/icons/man.png')}
              style={{
                width: windowWidth * 0.16,
                height: windowWidth * 0.16,
                alignSelf: 'center',
              }}></Image>
          </View>
          <View
            style={{
              position: 'absolute',
              width: windowWidth * 0.2,
              height: windowWidth * 0.2,
              backgroundColor: '#C4C4C4',
              borderRadius: 100,
              marginLeft: 52,
              justifyContent: 'center',
            }}>
            <Image
              source={require('/Users/omerfarukyelman/proje3/src/assent/icons/man.png')}
              style={{
                width: windowWidth * 0.16,
                height: windowWidth * 0.16,
                alignSelf: 'center',
              }}></Image>
          </View>
          <View
            style={{
              position: 'absolute',
              width: windowWidth * 0.2,
              height: windowWidth * 0.2,
              backgroundColor: '#C4C4C4',
              borderRadius: 100,
              marginLeft: 92,
              justifyContent: 'center',
            }}>
            <Image
              source={require('/Users/omerfarukyelman/proje3/src/assent/icons/man.png')}
              style={{
                width: windowWidth * 0.16,
                height: windowWidth * 0.16,
                alignSelf: 'center',
              }}></Image>
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
            marginLeft: 12,
            //backgroundColor:'red',
            width: windowWidth,
            height: windowWidth * 0.1,
          }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: '400',
            }}>
            Amount
          </Text>
        </View>
        <View
          style={{
            width: windowWidth,
            height: windowWidth * 0.2,
            //backgroundColor: 'red',
            justifyContent: 'center',
          }}>
          <View
            style={{
              marginLeft: 12,
              width: windowWidth * 0.7,
              height: windowWidth * 0.13,
              backgroundColor: '#EDEDED',
              borderRadius: 20,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 20,
                marginLeft: 20,
                fontWeight: '500',
              }}>
              450.00 USD
            </Text>
          </View>
          <View
            style={{
              position: 'absolute',
              width: windowWidth * 0.2,
              height: windowWidth * 0.13,
              backgroundColor: '#ED6645',
              borderRadius: 20,
              marginLeft: windowWidth * 0.76,
              justifyContent: 'center',
            }}>
            <Image
              source={require('/Users/omerfarukyelman/proje3/paper-plane.png')}
              style={{
                alignSelf: 'center',
                width: windowWidth * 0.08,
                height: windowWidth * 0.08,
              }}></Image>
          </View>
        </View>
        <View
          style={{
            width: windowWidth,
            height: windowWidth * 0.1,
            //backgroundColor:'yellow',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              marginLeft: 12,
              fontSize: 25,
              fontWeight: '400',
            }}>
            Total Sent
          </Text>
        </View>
        <View
          style={{
            width: windowWidth,
            height: windowHeight * 0.5,
            //backgroundColor: 'red',
            marginTop: 20,
          }}>
         
          <View
            style={{
              width: windowWidth,
              height: windowHeight * 0.08,
              //backgroundColor: 'yellow',
            }}>
            <View
              style={{
                position: 'absolute',
                width: windowWidth * 0.3,
                height: windowHeight * 0.08,
                //backgroundColor:'#000000',
                justifyContent: 'center',
              }}>
              <Image
                source={require('/Users/omerfarukyelman/proje3/man.png')}
                style={{
                  marginLeft: windowWidth * 0.03,
                  width: windowWidth * 0.15,
                  height: windowWidth * 0.15,
                }}></Image>
            </View>
            <View
              style={{
                marginLeft: windowWidth * 0.25,
                width: windowWidth * 0.3,
                height: windowHeight * 0.08,
                //backgroundColor: 'red',
              }}>
              <Text
                style={{
                  marginTop: windowWidth * 0.03,
                  fontSize: 20,
                  fontWeight: '500',
                }}>
                Max Villiam
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '300',
                }}>
                03 Aug 2020
              </Text>
            </View>
            <View
              style={{
                position: 'absolute',
                marginLeft: windowWidth * 0.65,
                width: windowWidth * 0.35,
                height: windowHeight * 0.08,
                //backgroundColor: 'red',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  marginTop: windowWidth * 0.03,
                  fontSize: 23,
                  fontWeight: '700',
                }}>
                $458.00 USD
              </Text>
            </View>
          </View>
          <View
            style={{
              width: windowWidth,
              height: windowHeight * 0.08,
              //backgroundColor: 'yellow',
            }}>
            <View
              style={{
                position: 'absolute',
                width: windowWidth * 0.3,
                height: windowHeight * 0.08,
                //backgroundColor:'#000000',
                justifyContent: 'center',
              }}>
              <Image
                source={require('/Users/omerfarukyelman/proje3/man.png')}
                style={{
                  marginLeft: windowWidth * 0.03,
                  width: windowWidth * 0.15,
                  height: windowWidth * 0.15,
                }}></Image>
            </View>
            <View
              style={{
                marginLeft: windowWidth * 0.25,
                width: windowWidth * 0.3,
                height: windowHeight * 0.08,
                //backgroundColor: 'red',
              }}>
              <Text
                style={{
                  marginTop: windowWidth * 0.03,
                  fontSize: 20,
                  fontWeight: '500',
                }}>
                Max Villiam
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '300',
                }}>
                03 Aug 2020
              </Text>
            </View>
            <View
              style={{
                position: 'absolute',
                marginLeft: windowWidth * 0.65,
                width: windowWidth * 0.35,
                height: windowHeight * 0.08,
                //backgroundColor: 'red',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  marginTop: windowWidth * 0.03,
                  fontSize: 23,
                  fontWeight: '700',
                }}>
                $458.00 USD
              </Text>
            </View>
          </View>
          <View
            style={{
              width: windowWidth,
              height: windowHeight * 0.08,
              //backgroundColor: 'yellow',
            }}>
            <View
              style={{
                position: 'absolute',
                width: windowWidth * 0.3,
                height: windowHeight * 0.08,
                //backgroundColor:'#000000',
                justifyContent: 'center',
              }}>
              <Image
                source={require('/Users/omerfarukyelman/proje3/man.png')}
                style={{
                  marginLeft: windowWidth * 0.03,
                  width: windowWidth * 0.15,
                  height: windowWidth * 0.15,
                }}></Image>
            </View>
            <View
              style={{
                marginLeft: windowWidth * 0.25,
                width: windowWidth * 0.3,
                height: windowHeight * 0.08,
                //backgroundColor: 'red',
              }}>
              <Text
                style={{
                  marginTop: windowWidth * 0.03,
                  fontSize: 20,
                  fontWeight: '500',
                }}>
                Max Villiam
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '300',
                }}>
                03 Aug 2020
              </Text>
            </View>
            <View
              style={{
                position: 'absolute',
                marginLeft: windowWidth * 0.65,
                width: windowWidth * 0.35,
                height: windowHeight * 0.08,
                //backgroundColor: 'red',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  marginTop: windowWidth * 0.03,
                  fontSize: 23,
                  fontWeight: '700',
                }}>
                $458.00 USD
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default proje1;

/**
 *    <Image
          source={require('/Users/omerfarukyelman/proje3/menu.png')}
          style={{
            width: windowWidth * 0.1,
            height: windowWidth * 0.1,
            marginLeft: 12,
          }}></Image>
        <Image
          source={require('/Users/omerfarukyelman/proje3/man.png')}
          style={{
            width: windowWidth * 0.1,
            height: windowWidth * 0.1,
            position: 'absolute',
            alignSelf: 'flex-end',
          }}></Image>
 */