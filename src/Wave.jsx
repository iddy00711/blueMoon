import React from 'react';
import {View, Dimensions} from 'react-native';
import Animated, {
    useAnimatedProps,
    useDerivedValue,
    useSharedValue,
    repeat,
    withTiming,
    Easing,
  } from "react-native-reanimated";
import SVG, { Path, Circle } from 'react-native-svg';
import StyleGuide from './StyleGuide';

const {width:windowWidth, height:windowHeight} = Dimensions.get('window');
const AnimatedPath = Animated.createAnimatedComponent(Path);
const AnimatedCircle = Animated.createAnimatedComponent(Circle);


export default function Wave(){
    console.log(useAnimatedProps)
    const dataPoints = ()=>{
        return {
            from:{x:0, y:0},
            c1:{x:0.25, y:50},
            c2:{x:0.5, y:0.75},
            to:{x:1, y:1}
        }
    }
    const path = useAnimatedProps(()=>{
        const {from, c1, c2, to} = dataPoints.value;
        return{
            d:`M ${from.x} ${from.y} C ${c1.x} ${c1.y} ${c2.x} ${c2.y} ${to.x} ${to.y} L 1 1 L 0 1 Z`
        }
    })
    return (
        <View style={{flex:1, justifyContent:'center'}}>
        <SVG width={windowWidth} height={windowHeight} viewBox='0,0,1,1'>
        <AnimatedPath fill={StyleGuide.palette.primary} animatedProps={path}/>
        <AnimatedCircle fill='blue' animatedProps={from}/>
        <AnimatedCircle fill='red' animatedProps={c1}/>
        <AnimatedCircle  fill='red' animatedProps={c2}/>
        <AnimatedCircle fill='blue' animatedProps={to}/>

        </SVG>

        </View>
    )
}

/*import React, { useEffect } from "react";
import { View, Dimensions } from "react-native";
import Svg, { Path } from "react-native-svg";
import Animated, {
  useAnimatedProps,
  useDerivedValue,
  useSharedValue,
  repeat,
  withTiming,
  Easing,
} from "react-native-reanimated";
import MaskedView from "@react-native-community/masked-view";
import { mix } from "react-native-redash";

import { StyleGuide } from "../components";

const SIZE = Dimensions.get("window").width - 64;
const AnimatedPath = Animated.createAnimatedComponent(Path);
const Wave = () => {
  const progress = useSharedValue(0);
  useEffect(() => {
    progress.value = repeat(
      withTiming(1, { duration: 1000, easing: Easing.inOut(Easing.ease) }),
      -1,
      true
    );
  }, [progress]);
  const data1 = useDerivedValue(() => {
    const m = mix.bind(null, progress.value);
    return {
      from: {
        x: m(-0.1, -1),
        y: m(0.2, 0.5),
      },
      c1: { x: m(0, 0.5), y: m(0.7, 1) },
      c2: { x: m(1, 0.5), y: m(0.3, 0) },
      to: { x: m(1.1, 2), y: m(0.8, 0.5) },
    };
  });
  const data2 = useDerivedValue(() => {
    const m = mix.bind(null, 1 - progress.value);
    return {
      from: {
        x: m(-0.1, -1),
        y: m(0.2, 0.5),
      },
      c1: { x: m(0, 0.5), y: m(0.7, 1) },
      c2: { x: m(1, 0.5), y: m(0.3, 0) },
      to: { x: m(1.1, 2), y: m(0.8, 0.5) },
    };
  });
  const path1 = useAnimatedProps(() => {
    const { from, c1, c2, to } = data1.value;
    return {
      d: `M ${from.x} ${from.y} C ${c1.x} ${c1.y} ${c2.x} ${c2.y} ${to.x} ${to.y} L 1 1 L 0 1 Z`,
    };
  });
  const path2 = useAnimatedProps(() => {
    const { from, c1, c2, to } = data2.value;
    return {
      d: `M ${from.x} ${from.y} C ${c1.x} ${c1.y} ${c2.x} ${c2.y} ${to.x} ${to.y} L 1 1 L 0 1 Z`,
    };
  });
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <MaskedView
        maskElement={
          <View
            style={{
              backgroundColor: "black",
              width: SIZE,
              height: SIZE,
              borderRadius: SIZE / 2,
            }}
          />
        }
      >
        <Svg
          width={SIZE}
          height={SIZE}
          style={{ backgroundColor: "#242424" }}
          viewBox="0 0 1 1"
        >
          <AnimatedPath fill="#86b4ff" animatedProps={path2} />
          <AnimatedPath
            fill={StyleGuide.palette.primary}
            animatedProps={path1}
          />
        </Svg>
      </MaskedView>
    </View>
  );
};

export default Wave;
*/ 