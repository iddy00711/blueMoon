import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function SinglePlanet (props) {

  const {index,top, left, name:planet, fileType } = props;


    
    return (
        <TouchableWithoutFeedback
              onPress={()=>{props.navigation.navigation.navigate('PlanetPage', {planet, fileType})}}
              hitSlop={{ top: 200, left: 200, bottom: 200, right: 200 }}
              style={{ position: 'absolute' }}
              key={`planet${index}`}
              
            >
        <Animatable.Image 
         useNativeDriver
        easing='ease-in'
        animation="fadeIn"
        duration={1000}
        delay={6000 + index * 1900}
       
 style={{zIndex:1,
  position:'absolute',
   width:10, 
   height:10, 
   backgroundColor:'black',
    borderRadius:'50%',
     top, 
     left}} source={require(`../assets/${planet=== undefined?'mars':planet}.${fileType===undefined?'png':fileType}`)}/>

</TouchableWithoutFeedback>
    );
  }

