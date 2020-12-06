import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import {AntDesign} from '@expo/vector-icons';

export default function button (props){

      return (
        <TouchableOpacity onPress={props.handleCity}  title= "search">
        <View style ={[{
        width:'.1em',
        height:'.1em',
        borderRadius:'.1em',
        backgroundColor:'#444',
        top:'6.5vh'
        },
        {
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'transparent'
        }]}>

       <AntDesign name='arrowright' size={42} color={'white'}/>
       </View>
      </TouchableOpacity>
    

      )
    
  
}
