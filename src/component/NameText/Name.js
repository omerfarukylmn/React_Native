import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React from 'react';
import styles from './styles';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function name(props) {
  const {name, icon,welcome,icon1} = props;
  return (
    <View style={styles.containerViev}>
      <View style={styles.containerImageManViev}>
        <Image source={icon} style={styles.containerImageMan}></Image>
      </View>
      <Text style={styles.containername}>{name}</Text>
      <Text style={styles.containerWelcome}>{welcome}</Text>
      <View style={styles.containerImageExitViev}>
      <Image source={icon1} style={styles.containerImageExit}></Image>
        </View>
    </View>
  );
}
