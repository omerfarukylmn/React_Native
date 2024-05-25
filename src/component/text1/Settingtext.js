import { StyleSheet, Text, View ,Dimensions} from 'react-native'
import React from 'react'
import styles from './styles'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Settingtext(props) {
    const {setting} = props
  return (
    <View style={styles.containerViev}> 
      <Text
            style={styles.container}>
            {setting}
          </Text>
    </View>
  )
}

