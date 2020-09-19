import React from 'react';
import {View, Text} from 'react-native';

export default function WeatherCard(props){
      const { temp, humidity } = props.route.params;
     
    //  const { otherParam } = route.params;
    console.log(props)

    let tempx = Math.round( temp-273, 2)

    
   return ( <View>
        <Text>
        itemId: {tempx+'c'} 
        humid:1
        </Text>
    </View>)
}