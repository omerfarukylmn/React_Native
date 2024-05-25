import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import TopBar from '../component/TopBar/TopBar';
import {
  search,
  camera,
  ayakkabı,
  macbook,
  marshall,
  home,
  folder,
  user,
  cart,
} from '../assents/icons';
import ShopNow from '../component/shopNow/ShopNow';
import View1 from '../component/view/View1';
import NewArrivals from '../component/newArrivals/NewArrivals';
import BottomTop from '../component/bottomTop/BottomTop';

export default function Home(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.containerSafeArea}>
      <TopBar search2={search} camera1={camera} />
      <ScrollView style={styles.containerSafeArea}>
        <ShopNow ayakkabı1={ayakkabı} />
        <View1 />
        <NewArrivals pc={macbook} marshall1={marshall} />
      </ScrollView>
      <BottomTop home1={home} folder1={folder} user1={user} cart1={cart} />
    </View>
  );
}
