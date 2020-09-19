import React, {  useState } from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import getCity from './Api';
import NotificationsScreen from './Notifications';


export default function CitySearch (props){

   const[cityText, setCityText] = useState([]);
    
    
   function handleCity(city){

    getCity().then(res=>{
       
       setCityText(prevState=>{
           return [...prevState, res]
           
       })
     })
   };

    return (<View>

    <TextInput   placeholder= "city name"/>

       <Button onPress={handleCity} title= "search">Search</Button>
       <Button
        title="Go to Notifications"
        onPress={() => props.navigation.navigation.navigate(NotificationsScreen, {x:1})}
      />
</View>)
    }


