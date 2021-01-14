import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MessierList from './components/MessierList';
 import messier from './hardcodedValues/messierData';


export default function MessierCataloguePage ()  {

  console.log(messier.messier)
  

  // const messier = [
  //   {
  //     id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
  //     title: "M1",
  //     pic:'m1.jpg'
  //   },
  //   {
  //     id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
  //     title: "M2",
  //     pic:'m4.jpg'
  //   },
  //   {
  //     id: "58694a0f-3da1-471f-bd96-145571e29d72",
  //     title: "M3",
  //     pic:'m8.jpg'
  //   },
  // ];
 
    return (
     <MessierList messier={messier}/>
    );
  }

