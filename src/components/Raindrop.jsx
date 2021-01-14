import React, { Component } from 'react';
import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function Raindrop ({customRainAnimation, duration, delay, styles, index, top, left}) {
 
    return (
     <Animatable.View
         delay={delay}
         duration={duration}
         animation={customRainAnimation}
         useNativeDriver
         easing='ease-in'
         
        iterationCount="infinite" 
         style={{backgroundColor:'lightblue',
               width:0.76*Math.PI, height:2.78*Math.PI, 
               borderRadius:'80%', 
               top,
               left,
               position:'absolute',
               borderColor:'white',
               borderRadius:3,
               margin:0
               }}
         
     />
    );
  }

