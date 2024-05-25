import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './styles';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ListText(props) {
  const {textList1, icon, greaterr, icon1,handlePress} = props;
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.containerTextView}>
        <Text style={styles.containerText}>{textList1}</Text>
      </View>
      <View style={styles.containerImageView}>
        <Image source={icon} style={styles.containerImage}></Image>
      </View>
      <View style={styles.containerImage1View}>
        <Image source={greaterr} style={styles.containerImage}></Image>
      </View>
      <View style={styles.containerImage1View}>
        <Image source={icon1} style={styles.containeronbutton}></Image>
      </View>
    </TouchableOpacity>
  );
}
