import React, { useRef, useEffect } from 'react';
import { View, Text, Animated, Image, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function MoonPage () {

    const {width, height} = Dimensions.get('screen')

    const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

    useEffect(() => {
      Animated.timing(
        fadeAnim,
        {
          toValue: 1,
          duration: 5000,
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
      margin:0,}}>
        <Animated.Image style={{opacity:fadeAnim, width:50, height:50, borderRadius:'50%', position:'absolute', top:'50vh',  left:'50vw',
        transform:[{translateY:fadeAnim.interpolate({
            inputRange:[0,1],
            outputRange:[150, 0]
        })},
        {rotatez:fadeAnim.interpolate({
            inputRange:[0, 1],
            outputRange:['60deg', '-20deg']
        })}]
        }} source={require('./assets/moon4.png')}/>
      </View>
        </LinearGradient>
    );
  
}
