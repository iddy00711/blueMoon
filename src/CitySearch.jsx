import React, { Component, useState } from 'react';

import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import { unstable_renderSubtreeIntoContainer, render } from 'react-dom';
import getCity from './Api';

export default function CitySearch (){

   const[cityText, setCityText] = useState('');
    
    

        // function fetchCity(){

        //     getCity().then(res => {
        //         console.log(res)
            
              
        //     })
        //     //navigate to City page with return value of getCity as props

        // }

        /* .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.movies,
        }*/ 

    return (<View>

    <TextInput   placeholder= "city name"/>

       <Button  title= "search">Search</Button>
</View>)
    }


