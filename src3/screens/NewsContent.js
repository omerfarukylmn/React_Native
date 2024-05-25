import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {cripto} from '../assents/icons';

export default function NewsContent() {
  return (
    <View>
      <Image styles={styles.image} source={cripto} />
    </View>
  );
}
