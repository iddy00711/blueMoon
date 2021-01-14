import React from 'react';
import {View, Text, StyleSheet, Dimensions, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {starCount, shootingStarVars, planetPositions} from './hardcodedValues/starData';
import {getTimeFromUnixTime, convertKelToCel, getLengthOfNight, cloudVis, calculateVisibility, qualityOfDarkness,convertFirstLetter } from './utlis/utlis';
import BackgroundStars from './components/BackgroundStars';
import BackgroundWeather from './components/BackgroundWeather';
import {getCloudArr, getRainAnimation, getSnowAnimation, getLighteningAnimation,} from './utlis/animationUtlis';
import {styles} from './styles/styles';
import MessierButton from './components/MessierButton'

const {homePageStars:starObj} = starCount;
const {starArr }= starObj;
const {container, text, box, backGroundStar, linearGrad, backGroundWeather} = styles.WeatherCard;
const {height, width} = Dimensions.get("screen");

export default function WeatherCard(props){
    
   const { 
     temp,
    humidity, 
    pressure, 
    name,
     visibility,
      id:weatherId, 
      description:cloudDescription, 
      icon, speed:windSpeed,
       country, 
       sunrise, 
       sunset, 
       weatherType, 
       cloud} = props.route.params;

    let temperature = Math.round( temp-273, 2);
    const sunSet = getTimeFromUnixTime(sunset).hour;
    const sunRise = getTimeFromUnixTime(sunrise).hour;
    const cloud_arr = getCloudArr(weatherType, cloudDescription);
    const nightLength = getLengthOfNight(sunSet, sunRise);
    const weatherDesArr = [
      {temperature:`${temperature}°C`},
     {cloudDescription},
     {windSpeed:`${windSpeed} MPH`},
     {sunSet:`${sunSet}:00`}, 
     {sunRise:`${sunRise}:00`},
      {weatherType}];


   return ( 
    <LinearGradient
        colors={['black',"rgb(45, 0, 49)" ]}
        locations={[1]}
        style={[linearGrad,{height,width}]}>

      <View style={[container], StyleSheet.absoluteFillObject}>

      {starArr.map((_, index)=>{
        
        return(
           <BackgroundStars 
            index={index}
            delay={1000 + index * 400}
            styles={ 
            [backGroundStar,  
            {top:`${Math.random()*50}vh`,
            left:`${Math.random()*95}vw`}]}/>
      )})}

      {cloud_arr.map((_, index)=>{
        let cloudNum = cloud_arr.length;
        let widthRatio = 100/cloudNum;
        let leftPosition = Math.round((widthRatio*(index+1)))-5;
        let topPosition = Math.round(Math.sin(((index+15)*500)) *((index+1)+20))+20;
        const positionObj = {topPosition, leftPosition}

        return( 
          <View>
         
          <BackgroundWeather
            styles={[backGroundWeather,{top:`${topPosition}vh`,left:`${leftPosition}vw`,}]}
            cloudNum={cloud_arr.length}
            key={`bgw${index}`}
            index={index}/>
            {weatherType==='Rain'?getRainAnimation(weatherType, topPosition, leftPosition, index):
            weatherType==='Snow'?getSnowAnimation(weatherType, topPosition, leftPosition, index):
            weatherType==='Thunder'?getLighteningAnimation(weatherType, topPosition, leftPosition, index):
            null}
         
         </View>
        )})}
      
      <Text style={{position:'absolute', top:'55.7vh', left:'49vw', fontSize:20, textDecorationLine:'underline', color:'white', zIndex:2}}>{name}</Text>
      <View style={[box]}>


      {weatherDesArr.map((ele, index)=>{
        let key = Object.keys(ele)[0];
      
        return (
           <Text style={[text]} key={`txt${index}`}>
          {`${convertFirstLetter(key)}: ${ele[key]}`}
          </Text>
          )
      })}

      </View>
     
    </View>
    <MessierButton navigation={props} style={{position:'absolute', top:'95vh', right:'50vw', zIndex:3}}  name={'arrowright'}/>
    </LinearGradient>)}