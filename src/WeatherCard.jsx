import React from 'react';
import {View, Text} from 'react-native';

export default function WeatherCard(props){
      const { 
          temp,humidity, pressure, name, visibility, id:weatherId, description, icon, speed:windSpeed, country, sunrise, sunset
        } = props.route.params;
     

    let tempx = Math.round( temp-273, 2)

    
   return ( <View>
        <Text>
        {name}
        {country}
        {description}
        {windSpeed}
        itemId: {tempx+'c'} 
        humid:1
        </Text>
    </View>)
}