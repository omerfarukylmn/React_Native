import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';

export default function TopNews(props) {
  const {covid191,cripto1,sel1} = props;
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>Top reads of the day</Text>
        <View style={styles.imageView}>
          <Image source={covid191} style={styles.image} />
          <View style={styles.textView}>
            <Text style={styles.text1}>
              Covid-19: ICMR stuying vaccine effect on Delta plus, result ilkely
              soon
            </Text>
            <Text style={styles.text2}>10 mins read                           Today</Text>
          </View>
          <View></View>
        </View>

        <View style={styles.imageView}>
          <Image source={sel1} style={styles.image} />
          <View style={styles.textView}>
            <Text style={styles.text1}>
            Top Cryptocurrency Prices Today: Bitcoin, Binance Coin up; Dogecoin surges 25', time: '5 mins read
            </Text>
            <Text style={styles.text2}>10 mins read                           Today</Text>
          </View>
          <View></View>
        </View>

        <View style={styles.imageView}>
          <Image source={cripto1} style={styles.image} />
          <View style={styles.textView}>
            <Text style={styles.text1}>
            Top Cryptocurrency Prices Today: Bitcoin, Binance Coin up; Dogecoin surges 25', time: '5 mins read

            </Text>
            <Text style={styles.text2}>10 mins read                           Today</Text>
          </View>
          <View></View>
        </View>

        <View style={styles.imageView}>
          <Image source={covid191} style={styles.image} />
          <View style={styles.textView}>
            <Text style={styles.text1}>
            Covid shaves off household savings for 2nd straight quarter', time: '20 mins read
            </Text>
            <Text style={styles.text2}>10 mins read                           Today</Text>
          </View>
          <View></View>
        </View>
      </View>
    </ScrollView>
  );
}
