import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Flatlist from '../component/flatlist/Flatlist';
import Background from '../component/arkaplan/Background';
import {arkaplan, ramazan} from '../assent/icons';
import Time from '../component/time/Time';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function home() {
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#3E76A3',
        width: windowWidth,
        height: windowHeight,
      }}>
      <Background arkaplan1={arkaplan} />
      <Flatlist />
      <View style={styles.View}>
        <Image source={ramazan} style={styles.container} />
        <Time />
      </View>
    </SafeAreaView>
  );
}
