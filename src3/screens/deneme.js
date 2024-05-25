import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';
import Button from '../../src2/component/ShopNowButton/Button';
import {SafeAreaView} from 'react-native-safe-area-context';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function deneme() {
  return (
    <SafeAreaView>
      <View
        style={{
          width: windowWidth * 0.5,
          height: windowHeight * 0.5,
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <Button/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
