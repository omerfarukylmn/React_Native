import {ScrollView, View, Dimensions, FlatList} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Search from '../component/search/Search';
import {list, search, home, danger, save} from '../assents/icons';
import NewsView from '../component/news/NewsView';
import Categories from '../component/categories/Categories';
import NewList from '../component/newslist/NewList';
import BottomTop from '../component/bottomTop/BottomTop';
import {getNewApi} from '../services/place';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Home(props) {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const country = 'tr';
  const tag = 'general';
  const detilUrl = `?country=${tag}&tag=${country}`;
  const getData = () => {
    getNewApi(detilUrl).then(data => {
      setData(data);
      console.log('data', data);
    });
  };

  return (
    <SafeAreaView style={{width: windowWidth, height: windowHeight}}>
      <View style={styles.container}>
        <Search search1={search} list1={list} />
      </View>
      <ScrollView>
        <NewsView />
        <ScrollView horizontal={true}>
          <Categories />
        </ScrollView>
        <ScrollView>
          <NewList />
        </ScrollView>
      </ScrollView>
      <BottomTop
        home1={home}
        danger1={danger}
        search1={search}
        save1={save}
        handellpress1={() => navigation.navigate('News')}
      />
    </SafeAreaView>
  );
}
