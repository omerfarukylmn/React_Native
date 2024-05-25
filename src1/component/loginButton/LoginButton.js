import { StyleSheet, Text, View , Dimensions, TouchableOpacity} from 'react-native'
import React from 'react'
import styles from './styles'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function LoginButton(props) {
const {handlePress1} = props
  return (
    <TouchableOpacity onPress={handlePress1} >
            <View style={styles.container}>
                <Text style={styles.containerText}>
                    Login
                </Text>
            </View>
    </TouchableOpacity> 
  )
}


