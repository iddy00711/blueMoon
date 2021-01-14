import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Animated, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';


const dotSize = 10;

export default function AnimatableImage ({planetArr}) {

    

    return (
        <View style={{ position:'relative' }}>
      

            {planetArr.map((planet, index)=>{

              const planetDuration = Math.random()*10000000;
              
                
                const {name, top, left, fileType} = planet;

                const motion = {
                  0: {
                    scale: 1,
                    opacity:1,
                    
                  },
                  0.5: {
                    scale: 0.9,
                    opacity:0.9,
                    transform:[{translateX:10}],
                    duration:100
                  },
               
                  1: {
                    scale: 1,
                    opacity:1,
                    transform:[{translateX:800}],
                    duration:1000
                  },
                };
        
               return ( 
                <TouchableWithoutFeedback
              onPress={() => console.log(name)}
              hitSlop={{ top: 200, left: 200, bottom: 200, right: 200 }}
              style={{ position: 'absolute' }}
              key={index}
            >
              <Animatable.Image
              source={require(`../assets/${name}.${fileType}`)}
                useNativeDriver
                
                animation="fadeIn"
                duration={1000}
                delay={1000 + index * 150}
                style={[
                  styles.dotStyle,
                  {
                    transform: [
                      {
                        translateX:  Math.random()*100 - dotSize / 2
                      },
                      {
                        translateY: Math.random()*600 - dotSize / 2
                      }
                    ]
                  }
                ]}
              />
            </TouchableWithoutFeedback>
               )
                
                 
            })}
      </View>
    );
};

const styles = StyleSheet.create({
  dotStyle: {height:10, width:10, borderRadius:'50%', position:'absolute', backgroundColor:'white', zIndex:1}
})
