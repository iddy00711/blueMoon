import React  from 'react';
import { View, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function Snow ({customSnowAnimation, duration, delay, styles, index, top, left}) {


    return (
        <Animatable.Text
             
         delay={delay}
         duration={duration}
         animation={customSnowAnimation}
         useNativeDriver
         easing='ease-in'
         
        iterationCount="infinite" 
         style={{backgroundColor:'white',
               width:2, height:2, 
               borderRadius:'50%', 
               top,
               left,
               position:'absolute',
               margin:0
               }}
         
     
        ></Animatable.Text>
       
    )
  }

