import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';

export default function Errormessage(props) {
  const {text, link} = props;
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.containerTextView}>
          <Text style={styles.containerText}>{text}</Text>
        </View>
        <View style={styles.containerTextView}>
          <Text style={styles.containerwhatsapp}>{link}</Text>
        </View>
      </View>
    </View>
  );
}
