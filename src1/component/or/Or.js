import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './styles'


export default function Or(props) {
    const {or} = props
  return (
    <View>
      <View style={styles.containerView}></View>
      <Text style={styles.containerText}>
        {or}
      </Text>
      <View style={styles.containerView1}></View>
    </View>
  )
}

