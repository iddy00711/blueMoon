import React from 'react';

import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

import CitySearch from './CitySearch';

export default function HomePage(){
   return (
    <View>
        <Text >
            Clear Sky UK
        </Text>
        <Text>
            Type in to see the visibility for stars in your area
        </Text>
       
       <CitySearch/>
      
    </View>)
}

