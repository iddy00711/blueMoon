
import React from 'react';
import { View } from 'react-native';
import HomePage from './HomePage';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NotificationsScreen from './Notifications'

const Stack = createStackNavigator();


export default function NavPort(){
    return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="HomePage" component={HomePage}/>
            <Stack.Screen name="NotificationsScreen" component={NotificationsScreen} />
        </Stack.Navigator> 
    </NavigationContainer>
    )
}