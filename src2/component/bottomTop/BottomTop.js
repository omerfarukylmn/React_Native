import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';

export default function BottomTop(props) {
  const {home1, folder1, user1, cart1, handellpress1} = props;
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity onPress={handellpress1} style={styles.containerView}>
          <Image source={home1} style={styles.containerImage} />
          <Text style={styles.containerText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handellpress1} style={styles.containerView}>
          <Image source={folder1} style={styles.containerImage} />
          <Text style={styles.containerText}>Categories</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handellpress1} style={styles.containerView}>
          <Image source={cart1} style={styles.containerImage} />
          <Text style={styles.containerText}>Cart</Text>
        </TouchableOpacity >
        <TouchableOpacity onPress={handellpress1} style={styles.containerView}>
          <Image source={user1} style={styles.containerImage} />
          <Text style={styles.containerText}>Account</Text>
        </TouchableOpacity >
      </View>
    </View>
  );
}
