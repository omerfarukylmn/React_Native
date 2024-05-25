import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
export default function SignInSign(props) {
  const {signin, signup} = props;
  return (
    <View>
      <Text style={styles.containerSignIn}>{signin}</Text>
      <Text style={styles.containerSignUp}>{signup}</Text>
      <View style={styles.continerView}></View>
    </View>
  );
}
