import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './styles'

export default function Button(props) {
    const {handlePress} = props
  return (
    <TouchableOpacity onPress={handlePress}>
        <View style={styles.container}>
            <Text style={styles.containerText}>
                Shop Now
            </Text>
        </View>
    </TouchableOpacity>
  )
}

