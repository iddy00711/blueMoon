import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
// import styles from './styles/styles';
import {getTimeFromUnixTime, convertKelToCel, getLengthOfNight, cloudVis, calculateVisibility, qualityOfDarkness} from './utlis/utlis'


 


const styles = StyleSheet.create({
    container:{
      position:'relative',
      width:'18vw',
      height:'90vh',
    alignItems:'center',
    justifyContent:"center",
    display:'flex',
    flex: 1,
    flexDirection:'column',
    padding: 10,
    margin:10
    },
    imageCircle:{
      borderColor:'red',
      position:'absolute',
      height:'34vh',
      width:'18vw',
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
    fontFamily:'comic sans',
    padding:5
   
    


    },
    box:{
   shadowColor: 'red',
   shadowOffset: { width: 2, height: 2 },
   shadowOpacity: 0.6,
   shadowRadius: 10,
   elevation: 3,
      borderBottomLeftRadius:'5%',
      borderBottomRightRadius:'5%',
      borderTopLeftRadius:'10%',
      borderTopRightRadius:'10%',
      position:"relative",
       flex:0.8,
       justifyContent: 'space-evenly',
        backgroundColor: "black",
        borderWidth: 3,
        borderStartColor:'grey',
        alignItems:'center',
        flexDirection:'column',
        height:'25vh',
        width:'18vw',
    margin: '10%',
    padding:3,
    top:'16vh',
    left:'60vh'

    }
})

//let ScreenWidth = Dimensions.get("window").width;

export default function WeatherCard(props){
    
      const { 
          temp,humidity, pressure, name, visibility, id:weatherId, description, icon, speed:windSpeed, country, sunrise, sunset
        } = props.route.params;
     

    let tempx = Math.round( temp-273, 2);

    const dust = getTimeFromUnixTime(sunset).hour;
    const dawn = getTimeFromUnixTime(sunrise).hour;

   

    
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
      <View style={[styles.container], StyleSheet.absoluteFillObject}>

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
        Sunset: {dust}
        </Text>
        <Text style={styles.text}>
        Sunrise: {dawn}
        </Text>
        <Text style = {styles.text}>
          Length of Night: {getLengthOfNight(dust, dawn)} hours
        </Text>
        
      </View>
    </View>
    </LinearGradient>)
}