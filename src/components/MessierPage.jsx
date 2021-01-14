import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default function MessierPage ({name, pic}) {
  

    
    return (
      <View>
        <Text> {name} </Text>
        <Image style={{width:200, height:200}} source={require(`../assets/${pic}`)}/>
      </View>
    );
  
}
