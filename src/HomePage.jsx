import React, {useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, Animated, StatusBar, TouchableWithoutFeedback} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CitySearch from './components/CitySearch';
import * as Animatable from 'react-native-animatable';
import { Inter_100Thin } from '@expo-google-fonts/inter';
import SinglePlanet from './components/SinglePlanet'
import ShootingStar from './components/ShootingStar';


const {height} = Dimensions.get("screen");

const starNum = 30;

const shootingStarNum = 10;

const starArr = [...Array(starNum).keys()];

const shootingStarArr = [...Array(shootingStarNum).keys()];






const styles = StyleSheet.create({
    container:{
    position:'relative',
    height,
    width:'100%',
    display:'flex',
    flex: 1,
    justifyContent: "center",
    padding: 0,
    margin:0,
    

    },
    titleText:{
        position:'absolute',
        textShadowColor: "white",
        textShadowRadius: 30,
        fontFamily:'fantasy',
        fontSize: '1.6vw',
        color: "#fff",
        fontWeight: "bold",
        justifyContent:'center',
        alignSelf: "center",
        textDecorationLine:'underline',
        top:'70vh',
        margin:5,
    },
    star:{
        position:'relative',
        textShadowColor: "white",
        textShadowRadius: 15,
        fontFamily:'fantasy',
        fontSize:29,
        fontWeight:'bold',
        color: "#fff",
        

    },
})


export default function HomePage(props){

    const planetArr = [
        {name:'mercury', top:'10vh', left:'87vw', fileType:'jpg'},
         {name:'venus', top:'7vh', left:'17vw', fileType:'png'},
          {name:'mars', top:'28vh', left:'35vw', fileType:'png'},
          {name:'jupiter', top:'20vh', left:'47vw', fileType:'png'},
          {name:'saturn', top:'50vh', left:'6vw', fileType:'png'},
          {name:'neptune', top:'5vh', left:'10vw', fileType:'jpg'},
          {name:'pluto', top:'43vh', left:'83vw', fileType:'jpg'}
        ];
        const customAnimation = {
          0: {
            
            scale: 1.1,
            translateY:-300,
            translateX:850,
            opacity:1,
            transform:[{
              translateX:800,
              translateY:60
          }]
          },
           
          0.5: {
            
            scale: 0.9,
            opacity:0,
            translateY:300,
            translateX:300,
            transform:[{
              translateX:400,
              translateY:52,
              
          }]
          },
          1: {
            
            scale: 0.9,
            opacity:0,
            translateY:600,
            translateX:900,
            transform:[{
              translateX:700,
              translateY:662
          }]
          },
       
        };
        const customAnimation2 = {
          0: {
            
            scale: 1.1,
            translateY:-300,
            translateX:1050,
            opacity:1,
            transform:[{
              translateX:1500,
              translateY:60
          }]
          },
           
          0.5: {
            
            scale: 0.9,
            opacity:0,
            translateY:500,
            translateX:900,
            transform:[{
              translateX:900,
              translateY:152,
              
          }]
          },
          1: {
            
            scale: 0.9,
            opacity:0,
            translateY:600,
            translateX:900,
            transform:[{
              translateX:700,
              translateY:662
          }]
          },
       
        };
        const customAnimation3 = {
          0: {
            
            scale: 1.1,
            translateY:-100,
            translateX:1550,
            opacity:1,
            transform:[{
              translateX:2000,
              translateY:60
          }]
          },
           
          0.5: {
            
            scale: 0.9,
            opacity:0,
            translateY:800,
            translateX:1200,
            transform:[{
              translateX:1200,
              translateY:352,
              
          }]
          },
          0.6: {
            
            scale: 0.9,
            opacity:0,
            translateY:600,
            translateX:900,
            transform:[{
              translateX:700,
              translateY:662
          }]
          },
          1: {
            
            scale: 0.9,
            opacity:0,
            translateY:600,
            translateX:900,
            transform:[{
              translateX:700,
              translateY:662
          }]
          },
       
        };


          const delay = 1000
          const duration = 4900;
          const fontSize = 19;
          const textShadowRadius = 15;
          const bodyShadowColor = 'white';

   return (
       


    <LinearGradient colors={['black','black',"rgb(25, 0, 139)", ]}>

    <StatusBar hidden/>
   

    <View style={[StyleSheet.absoluteFill,styles.container]}>

        {planetArr.map((planet, index)=>{
            const {name, top, left, fileType} = planet
            return(<SinglePlanet index={index} name={name} top={top} left={left} fileType={fileType}/>)})}

    
      
        {starArr.map((_, index)=>{
            
            let randomNum = (Math.round(Math.random()*Math.PI)/10);
            
            return( <Animatable.Text
            easing='ease-in'
            animation='fadeIn'
            delay={1000 + index * 400}
             key={`star${index}`}
              style={{

               margin:0, 
        position:'absolute',
        textShadowColor: "white",
        textShadowRadius: 10,
        fontSize:'1.5rem',
        fontWeight:'bold',
        color: "#fff", 
        top:`${Math.random()*50}vh`,
        left:`${Math.random()*95}vw`,
        right:'70%',
        height: `${randomNum+0.02}%`,
        width: `${randomNum+0.02}%`,
        backgroundColor: "white",
        overflow:'hidden',
        borderRadius:'50%'
        
  }} >
            
             
        </Animatable.Text>)

        })}


        <ShootingStar
            top={'12vh'}
            left={'-8vw'}
           customAnimation= {customAnimation} 
           duration ={duration}
           delay = {delay}
          fontSize={fontSize} 
          textShadowRadius={textShadowRadius} 
          bodyShadowColor={bodyShadowColor}/>

<ShootingStar
            top={'12vh'}
            left={'-8vw'}
           customAnimation= {customAnimation2} 
           duration ={duration+1000}
           delay = {delay+1000}
          fontSize={fontSize} 
          textShadowRadius={textShadowRadius} 
          bodyShadowColor={bodyShadowColor}/>

<ShootingStar
            top={'12vh'}
            left={'-8vw'}
           customAnimation= {customAnimation3} 
           duration ={duration+2000}
           delay = {delay+2500}
          fontSize={fontSize} 
          textShadowRadius={textShadowRadius} 
          bodyShadowColor={bodyShadowColor}/>

    

        {/* <Animatable.Text
        useNativeDriver
        animation={zoomOut}
        duration={9500}
        easing="ease-in" 
        iterationCount="infinite" style={{ 
            textAlign: 'center', fontSize:9, color:'white', position:'absolute', left:'-8vw', top:'10vh', textShadowColor: "white",
        textShadowRadius: 15, 
             }}>.</Animatable.Text> 
             
             <ShootingStar
          key={`shootingStar${index}`}
           customAnimation= {customAnimation} 
           duration ={duration}
           delay = {delay}
          top={randomTop} 
          left={-randomLeft} 
          fontSize={fontSize} 
          textShadowRadius={textShadowRadius} 
          bodyShadowColor={bodyShadowColor}/>*/}


             
        
        <CitySearch navigation={props}/> 
    </View>
   
    </LinearGradient>)
}