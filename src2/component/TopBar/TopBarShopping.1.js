import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';

export default function TopBarShopping(props) {
  const {back1, search1, cart1, homeback} = props;
  return (
    <View style={styles.containerTopBar1}>
      <TouchableOpacity onPress={homeback}>
        <Image source={back1} style={styles.containerImage} />
      </TouchableOpacity>
      <Text style={styles.containerText1}>Prouct Details</Text>
      <View style={styles.containerView}>
        <Image source={search1} style={styles.containerImage1} />
        <Image source={cart1} style={styles.containerImage1} />
      </View>
    </View>
  );
}
