import React, {useState } from 'react';
import { StyleSheet, View, Dimensions, StatusBar, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CitySearch from './components/CitySearch';
import SinglePlanet from './components/SinglePlanet'
import ShootingStar from './components/ShootingStar';
import {starCount, shootingStarVars, planetPositions} from './hardcodedValues/starData';
import AnimatedButton from './components/AnimatedButton';
import BackgroundStars from './components/BackgroundStars';
import {homePageCustomAnimations} from './hardcodedValues/customAnimations';
import {styles} from './styles/styles';


const {homePageStars:starObj} = starCount;
const {homePageShootingStars:shootingStarObj} = shootingStarVars;
const {homePagePlanets:planetObj} = planetPositions;
const {starArr, shootingStarArr }= starObj;
const {delay, duration, fontSize, textShadowRadius, bodyShadowColor} = shootingStarObj;
const {planetArr} = planetObj;

const {customAnimation, customAnimation2, customAnimation3} = homePageCustomAnimations;
const {container, titleText, star, viewContainer, button, backGroundStar, shootingStar} = styles.HomePage;

const {height, width} = Dimensions.get("screen");


export default function HomePage(props){

  const [isPlanetButtonPressed, setIsPlanetButtonPressed] = useState(false);

   return (
    <LinearGradient colors={['black',"rgb(25, 0, 139)" ]} locations={[0.6]} >
      <StatusBar hidden/>
        <View style={[StyleSheet.absoluteFill,container]}>
    

      {/* background animations */}

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

        {shootingStarArr.map((_,index)=>{

          let customAnimationVar;
          index===0?customAnimationVar=customAnimation:
          index===1?customAnimationVar=customAnimation2:
          index===2?customAnimationVar=customAnimation3:
          null

          return ( 

          <ShootingStar
            index={index}
           styles={ 
             [shootingStar,
             {left:`${8+(index*49)}vh`, top:'12vh'}]}
            customAnimation= {customAnimationVar} 
            duration ={duration+(index*1000)}
            delay = {delay+(index*1000)}/>
            )})}

          {/* input and search bar*/}

          <CitySearch  navigation={props}/> 
          
          <AnimatedButton
                style={[button]}
                handlePress={(e)=>{
                  e.preventDefault()
                  setIsPlanetButtonPressed(!isPlanetButtonPressed)}}
                navigation={props}/> 

          {/* easter egg feature*/}

           {isPlanetButtonPressed?
            planetArr.map((planet, index)=>{

              const {name, top, left, fileType} = planet
              return(
                      <SinglePlanet 
                      navigation={props} 
                      index={index} 
                      name={name}
                      top={top}
                      left={left} 
                      fileType={fileType}/>
                      )})
              :null}
       </View>
   
    </LinearGradient>)
}

