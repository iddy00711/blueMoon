import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


let ScreenWidth = Dimensions.get("window").width;
let ScreenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        display:'flex',
        flex: 1,
    padding: 8,
    margin:8
    },
 
    text:{
        flex: 0.3,
    
        color: "white",
    textShadowColor: "blue",
    textShadowRadius: 1,
    margin: 44,
    textAlign:'center',
    paddingLeft:40,
    fontFamily:'comic sans'


    },
    box:{
       flex:1,
       justifyContent:"center",
        backgroundColor: "deepskyblue",
        borderWidth: 3,
        borderStartColor:'grey',
        opacity:0.7,
        alignItems:'center',
        flexDirection:'column',
        borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    margin: '10%',
    marginBottom:'15%',
    marginBottom:'15%',
    marginLeft:'30%',
    marginRight:'30%',
    padding:10

    }
})



export default function WeatherCard(props){
    console.log('weatherCard')
      const { 
          temp,humidity, pressure, name, visibility, id:weatherId, description, icon, speed:windSpeed, country, sunrise, sunset
        } = props.route.params;
     

    let tempx = Math.round( temp-273, 2)

    
    return (
    <View style={styles.container}>
    <LinearGradient
        // Background Linear Gradient
        colors={['#171e26', '#3f586b']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: ScreenHeight
        }}
      />
      <View style={styles.box}>
          
          <View style={styles.text}>

          <LinearGradient  colors={['#4c669f', '#3b5998', '#192f6a']}
        style={{ padding: 5, alignItems: 'center', borderRadius: 2 }}>

        <Text style={styles.text} >
        {name } 
       {tempx+'c'} 
        </Text>
        <Text style={styles.text}>
        {country}
        </Text>
        <Text style={styles.text}>
        {description}
        </Text>
        <Text style={styles.text}>
        {windSpeed}
        </Text>
          </LinearGradient>

          </View>
      </View>
    </View>
 )
}