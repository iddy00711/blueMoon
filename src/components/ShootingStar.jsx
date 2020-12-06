import React, { Component } from 'react';
import { View, Text } from 'react-native';
import * as Animatable from 'react-native-animatable'

export default function ShootingStar ({customAnimation, duration, top, left, fontSize, textShadowRadius, bodyShadowColor, delay}) {


    return (
     
        <Animatable.Text
        delay={delay}
        useNativeDriver
        animation={customAnimation}
        duration={duration}
        easing="ease-in-out" 
        iterationCount="infinite" 
        style={{ 
            textAlign: 'center', fontSize, color:bodyShadowColor, position:'absolute', left, top, textShadowColor: bodyShadowColor,
        textShadowRadius, 
             }}>.</Animatable.Text>
    );
  
}
