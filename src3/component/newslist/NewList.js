import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';

export default function HeaderImages() {
  return (
    <View style={styles.newsListContainer}>
      <View style={styles.newsItem}>
        <Image style={styles.newsImage} />
        <View style={styles.newsTextContainer}>
          <Text style={styles.newsTitle}>
            'How income tax rule applies on your cryptocurrency gains –
            Explained'
          </Text>
          <Text style={styles.newsTime}>'15 mins read'</Text>
        </View>
      </View>
    </View>
  );
}
