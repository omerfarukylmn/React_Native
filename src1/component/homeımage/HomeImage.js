import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './styles'

export default function HomeImage(props) {
  const {yemek1} = props
  return (
    <View>
      <Image source={yemek1} style={styles.container}/>
      
    </View>
  )
}

