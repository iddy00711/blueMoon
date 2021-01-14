import React, { useEffect } from 'react';
import { View, Text, Animated } from 'react-native';

export default function TextAnimate ({text}) {
    const animatedValues = [];

    const textArr = text.trim().split();

    textArr.forEach((_, i)=>{
        animatedValues[i] = new Animated.Value(0);
        console.log(animatedValues)

    });

   

  const animated = (toValue = 1) => {
    const animations = textArr.map((_, i)=>{
      return Animated.timing(animatedValues[i], {
        toValue,
        duration:500
      })
    })
    Animated.stagger(100,animations).start();
  };

  useEffect(()=>{
    animated();
  })


    return (
      <View style={{flexDirection:'row', flexWrap:'wrap', justifyContent:'center', flex:1}}>
        {textArr.map((word, i)=>{
            return <Animated.Text style={{marginBottom:10,fontSize:28,fontFamily:'menlo',opacity:animatedValues[i], transform:[{translateY:Animated.multiply(animatedValues[i], new Animated.Value(-2))}]}} key={`${word}-${i}`}>
                {word}
                {`${i<textArr.length?' ':''}`}
            </Animated.Text>
        })}

        <Text>Hello all oiewdhoi weotranslateY:Animated.multiply]translateY:Animated.multiply]translateY:Animated.multiply]translateY:Animated.multiply]</Text>
      </View>
    );
  }

