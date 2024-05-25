import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import Navigation from './Routers'

export default function index() {
  return (
   <NavigationContainer>
    <Navigation />
   </NavigationContainer>
  )
}

