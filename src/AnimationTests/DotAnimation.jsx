import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import {AntDesign} from '@expo/vector-icons'
import {StatusBar} from 'expo-status-bar';
import { color } from 'react-native-reanimated';

const circleSize = 100;

const Circle = ({onPress, animatedValue})=>{

    const containerBG = animatedValue.interpolate({
        inputRange:[0, 0,001, 0.5, 0.501, 1],
        outputRange:['gold', 'gold', 'gold', '#444', '#444']
    });

    const circleBG = animatedValue.interpolate({
        inputRange:[0, 0,001, 0.5, 0.501, 1],
        outputRange:['#444', '#444', '#444', 'gold', 'gold']
    })
    
    return <Animated.View style={[StyleSheet.absoluteFill, styles.circleContainer, {backgroundColor:containerBG}]}>
        <Animated.View style={[styles.circle, {
            backgroundColor:curcleBG,
            transform:[
                {
                    perspective:400
                },

                {
                    rotateY:animatedValue.interpolate(
                   { inputRange:[0, 0.5, 1],
                   outputRange:['0deg', '-90deg', '-180deg']
                   })},

                   {
                       scale:animatedValue.interpolate(
                   { inputRange:[0, 0.5, 1],
                   outputRange:[1, 8, 1]
                   }
                )},
                {
                       translateX:animatedValue.interpolate(
                   { inputRange:[0, 0.5, 1],
                   outputRange:['0%', '50%', '0%']
                   }
                )}
            ]
        }]}>
            <TouchableOpacity onPress={onPress}>
                <View style={[styles.circle, styles.circleButton]}>
                    <AntDesign name='arrowriht' size={52} color={'white'}/>
                </View>
            </TouchableOpacity>
        </Animated.View>
    </Animated.View>

}


export default function DotAnimation () {

    const animatedValue = React.useRef(new Animated.Value(0)).current;
    const [index, setIndex] = React.useState(0);

    const animation = (toValue)=>{
        Animated.timing(animatedValue, {
            toValue,
            duration:3000,
            useNativeDriver:false
        })
    }

    const onPress = ()=>{
        setIndex(index===1?0:1)
      animation(index===1?0:1).start()
    }
 

  
    return (
        
      <View>
        <Text> DotAnimation </Text>
        <Circle onpress={onPress} animatedValue = {animatedValue}/>
      </View>
    );
  
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    },
    circleContainer:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center',
        padding: 80,
        paddingBottom: 100,
        backgroundColor:'gold'
    },
    circle:{
        width:circleSize,
        height:circleSize,
        borderRadius:circleSize/2,
        backgroundColor:'#444'
    },
    circleButton:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'transparent'
    }
})
