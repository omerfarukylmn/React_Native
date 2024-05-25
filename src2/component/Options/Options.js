import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';

export default function Options() {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <View style={{flexDirection: 'row' }}>
          <View style={styles.containerView}>
            <Text style={styles.containerText}>7</Text>
          </View>
          <View style={styles.containerView1}>
            <Text style={styles.containerText}>8</Text>
          </View>
          <View style={styles.containerView}>
            <Text style={styles.containerText}>9</Text>
          </View>
        </View>
        <View style={styles.containerView2}>
          <View>
            
          </View>
        </View>
        <View style={styles.containerView2}></View>
        <View style={styles.containerView2}></View>
      </View>
      <View></View>
    </View>
  );
}
