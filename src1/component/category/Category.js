import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';

export default function Category() {
  return (
    <View horizontal={true} style={styles.containerView}>
      <View style={styles.container}>
        <View style={styles.containerView2}>
          <Text style={styles.containerText}>Meals</Text>
          <View style={styles.containerView1}></View>
        </View>
        <Text style={styles.containerText}>Sides</Text>
        <Text style={styles.containerText}>Snecks</Text>
      </View>
    </View>
  );
}
