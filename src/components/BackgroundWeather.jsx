import React, { Component } from 'react';
import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function BackgroundWeather ({index, weatherType, duration, cloudNum, customAnimation, styles}){

    const cloudAnimation ={
        0:{
            scale:1.3,
            opacity:0,
            translateX:550,
          },
            0.5:{
                scale:1.3,
                opacity:0.8,
                translateX:-150,
                
            },
            1:{
                scale:1.3,
                opacity:1,
                translateX:-150,
            }
    }
    return (
        
     <Animatable.Image 
     easing= 'ease-in'
      duration ={6000}
       animation={cloudAnimation}
        delay={300} 
        style={[styles]} 
        source={require('../assets/cloud10.png')}/>
    );
  }

