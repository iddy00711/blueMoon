
import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import HomePage from './HomePage';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WeatherCard from './WeatherCard';
import PlanetPage from './components/PlanetPage';
import MessierCataloguePage from './MessierCataloguePage'

const Stack = createStackNavigator();

export default function NavPort(){
    return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="HomePage" component={HomePage} />
            <Stack.Screen name="WeatherCard" component={WeatherCard}/>
            <Stack.Screen name="MessierCataloguePage" component={MessierCataloguePage} />
            <Stack.Screen name="PlanetPage" component={PlanetPage} />
        </Stack.Navigator> 
    </NavigationContainer>
    )
}