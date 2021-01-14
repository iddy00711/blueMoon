import React, { useRef, useEffect, useState } from 'react';
import { View, Text, Animated, Image, Dimensions, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {convertFirstLetter} from '../utlis/utlis';
import PlanetCard from './PlanetCard';


export default function PlanetPage (props) {

  const {planet, fileType} = props.route.params;

  const planetName = convertFirstLetter(planet);

   

    const {width, height} = Dimensions.get('screen');

    const [planetCardToggle, setPlanetCardToggle] = useState(false);

    const fadeAnim = useRef(new Animated.Value(0)).current;  // Initial value for opacity: 0

    useEffect(() => {
      Animated.timing(
        fadeAnim,
        {
          toValue: 1,
          duration: 6000,
        }
      ).start();
    }, [fadeAnim])
  

  
    return (
        <LinearGradient style={{  position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom:0,
        height: '100vh',
        overflow:'hidden'}} colors={['black', 'black']}>

      <View styles={{backgroundColor:'black', position:'relative',
      height,
      width,
      display:'flex',
      flex: 1,
      justifyContent: "center",
      alignItems:'center',
      padding: 0,
      margin:0,
      flexDirection:'rows'}}>
      <Text style={{color:'white', fontSize:'5rem', textDecorationStyle:'solid', textDecorationLine:'underline', top:'5vh', left:'41vw', position:'absolute'}}>
      {planetName}</Text>
      {planetCardToggle? <PlanetCard planet={planet}/>: null}
      <TouchableOpacity onPress={()=>{setPlanetCardToggle(true)}}> 

        <Animated.Image style={{opacity:fadeAnim, width:390, height:390, borderRadius:'50%', position:'absolute', top:'30vh',  left:'40vw', backgroundColor:'black',
        transform:[{translateY:fadeAnim.interpolate({
            inputRange:[0,1],
            outputRange:[150, 0]
        })},
        {rotatez:fadeAnim.interpolate({
            inputRange:[0, 1],
            outputRange:['-60deg', '0deg']
        })}]
        }} source={require(`../assets/${planet}.${fileType}`)}/>
      </TouchableOpacity>
      </View>
        </LinearGradient>
    );
  
}
