import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import home from '../screens/Home';

export default function Routers() {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen
        name="home"
        component={home}
        options={{headerShown: false}}></Stack.Screen>
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})