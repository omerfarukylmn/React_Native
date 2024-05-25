import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';

export default function Login(props) {
  const {email, password, forgotpassword, remember, check} = props;
  
  return (
    <View>
      <Text style={styles.containerText}>{email}</Text>
      <View style={styles.containerView}></View>
      <Text style={styles.containerText}>{password}</Text>
      <View style={styles.containerView}></View>
      <Text style={styles.continerForget}>{forgotpassword}</Text>
      <View style={styles.continerRememberView}>
        <Image source={check} style={styles.containeryes}/>
      </View>
      <Text style={styles.continerRemember}>{remember}</Text>
    </View>
  );
}
