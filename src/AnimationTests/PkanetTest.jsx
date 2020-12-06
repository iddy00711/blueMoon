import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, TouchableOpacity, TouchableWithoutFeedback, Platform, StatusBar, Image, StyleSheet } from 'react-native';
import {AppLoading} from 'expo';
import {Asset} from 'expo-asset';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {Ionicons} from '@expo/vector-icons'


const {width} = Dimensions.get('screen');

const smallPlanet = 300;
const bigPlanet = 900;
const ratio = bigPlanet/smallPlanet;
const dotsize = 14;
const ratation = '60deg';

const numberOfLocations = 10;

const timings = [...Array(numberOfLocations).keys()].map(()=>{Math.round(Math.random())});

const coordinates = [...Array(numberOfLocations).keys()].map(()=>{
    const angle = Math.random * 2 * Math.PI;
    const maxRadius = smallPlanet/2 - dotsize*2;
    const radius = maxRadius * Math.sqrt(Math.random());

    return {
        x: radius * Math.cos(angle) + smallPlanet/2,
        y:radius * Math.sin(angle) + smallPlanet/2

    }
})

const Screen3 = ({navigation})=>{
    const {x, y} = coordinates;
    return( <View>
        <View style = {{position:'relative', transform:[{translateX:-x * ratio + bigPlanet/2}, {translateY: - y* ratio + bigPlanet/2}]}}>
        <Image source={'./assets/mars_planet.png'}/>

        </View>

        <View>
            <TouchableOpacity onPress={() => nativgation.navigate('Screen2')}>
            <Ionicons name = 'ios-arrow-round-back' size = {52} color = 'white'/>

            </TouchableOpacity>
        </View>
    </View>)

}

export default function PkanetTest (){


 

 
    return (
      <View>
        <Text> PkanetTest </Text>
      </View>
    );
  
}
