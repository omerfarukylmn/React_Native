import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigaton from './Routers';
export default function index() {
  return (
    <NavigationContainer>
      <Navigaton />
    </NavigationContainer>
  );
}
