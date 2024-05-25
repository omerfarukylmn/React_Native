import { Image, StyleSheet, Text, View , Dimensions} from 'react-native'
import React from 'react'
import styles from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import {arkaplan} from '../assent/icons';

export default function home() {
  return (
    <SafeAreaView>
        <View>
            <Image source={arkaplan} style={{width: '100%', height: '100%'}}></Image>
        </View>
    </SafeAreaView>
  )
}

