import React, { Component, useState } from 'react';
import { View, Text } from 'react-native';
import {planetData} from '../hardcodedValues/planetData';
import {styles} from '../styles/styles';

const {box} = styles.WeatherCard


export default function PlanetCard ({planet}) {

    const {vitals, story}  = planetData[planet];
   
 

    return (
      <View style={ {top:'25vh', left:'10vw', position:'absolute', display:'flex'}}>
      <View style={{
        width:'22vw',
        height:'15vh',
      justifyContent:'center',
                          alignItems:'center',
                          flexDirection: 'row',
                          flexShrink:1,
                          flexWrap:'wrap',
                          backgroundColor: "black",
                          borderWidth: 3,
                          borderTopRightRadius:9,
                          borderTopLeftRadius:9,
                          borderColor:'grey',
                          padding:3}}>
                          
           

        {vitals.map((info, index)=>{
          let key = Object.keys(info)[0];

          return (<Text style={{color:'white', position:'relative',
                  fontSize:20, 
    textAlign:'center',
    
    marginBottom:0,
    flexBasis:'50%',}} key={`vital${index}`}>{`${key}: ${info[key]}`}</Text>)
        })}
      </View>
      <View style={{
        width:'22vw',
        height:'39vh',
        flexDirection:'row', 
      justifyContent:'center',
      
                        alignItems:'flex-start',
                        
                          backgroundColor: "black",
                          borderWidth: 3,
                          borderColor:'grey',
                          padding:10,
                          borderBottomRightRadius:9,
                          borderBottomLeftRadius:9,
                          }}>
      <Text style={{color:'white', marginBottom:5, fontSize:'0.9vw', lineHeight:30}}>

        {story}
      </Text>
      </View>
      </View>
    );
  
}
