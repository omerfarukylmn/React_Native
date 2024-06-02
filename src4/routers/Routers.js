import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../../src4/screens/Home';
import HavaDurumu from '../screens/HavaDurumu';

export default function Routers() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator initialRouteName="Namaz Vakitleri">
      <Drawer.Screen
        name="Namaz Vakitleri"
        component={Home}
        options={{
          headerStyle: {
            backgroundColor: '#003E4B',
          },
          headerTintColor: '#fff',
          drawerActiveBackgroundColor: 'white',
          drawerActiveTintColor: 'black',
          drawerInactiveTintColor: 'white',
          drawerStyle: {
            backgroundColor: '#003E4B',
            width: 240,
          },
        }}></Drawer.Screen>
      <Drawer.Screen
        name="Hava Durumu"
        component={HavaDurumu}
        options={{
          headerStyle: {
            backgroundColor: '#003E4B',
          },
          headerTintColor: '#fff',
          drawerActiveBackgroundColor: 'white',
          drawerActiveTintColor: 'black',
          drawerStyle: {
            backgroundColor: '#003E4B',
          },
        }}></Drawer.Screen>
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({});
