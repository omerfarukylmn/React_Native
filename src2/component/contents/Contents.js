import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';

export default function Contents(props) {
  const {love1} = props;
  return (
    <View style={styles.container}>
      <View style={styles.containerView}>
        <Text style={styles.containerText}>NIKE Store</Text>
        <Text style={styles.containerText1}>On Sale</Text>
        <Image source={love1} style={styles.containerImage} />
      </View>
      <View>
        <Text style={styles.containerText2}>Jordan Jumpman Pro</Text>
        <Text style={styles.containerText3}>AED 2400 </Text>
        <Text style={styles.containerText4}>
          The 25th anniversary of the Jordan Jumpman Pro marks the retur of this
          sleek , minimal shoe made from extra-luxe materials...
        </Text>
        <View style={{marginTop: 30}}>
          <Text style={styles.containerText5}>Size</Text>
          <View style={{position: 'absolute',marginLeft: 50,flexDirection: 'row'}}>
            <Text style={styles.containerText6}>US</Text>
            <Text style={styles.containerText6}>EU</Text>
            <Text style={styles.containerText6}>UK</Text>
          </View>
          <Text style={styles.containerText7}>Color</Text>
        </View>
      </View>
    </View>
  );
}
