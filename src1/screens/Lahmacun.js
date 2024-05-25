import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { styles } from '../component/shopping/styles'
import { lahmacun, star } from '../assents/icons'
import Meallist1 from '../component/mealslist/Meallist'

export default function Lahmacun() {
    const navigation = useNavigation();
  return (
    <View>
      <Meallist1 meals1={lahmacun} meals0={star}/>
    </View>
  )
}
