import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import News from '../screens/News';
import NewsContent from '../screens/NewsContent';

export default function Routers() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="News"
        component={News}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="NewsContent"
        component={NewsContent}
        options={{headerShown: false}}></Stack.Screen>
    </Stack.Navigator>
  );
}
