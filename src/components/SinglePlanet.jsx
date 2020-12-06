import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function SinglePlanet ({index,top, left, name:planet, fileType }) {


    
    return (
        <TouchableWithoutFeedback
              onPress={() => console.log(planet)}
              hitSlop={{ top: 200, left: 200, bottom: 200, right: 200 }}
              style={{ position: 'absolute' }}
              key={`planet${index}`}
              
            >
        <Animatable.Image  useNativeDriver
        easing='ease-in'
        animation="fadeIn"
        duration={1000}
        delay={12000 + index * 1900}
        style={[
          
          {
            transform: [
              {
                translateX:  Math.random()*10 - 10/ 2
              },
              {
                translateY: Math.random()*600 - 10 / 2
              }
            ]
          }
        ]}
 style={{zIndex:1, position:'absolute', width:10, height:10, backgroundColor:'white', borderRadius:'50%', top, left}} source={require(`../assets/${planet=== undefined?'mars':planet}.${fileType===undefined?'png':fileType}`)}/>

</TouchableWithoutFeedback>
    );
  }

