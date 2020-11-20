import { LinearGradient } from 'expo-linear-gradient';
import React, {  useState } from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Dimensions} from 'react-native';
import getCity from './Api';
import WeatherCard from './WeatherCard';

let ScreenWidth = Dimensions.get("window").width;
let ScreenHeight = Dimensions.get("window").height;

console.log(ScreenHeight)

const styles = StyleSheet.create({
  container:{
    height:ScreenHeight,
    width:'100%',
    display:'flex',
    flex: 1,
    justifyContent: "center",
    padding: 0,
    margin:0,
  },
  header:{

  },
  inputBar:{
    textAlign:'center',
    backgroundColor: "white",
    borderStyle:'solid',
    borderColor:'white',
    borderRadius:10,
    justifyContent:'center',
    alignSelf:'center',
    alignContent:'center',
    alignItems:'center',
  
    fontFamily:'comic sans',
    marginTop:'5%',
    marginBottom:0,
    fontSize: '2rem',
    fontWeight: "bold",
    color:'black',
    paddingVertical: 2,
    paddingHorizontal: 3,
    

  },
 
    appButtonContainer: {
      
  
    
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 5,
    borderColor:'black',
    borderStyle:'solid',
   
    marginVertical:'2%',
     marginHorizontal:'45%'
    
  },
  appButtonText: {
    
    fontFamily:'comic sans',
    fontSize: '2vw',
    color: "#fff",
    fontWeight: "bold",
    justifyContent:'center',
    alignSelf: "center",
    textTransform: "uppercase"
  }
})


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
          const {main, name, sys, visibility, weather, wind, clouds} = res

      const {temp, humidity, pressure} = main;
      const {country, sunrise, sunset} = sys;
      const {id, description, icon} = weather[0]
      const {speed} = wind
      const{all:cloud} = clouds

      return props.navigation.navigation.navigate('WeatherCard',
        {temp,humidity, pressure, name, visibility, id, description, icon, speed, country, sunrise, sunset, cloud})
          
        }
       
      
     })
     .then(setCityText(''))
   };

  

   

    return (

     

    <View style={styles.container}>

  
    <TextInput style={styles.inputBar} onChangeText={handleChange}  placeholder= "city name"/>

    

       <TouchableOpacity style={styles.appButtonContainer} onPress={handleCity}  title= "search">
         <LinearGradient colors={["grey", "black"]}>
         <Text style={styles.appButtonText}>search</Text>
         </LinearGradient>
       </TouchableOpacity>
    
</View>
     )
    }


