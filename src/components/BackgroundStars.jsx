import React from 'react';
import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default  function BackgroundStars ({index, styles, delay}) {
    const randomScale = Math.random()*(0.4-0.09)+0.09;
    
    const customBackgroundStarAnimation={
        0:{
            opacity:0,
            scale:randomScale
        },
        0.5:{opacity:0.5, scale:randomScale},
        1:{opacity:1,scale:randomScale}
    }
    return (
        <Animatable.View
        easing='ease-in'
        animation={customBackgroundStarAnimation}
        delay={delay}
        key={`bstar${index}`}
        style={[styles]}/>
    );
  }

