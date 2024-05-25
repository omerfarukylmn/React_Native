import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';

export default function Search(props) {
  const {search1, list1} = props;
  return (
    <View style={styles.containerView}>
      <View style={styles.container}>
        <Text style={styles.containerText}>Search News</Text>
        <Image source={search1} style={styles.containerImage} />
      </View>
      <Image source={list1} style={styles.containerImage1} />
    </View>
  );
}
