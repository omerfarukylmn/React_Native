import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';

export default function Categories() {
  return (
    <View style={styles.categoriesContainer}>
      {['Covid-19', 'Crypto', 'Tech', 'Sport'].map(category => (
        <TouchableOpacity key={category} style={styles.categoryButton}>
          <Text style={styles.categoryButtonText}>{category}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
