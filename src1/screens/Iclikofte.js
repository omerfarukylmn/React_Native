import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import { içliköfte, star} from '../assents/icons';
import Meallist2 from '../component/mealslist/Meallist2';

export default function Etsis() {
  const navigation = useNavigation();
  return (
    <View>
      <Meallist2 meals1={içliköfte} meals0={star} />
    </View>
  );
}
