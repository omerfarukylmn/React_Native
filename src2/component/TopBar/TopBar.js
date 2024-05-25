import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import Logo from '../logo/Logo';

export default function TopBar(props) {
  const {search2, camera1} = props;
  return (
    <View style={styles.containerTopBar}>
      <View style={styles.containerLogo}>
        <Logo />
      </View>
      <View style={styles.containerSearch}>
        <Image source={search2} style={styles.containerImage} />
        <Text style={styles.containerText}> What are you looking for</Text>
      </View>
      <View style={styles.containerCamera}>
        <Image source={camera1} style={styles.containerImage} />
      </View>
    </View>
  );
}
