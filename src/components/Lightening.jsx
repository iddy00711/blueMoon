import React  from 'react';
import { View, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function Lightening ({customRainAnimation, duration, delay, styles, index, top, left}) {


    return (<Animatable.Image
        
             
         delay={delay}
         duration={duration}
         animation={customRainAnimation}
         useNativeDriver
         easing='ease-in'
         source={require('../assets/lightening2.png')}
         
        iterationCount="infinite" 
         style={{backgroundColor:'white',
               width:100,
                height:150, 
                border:'none',
               top,
               left,
               position:'absolute',
               margin:0,
               zIndex:-2
               }}
        />
       
    )
  }

