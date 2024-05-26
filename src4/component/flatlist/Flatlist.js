import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';


const BaseUrl = 'https://api.collectapi.com';
const getNews = '/pray/all';
const datacity='elazig';
const urlSent = `?datacity=?${datacity}`;
export default function Flatlist() {
  const [data, setData] = useState({});

  const SendRequest = () => {
    fetch(BaseUrl+getNews+datacity, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: 'apikey 6IpduJYMKDgFOGNZ6MVord:0HROohamAVEW6rcegp5Czu',
      },
    })
      .then(response => response.json())
      .then(r => {
        setData(r);
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
            <Text style={styles.containerText1}>{item.vakit}</Text>
            <Text style={styles.containerText}>{item.saat}</Text>
          </View>
        ))
      ) : (
        <Text style={{color: 'black'}}>Loading...</Text>
      )}
    </View>
  );
}
