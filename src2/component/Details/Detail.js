import { Image, StyleSheet, Text, View , Dimensions} from 'react-native'
import React from 'react'
import styles from './styles'
import View1 from '../view/View1'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Detail(props) {
    const {ayakkabı1} = props
  return (
    <View style={styles.container}>
      <View style={styles.containerDiscount}>
        <Text style={styles.containerText3}>15%</Text>
      </View>
      <Image source={ayakkabı1} style={styles.containerImage} />
      <View style={styles.containerView}>
        <View1 />
      </View>
      
    </View>
  )
}

