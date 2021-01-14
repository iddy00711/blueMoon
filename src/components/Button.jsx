import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import {AntDesign} from '@expo/vector-icons';


export default function Button ({handlePress, name}){

      return (
        <TouchableOpacity 
        onPress={handlePress} 
         title= "search">
          <View style ={[{
        width:'.1em',
        height:'.1em',
        borderRadius:'.1em',
        backgroundColor:'#444',
        margin:10,
         top:'5vh',
        },
        {
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'transparent'
        }]}>

          <AntDesign name = {name} size={42} color={'white'}/>
       
        </View>
      </TouchableOpacity>
    

      )
    
  
}
