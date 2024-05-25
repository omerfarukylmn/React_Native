import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Shopping from '../screens/Shopping';

export default function Routers() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="Shopping"
        component={Shopping}
        options={{headerShown: false}}
        ></Stack.Screen>
    </Stack.Navigator>
  );
}
