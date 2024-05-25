import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import TopBarShopping from '../component/TopBar/TopBarShopping.1';
import {arrow,cart,search,ayakkabı,love} from '../assents/icons';
import Detail from '../component/Details/Detail';
import Contents from '../component/contents/Contents';
import Options from '../component/Options/Options';

export default function Shopping() {
  const navigation = useNavigation();
  return (
    <View style={styles.containerSafeArea}>
      <TopBarShopping
        back1={arrow}
        homeback={() => navigation.goBack()}
        search1={search}
        cart1={cart}
      />
      <View>
        <Detail ayakkabı1={ayakkabı}/>
        <Contents love1={love}/>
        <Options/>
      </View>
    </View>
  );
}
