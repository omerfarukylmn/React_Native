import {ScrollView, StyleSheet, Text, View,Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

export default function TrendNews(props) {
  const {cripto1,covid191,sel1,handlePress} = props
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>Walk with Trend</Text>
        <Text style={styles.text1}>Don't stoy behind , read the trend</Text>
      </View>
      <ScrollView horizontal={true} >
        <View style={styles.containerView}>
          <TouchableOpacity onPress={handlePress} style={styles.View}>
            <Image source={cripto1} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.View}>
          <Image source={covid191} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.View}>
          <Image source={sel1} style={styles.image} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
