import React, {  useState } from 'react';
import {StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
import getCity from './Api';
import WeatherCard from './WeatherCard';


export default function CitySearch (props){

   const[cityText, setCityText] = useState('');

   //setState to name of city
   function handleChange(event){
     return setCityText(event)

   }
    
   function hadndleAlert(){
   return console.log(1)
   }
    //get data from Api, send to weathercard comp
   function handleCity(city){

    getCity(cityText).then(res=>{
      

      
      if(res.cod=== '404' || res.cod === '400')
     { 
      Alert.alert(
        'Error', res.message
      )
       }

        else  {
          const {main, name, sys, visibility, weather, wind} = res

      const {temp, humidity, pressure} = main;
      const {country, sunrise, sunset} = sys;
      const {id, description, icon} = weather[0]
      const {speed} = wind

      return props.navigation.navigation.navigate('WeatherCard',
        {temp,humidity, pressure, name, visibility, id, description, icon, speed, country, sunrise, sunset})
          
        }
       
      
     })
   };

  

   

    return (<View>

    <TextInput onChangeText={handleChange}  placeholder= "city name"/>
       <Button onPress={handleCity}  title= "search">Search</Button>
</View>)
    }


