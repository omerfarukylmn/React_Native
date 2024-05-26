import { Image, StyleSheet, Text, View , Dimensions} from 'react-native'
import React from 'react'
import styles from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import {arkaplan} from '../assent/icons';
import Flatlist from '../component/flatlist/Flatlist';
import Background from '../component/arkaplan/Background';

export default function home() {
  return (
    <SafeAreaView>
      <Background/>
        <Flatlist />
    </SafeAreaView>
  )
}

