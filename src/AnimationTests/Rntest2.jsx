import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {enableScreens} from 'react-native-screens';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {NavigationContainer} from '@react-navigation/native';

enableScreens();

const Stack = createSharedElementStackNavigator();

export default function Rntest2 () {
 

  
    return (
      <NavigationContainer>
        <Stack.Navigator intialRouteName = 'List' headerMode = 'none'>
        <Stack.Screen name = 'List' Component={List}/>
        <Stack.Screen name = 'Detail' Component={Detail}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  
}
