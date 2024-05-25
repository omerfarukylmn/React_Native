import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function BottomTop(props) {
  const {home1, danger1, search1, save1, handellpress1, handellpress} = props;
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity  onPress={handellpress} style={styles.containerView}>
          <Image source={home1} style={styles.containerImage} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handellpress1} style={styles.containerView}>
          <Image source={danger1} style={styles.containerImage} />
        </TouchableOpacity>
        <TouchableOpacity  style={styles.containerView}>
          <Image source={save1} style={styles.containerImage} />
        </TouchableOpacity >
        <TouchableOpacity  style={styles.containerView}>
          <Image source={search1} style={styles.containerImage} />
        </TouchableOpacity >
      </View>
    </View>
  );
}
