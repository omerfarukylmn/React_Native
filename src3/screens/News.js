import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import TrendNews from '../component/trendnews/TrendNews';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  cripto,
  covid19,
  sel,
  home,
  danger,
  search,
  save,
} from '../assents/icons';
import TopNews from '../component/TopNews/TopNews';
import BottomTop from '../component/bottomTop/BottomTop';
import {useNavigation} from '@react-navigation/native';

export default function News() {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <ScrollView>
        <TrendNews
          cripto1={cripto}
          covid191={covid19}
          sel1={sel}
          handellpress={() => navigation.navigate('NewsContent')}
        />
        <TopNews covid191={covid19} cripto1={cripto} sel1={sel} />
      </ScrollView>
      <BottomTop
        home1={home}
        danger1={danger}
        search1={search}
        save1={save}
        handellpress={() => navigation.navigate('Home')}
      />
    </SafeAreaView>
  );
}
