import {StyleSheet, Text, View, FlatList, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Card} from './../../components/index';
import {Not, PlaceApi} from './../../service';

const windowHeight = Dimensions.get('window').height;
const country = 'tr';
  const tag = 'general';
  const urlSent = `?country=${country}&tag=${tag}`;
const payload = {
  title: 'Blog Title',
  body: 'lorem ipsum',
  userId: 1,
};

const FlatListCard = () => {
  const [news, setNews] = useState([]);

  const fetchData = () => {
    PlaceApi.getNewsApi(urlSent)
      .then(data => {
        console.log('data', data);
        setNews(data.result);
        console.log('news', news);
      })
      .catch(error => {
        console.error('Hata:', error);
      });

    Not.PlaceApi(payload)
      .then(data => {
        console.log('Veri alındı:', data);
      })
      .catch(error => {
        console.error('Hata:', error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <FlatList
      data={news}
      scrollEnabled={false}
      keyExtractor={item => item.id}
      renderItem={({item}) => {
        console.log('item', item);
        return (
          <View>
            <Card
              image={item.image}
              date={item.date}
              name={item.name}
              description={item.description}
            />
          </View>
        );
      }}
    />
  );
};

export default FlatListCard;
