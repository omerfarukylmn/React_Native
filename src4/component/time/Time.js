import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'


const BaseUrl = 'https://api.collectapi.com';
const getNews = '/pray/single';
const city = 'elazig';
const ezan = 'Akşam';
const data_city = '&data.city=' + city;
const data_ezan = '?ezan='+ezan;

export default function Time() {
    const [data, setData] = useState({});

    const SendRequest = () => {
      fetch(BaseUrl + getNews + data_ezan +data_city, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          authorization: 'apikey 6IpduJYMKDgFOGNZ6MVord:0HROohamAVEW6rcegp5Czu',
        },
      })
        .then(response => response.json())
        .then(r => {
          setData(r);
          console.log(r);
        })
        .catch(error => {
          console.error('Error:', error);
          throw error;
        });
    };
  
    useEffect(() => {
      SendRequest();
    }, []);
  
    return (
        <View style={styles.containerView}>
        {data.result && data.result.length > 0 ? (
          data.result.map((item, index) => (
            <View style={styles.containerView1} key={index}>
              <Text style={styles.containerText1}>{item.time}</Text>
              <Text style={styles.containerText1}>{new Date().toLocaleTimeString('tr-TR',{ hour: '2-digit', minute: '2-digit' })}</Text>
         </View>
          ))
        ) : (
          <Text style={{color: 'black'}}>Loading...</Text>
        )}
      </View>
  )
}
