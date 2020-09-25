import React from 'react';

import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import CitySearch from './CitySearch';

let ScreenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    container:{
        height:ScreenHeight,
    width:'100%',
    display:'flex',
    flex: 1,
    justifyContent: "center",
    padding: 0,
    margin:0,

    },
    titleText:{
         fontFamily:'comic sans',
         flex:0.2,
         fontSize: 18,
         color: "#fff",
        fontWeight: "bold",
         justifyContent:'center',
         alignSelf: "center",
        // textTransform: "uppercase"
    }
})


export default function HomePage(props){
    
   return (

    <LinearGradient colors={["blue", "orange"]}>

    <View style={styles.container}>
        <Text style={styles.titleText} >
            Clear Sky UK
             
        </Text>
        <Text style={styles.titleText}>
        Type in to see the visibility for stars in your area
        </Text>
        <CitySearch navigation={props}/> 
    </View>
    </LinearGradient>)
}

