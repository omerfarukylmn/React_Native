import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';

export default function View1() {
  return (
    <View style={styles.container1}>
      <View style={styles.container2}></View>
      <View style={styles.container}></View>
      <View style={styles.container}></View>
      <View style={styles.container}></View>
      <View style={styles.container}></View>
    </View>
  );
}
