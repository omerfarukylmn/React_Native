import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import {shopping} from '../assents/icons';
import Shoppimage from '../component/shopping/Shoppimage';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import Category from '../component/category/Category';
import Meals from '../component/meals/Meals';
import {
  lahmacun,
  adana,
  beyti,
  etlipide,
  etşiş,
  içliköfte,
  mantı,
  yapraksarma,
  likenull,
  likeplump,
} from '../assents/icons';
import {useNavigation} from '@react-navigation/native';

export default function Menü() {
  const navigate = useNavigation();

  return (
    <SafeAreaView>
      <View>
        <Shoppimage shopping1={shopping} />
      </View>
      <ScrollView horizontal={true}>
        <Category />
      </ScrollView>
      <View>
        <ScrollView style={styles.containerScrollView}>
          <Meals
            meals1={lahmacun}
            likeplump={likeplump}
            meals2={adana}
            likenull={likenull}
            meals3={beyti}
            meals4={etlipide}
            meals5={etşiş}
            meals6={içliköfte}
            meals7={mantı}
            meals8={yapraksarma}
            handlePress2={() => navigate.navigate('Lahmacun')}
            handlePress3={() => navigate.navigate('Adana')}
            handlePress4={() => navigate.navigate('Beyti')}
            handlePress5={() => navigate.navigate('EtliPide')}
            handlePress6={() => navigate.navigate('Etsis')}
            handlePress7={() => navigate.navigate('Iclikofte')}
            handlePress8={() => navigate.navigate('Mantı')}
            handlePress9={() => navigate.navigate('YaprakSarma')}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
