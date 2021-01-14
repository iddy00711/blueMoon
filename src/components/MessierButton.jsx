import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import {AntDesign} from '@expo/vector-icons';


export default function Button (props){
    const {name} = props;

      return (
        <TouchableOpacity 
        onPress={()=>{props.navigation.navigation.navigate('MessierCataloguePage')}}
         title= "search">
          <View style ={[{
        width:'.1em',
        height:'.1em',
        borderRadius:'.1em',
        backgroundColor:'#444',
        margin:10,
         top:'95vh',
         left:'50vw'
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
