
import React from 'react';
import HomePage from './HomePage';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WeatherCard from './WeatherCard'

const Stack = createStackNavigator();


export default function NavPort(){
    return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="HomePage" component={HomePage} options={{title: 'false'}} />
            <Stack.Screen name="WeatherCard" component={WeatherCard} headerShown= 'false'/>
        </Stack.Navigator> 
    </NavigationContainer>
    )
}