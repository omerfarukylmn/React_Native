import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './styles' 

export default function Background(props) {
    const {arkaplan1} = props
  return (
    <View style={styles.arkaplan}>
      <Image source={arkaplan1} style={styles.containerImage}/>
      
    </View>
  )
}

