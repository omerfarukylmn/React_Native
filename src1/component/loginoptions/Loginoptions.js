import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';

export default function Loginoptions(props) {
  const {loginoptions1, google1, twitter1, facebook1} = props;
  return (
    <View>
      <View style={styles.containerTextView}>
        <Text style={styles.containerText}>{loginoptions1}</Text>
      </View>
      <View style={styles.containerview}>
        <Image source={google1} style={styles.container} />
        <Image source={twitter1} style={styles.container} />
        <Image source={facebook1} style={styles.container} />
      </View>
    </View>
  );
}
