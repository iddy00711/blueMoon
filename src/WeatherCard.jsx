import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
// import styles from './styles/styles'


// let ScreenWidth = Dimensions.get("window").width;
// let ScreenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    container:{
    justifyContent:"center",
    display:'flex',
    flex: 1,
    padding: 8,
    margin:8
    },
    imageCircle:{
      blurRadius:'50',
      border:'solid',
      borderColor:'red',
       position:'absolute',
      height:350,
      width:350,
      borderRadius:'50%',
     
      top:'6%',
      left:'41%',


    },
 
    text:{
      position:'relative',
      fontSize:'1em',
    color: "white",
    textShadowColor: "blue",
    textShadowRadius: 1,
    textAlign:'center',
    paddingLeft:40,
    fontFamily:'comic sans',
   
    


    },
    box:{
      position:"relative",
       flex:1,
       alignSelf:"center",
       justifyContent: 'space-evenly',
        backgroundColor: "black",
        borderWidth: 3,
        borderStartColor:'grey',
        opacity:0.9,
        alignItems:'center',
        flexDirection:'column',
        height:'20vh',
        width:'20vw',
    margin: '10%',
    padding:3,
    top:'20vh',
    overflow:'hidden'

    }
})

//let ScreenWidth = Dimensions.get("window").width;

export default function WeatherCard(props){
    
      const { 
          temp,humidity, pressure, name, visibility, id:weatherId, description, icon, speed:windSpeed, country, sunrise, sunset
        } = props.route.params;
     

    let tempx = Math.round( temp-273, 2)

    
   return ( 
    <LinearGradient
        colors={['#171e26', '#3f586b']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom:0,
          height: '100vh',
          overflow:'hidden'
        }}
      >
      <View style={styles.container}>

  <Image style={styles.imageCircle} source={require('./clouds3.jpg')}/>
      <View style={styles.box}>
     
          
        

        <Text style={styles.text} >
        City: {name} 
        </Text>
        <Text style= {styles.text}>
        Temperture: {tempx +'c'}
        </Text>
        <Text style={styles.text}>
        Country: {country}
        </Text>
        <Text style={styles.text}>
        Weather: {description}
        </Text>
        <Text style={styles.text}>
        Wind Speed: {windSpeed}
        </Text>
        <Text style={styles.text}>
        Sunset: {sunset}
        </Text>
        <Text style={styles.text}>
        Sunrise: {sunrise}
        </Text>
        
      </View>
    </View>
    </LinearGradient>)
}