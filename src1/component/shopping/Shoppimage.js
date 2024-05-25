import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import styles from './styles';

export default function Shoppinımage(props) {
  const {shopping1} = props;
  return (
    <View>
      <View style={styles.containerView}>
        <Text style={styles.containerText}>Menü</Text>
        <Image source={shopping1} style={styles.container} />
      </View>
    </View>
  );
}
