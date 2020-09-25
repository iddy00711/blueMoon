
import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import HomePage from './HomePage';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WeatherCard from './WeatherCard'

const styles = StyleSheet.create({
    container:{
        backgroundColor:'black',
        margin:0,
        padding:0

    }
})

const Stack = createStackNavigator();


export default function NavPort(){
    return (
    <NavigationContainer style={styles.container}>
        <Stack.Navigator>
            <Stack.Screen name="HomePage" component={HomePage} options={{title: 'false'}} />
            <Stack.Screen name="WeatherCard" component={WeatherCard} headerShown= 'false'/>
        </Stack.Navigator> 
    </NavigationContainer>
    )
}