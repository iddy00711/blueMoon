import React, {  useState } from 'react';
import {StyleSheet, Text, View, TextInput, Alert} from 'react-native';
import getCity from '../api/Api';
import {convertFirstLetter }from '../utlis/utlis';
import Button from './Button'

const styles = StyleSheet.create({
  container:{
    position:'relative',
    width:'100%',
    display:'flex',
    flex: 1,
    flexDirection:"column",
    justifyContent: "center",
    alignItems:'center',
    padding: 10,
    margin:10,
  },
  
  inputBar:{
    position:'absolute',
    textAlign:'center',
    backgroundColor: "white",
    borderStyle:'solid',
    borderColor:'white',
    borderRadius:10,
    justifyContent:'center',
    alignContent:'center',
    fontFamily:'comic sans',
    fontSize: 20,
    fontWeight: "bold",
    color:'black',
    paddingVertical: '.3%',
    paddingHorizontal: 0,
    margin:10
  
  }, 
})
export default function CitySearch (props){

   const[cityText, setCityText] = useState('');

   function handleChange(event){return setCityText(event)};
  
   function handleCity(){

    const correctCityText =  convertFirstLetter(cityText);

      getCity(correctCityText).then(res=>{
        
        if(res.cod=== '404' || res.cod === '400'){ 
        Alert.alert('Error', res.message);}
        else{
        const {main, name, sys, visibility, weather, wind, clouds} = res;
        const {temp, humidity, pressure} = main;
        const {country, sunrise, sunset} = sys;
        const {id, description, icon, main:weatherType} = weather[0];
        const {speed} = wind;
        const{all:cloud} = clouds;
       
  
        return props.navigation.navigation.navigate('WeatherCard',
          {temp,humidity, pressure, name, visibility, id, description, icon, speed, country, sunrise, sunset, cloud, weatherType})}
        })
         .then(setCityText(''))
   };
    return (
    <View style={styles.container}>  
      <TextInput style={styles.inputBar} onChangeText={handleChange}  placeholder= "Type in your City"/>
      <Button name={'arrowright'} handlePress={handleCity} animated={false}/>
    </View>
    )}