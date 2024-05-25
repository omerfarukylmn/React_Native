import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';

export default function HeaderImages() {
  return (
    <View style={styles.container}>
      <TouchableOpacity  style={{position: 'relative'}}>
        <Image style={styles.image} />
        <View style={styles.lineWrapper}>
          <View style={styles.subLines} />
          <View style={styles.line} />
          <View style={styles.subLines} />
        </View>
      </TouchableOpacity>
    </View>
  );
}
