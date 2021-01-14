import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function AnimatedButton (props) {
 

  
    return (

        <TouchableOpacity 
        onPress={props.handlePress}
        // onPress={()=>{props.navigation.navigation.navigate('MoonPage')}}
          title= "search">
        <View style ={[{
      width:'.1em',
      height:'.1em',
      borderRadius:'.1em',
      backgroundColor:'#444',
      margin:0,
       top:'-77vh',
      },
      {
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'transparent'
      }]}>

<Animatable.Image 
        source={require('../assets/moon9.jpeg')}
        animation='fadeIn'
        delay={1000}

        style={ {height:50, width:50, borderRadius:'50%', position:'absolute', backgroundColor:'black', zIndex:1, top:'3vh', left:'50vw'}}/>
          </View>
      </TouchableOpacity>
     
      
        

        
    );
  
}
