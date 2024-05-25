import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import Button from '../ShopNowButton/Button';
import {useNavigation} from '@react-navigation/native';

export default function ShopNow(props) {
  const {ayakkabı1} = props;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.containerView}>
        <Text style={styles.containerText}>Jordan</Text>
      </View>
      <View style={styles.containerView}>
        <Text style={styles.containerText}>Jumpman Pro</Text>
      </View>
      <View style={styles.containerView}>
        <Text style={styles.containerText1}>AED 2400</Text>
      </View>
      <View style={styles.containerViewImage}>
        <Image source={ayakkabı1} style={styles.containerImage} />
      </View>
      <View style={styles.containerDiscount}>
        <Text style={styles.containerText3}> 15% </Text>
      </View>
      <View>
        <Button handlePress={() => navigation.navigate('Shopping')} />
      </View>
    </View>
  );
}
