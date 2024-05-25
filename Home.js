import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import {menu, man, search,} from './src/assent/icons';
import HomeImage from './src/component/image/HomeImage';
import HomeText from './src/component/text/HomeText';

import Homeview from './src/component/homeview/Homeview';
import HomeView1 from './src/component/homeview/HomeView1';
import HomeViewMan from './src/component/homeview/HomeViewMan';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function proje3() {
  return (
    <SafeAreaView
      style={{
        marginLeft: windowWidth * 0.02,
      }}>
      <View
        style={{
          width: windowWidth,
          height: windowHeight * 0.06,
          //backgroundColor: 'red',
        }}>
        <HomeImage man={man} />
        <HomeImage menu={menu} />
      </View>
      <ScrollView
        style={{
          width: windowWidth,
          height: windowHeight,
        }}>
        <View
          style={{
            marginTop: windowWidth * 0.1,
            width: windowWidth,
            height: windowHeight * 0.04,
            //backgroundColor: 'red',
          }}>
          
        </View>
        <ScrollView
          horizontal={true}
          style={{
            marginTop: windowWidth * 0.05,
            width: windowWidth,
            height: windowHeight * 0.2,
            //backgroundColor:'yellow'
          }}>
         
        </ScrollView>

        <View
          style={{
            width: windowWidth,
            height: windowHeight * 0.04,
            //backgroundColor: 'yellow',
          }}>
          <HomeText htext=" Send Money to " />
          <Text
            style={{
              fontSize: 20,
              position: 'absolute',
              marginLeft: windowWidth * 0.75,
            }}>
            Search
          </Text>

          <Image
            source={search}
            style={{
              marginLeft: windowWidth * 0.905,
              position: 'absolute',
              //backgroundColor: 'yellow',
              width: windowWidth * 0.07,
              height: windowWidth * 0.07,
            }}></Image>
        </View>

        <Homeview profile />

        <HomeText htext=" Amont " />

        <HomeView1 paper />

        <HomeText htext="Total Sent" />
        <View
          style={{
            width: windowWidth,
            height: windowHeight * 0.1,
            //backgroundColor:'yellow'
          }}>
          <HomeViewMan total />
        </View>
        <View
          style={{
            width: windowWidth,
            height: windowHeight * 0.1,
            //backgroundColor:'yellow'
          }}>
          <HomeViewMan total />
        </View>
        <View
          style={{
            width: windowWidth,
            height: windowHeight * 0.1,
            //backgroundColor:'yellow'
          }}>
          <HomeViewMan total />
        </View>
        <View
          style={{
            width: windowWidth,
            height: windowHeight * 0.1,
            //backgroundColor:'yellow'
          }}>
          <HomeViewMan total />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
