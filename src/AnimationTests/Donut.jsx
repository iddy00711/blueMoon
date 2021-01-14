import React, { Component } from 'react';
import { View, Text, Animated, TextInput, StyleSheet } from 'react-native';
import SVG, {G, Circle} from 'react-native-svg'

export default function Donut ({percentage, radius, strokeWidth, duration, color, delay, textColor, max}) {

    const AnimatedCircle = Animated.createAnimatedComponent(Circle);
    const AnimatedInput = Animated.createAnimatedComponent(TextInput);

 const halfCircle = raidus + strokeWidth;

 const circleCircumference = radius * Math.PI *2;
 const circleRef = React.useRef();
 const inputRef = React.useRef();
 const animatedValue = React.useRef(new Animated.Value(0)).current;

const animation =(toValue)=>{
    return Animated.timing(animatedValue, {
        toValue,
        duration,
        delay,
        useNativeDriver:true
    }).start(
        //bounce back to start bar.
    //     ()=>{
    //     animation(toValue===0? percentage:0)
    // }
    )

}

React.useEffect(()=>{
    animation(percentage);

    animatedValue.addListener((v)=>{
        if(circleRef?.current){
            const maxper = (100 * percentage)/max;
    const stokeDashoffset = circleCircumference - (circleCircumference* maxper)/100;
    circleRef.current.setNativeProps({
        strokeDashoffset:stokeDashoffset
    })

        }
        if(inputRef?.current){
            inputRef.current.setNativeProps({
                text:`${Math.round(v.value)}`
            })
        }
    })

    return ()=>{animatedValue.removeAllListeners()
    };
    

 }, [max, percentage])

  
    return (
    
      <View>
        <SVG width={radius*2} height ={radius*2} viewBox={`0 0 ${halfCircle*2} ${halfCircle*2}` }>
            <G rotation='-90' origin={`${halfCircle}, ${halfCircle}`}>
                <Circle
                    cx='50%'
                    cy= '50%'
                    stroke = {color}
                    strokeWidth={strokeWidth}
                    r ={radius}
                    fill='transparent'
                    strokeOpcaity={0.2}
                />
                <AnimatedCircle
                ref={circleRef}
                     cx='50%'
                    cy= '50%'
                    stroke = {color}
                    strokeWidth={strokeWidth}
                    r ={radius}
                    fill='transparent'
                    strokeDashArray={circleCircumference}
                    strokeDashoffset = {circleCircumference}
                    strokeLinecap='round'
                />
            </G>
        </SVG>
        <AnimatedInput
        ref={inputRef}
            underlineColorAndroid='transparent'
            editable={false}
            defaultValue='0'
            style={[
                StyleSheet.absoluteFillObject,
                {
                    fontSize: radius/2,
                color:textColor??color},
                {fontWeight:900,
                textAlign:'center'}
            ]}

        />
      </View>
    );
  }

