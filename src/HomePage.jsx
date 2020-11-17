import React from 'react';

import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import CitySearch from './CitySearch';
import SkyAnimation from './skyAnimation';

let ScreenHeight = Dimensions.get("window").height;

const word = 'qwertyuiopasdfghjklzxcvbnmwertyuiopasdfghjklzxcvbnm'

const starArr = word.split('');


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
        textShadowColor: "white",
        textShadowRadius: 30,
        fontFamily:'fantasy',
        fontSize: '2em',
        color: "#fff",
        fontWeight: "bold",
        justifyContent:'center',
        alignSelf: "center",
        textDecorationLine:'underline',
    },
    star:{
        position:'relative',
        textShadowColor: "white",
        textShadowRadius: 15,
        fontFamily:'fantasy',
        fontSize:29,
        fontWeight:'bold',
        color: "#fff",
        // top:`${Math.random()*30}%`,
        // left:`${Math.random()*50}%`,
        // right:'30%'

    }
})


export default function HomePage(props){
    
   return (

    <LinearGradient colors={['black','black',"rgb(25, 0, 139)", "rgb(255, 135, 42)"]}>
   

    <View style={styles.container}>
        <Text style={styles.titleText} >
            Clear Sky UK
             
        </Text>
      
        {starArr.map(ele=>{
            let randomNum = (Math.round(Math.random()*3.1425956)/10);
            console.log(randomNum)
            return( <Text style={{position:'absolute',
        textShadowColor: "red",
        textShadowRadius: 15,
        fontFamily:'fantasy',
        fontSize:'1.5rem',
        fontWeight:'bold',
        color: "#fff", 
        top:`${Math.random()*40}vh`,
        left:`${Math.random()*95}vw`,
        right:'70%',
        height: `${randomNum+0.02}%`,
  width: `${randomNum+0.02}%`,
  backgroundColor: "white",
  borderRadius: "50%",
  
  
  shadowColor: 'white',
    
    
    shadowRadius: 9,  
  }} >
            
             
        </Text>)

        })}
        <Text style={styles.titleText}>
        Type in to see the visibility for stars in your area
        </Text>
        <CitySearch navigation={props}/> 
    </View>
   
    </LinearGradient>)
}

