import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

import CitySearch from './CitySearch';


export default function HomePage(props){
   return (
    <View>
        <Text >
            Clear Sky UK /n
             Type in to see the visibility for stars in your area
        </Text>
        <CitySearch navigation={props}/> 
    </View>)
}

