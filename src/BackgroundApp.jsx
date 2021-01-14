import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

import Animated, { Easing } from 'react-native-reanimated';
import { TapGestureHandler, State } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get('window');

const {
  Value,
  event,
  block,
  cond,
  eq,
  set,
  Clock,
  startClock,
  stopClock,
  debug,
  timing,
  clockRunning,
  interpolate,
  Extrapolate
} = Animated;

function runTiming(clock, value, dest) {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0)
  };

  const config = {
    duration: 1000,
    toValue: new Value(0),
    easing: Easing.inOut(Easing.ease)
  };

  return block([
    cond(clockRunning(clock), 0, [
      set(state.finished, 0),
      set(state.time, 0),
      set(state.position, value),
      set(state.frameTime, 0),
      set(config.toValue, dest),
      startClock(clock)
    ]),
    timing(clock, state, config),
    cond(state.finished, debug('stop clock', stopClock(clock))),
    state.position
  ]);
}
export default class BackgroundApp extends Component {
  constructor() {
    super();

    this.buttonOpacity = new Value(1);

    this.onStateChange = event([
      {
        nativeEvent: ({ state }) =>
          block([
            cond(
              eq(state, State.END),
              set(this.buttonOpacity, runTiming(new Clock(), 1, 0))
            )
          ])
      }
    ]);

    this.buttonY = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [100, 0],
      extrapolate: Extrapolate.CLAMP
    });

    this.bgY = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [-height / 3, 0],
      extrapolate: Extrapolate.CLAMP
    });
  }
  render() {
    return (
      <Animated.View
        style={{
          flex: 1,
          backgroundColor: 'white',
          justifyContent: 'flex-end',
          transform: [{ translateY: this.bgY }]
        }}
      >
       
          {/* <Image
            source={require('./1.jpg')}
            style={{ flex: 1, height: null, width: null }}
          /> */}
      
        <View style={{ height: height / 3, justifyContent: 'center' }}>
          <TapGestureHandler onHandlerStateChange={this.onStateChange}>
            <Animated.View
              style={{
                ...styles.button,
                opacity: this.buttonOpacity,
                transform: [{ translateY: this.buttonY }]
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>SIGN IN</Text>
            </Animated.View>
          </TapGestureHandler>
          <Animated.View
            style={{
              ...styles.button,
              backgroundColor: '#2E71DC',
              opacity: this.buttonOpacity,
              transform: [{ translateY: this.buttonY }]
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
              SIGN IN WITH FACEBOOK
            </Text>
          </Animated.View>
        </View>
      </Animated.View>
    );
  }
}
;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: 'white',
    height: 70,
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5
  }
});




// import React, { Component } from 'react';
// import { View, Text, StyleSheet,  Dimensions, TouchableOpacity } from 'react-native';
// import Animated, { Value, Easing } from 'react-native-reanimated';
//  import {TapGestureHandler, State} from 'react-native-gesture-handler';
//  import SVG, {Image} from 'react-native-svg'


// const {width, height } = Dimensions.get('window');
// const{ event, block, cond, eq ,set, Clock, startClock, stopClock, clockRunning, debug, timing, interpolate, Extrapolate} = Animated;

// function runTiming(clock, value, dest){
//     const state={
//         finished: new Value(0),
//         position:new Value(0),
//         time:new Value(0),
//         frameTime:new Value(0),
//     };
//     const config={
//         duration:1000,
//         toValue: new Value(0),
//         easing: Easing.inOut(Easing.ease)
//     };
//     return block([
//         cond(clockRunning(clock), 0, [
//             set(state.finished, 0),
//             set(state.time, 0),
//             set(state.position, value),
//               set(state.frameTime, 0),
//               set(config.toValue, dest),
//               startClock(clock)
            

//         ]),
//         timing(clock, state, config),
//         cond(state.finished, debug('stop clock', stopClock(clock))),
//         state.position
//     ])

// }



// export default class BackgroundApp extends Component {
//   constructor(props) {
//     super();
//     this.buttonOpacity = new Value(1);
//     this.onStateChange = event([
//         {
//             nativeEvent:({state})=>block([
//                 cond(eq(state, State.END), set(this.buttonOpacity, runTiming(new Clock(), 1, 0)))
//             ])
//         }
//     ])
//     this.buttonY = interpolate(this.buttonOpacity, {
//         inputRange:[0,1],
//         outputRange:[100,0],
//         extrapolate:Extrapolate.CLAMP
//     })
//     this.bgy = interpolate(this.buttonOpacity, {
//         inputRange:[0,1],
//         outputRange:[-height/3,0],
//         extrapolate:Extrapolate.CLAMP
//     })
//   }
  

// //   render() {
// //       console.log('backg')
// //     return (
// //       <Animated.View style={{flex:1,  backgroundColor:'white', justifyContent:'flex-end'}}>

// //       <Image source={require('./1.jpg')}
// //           style={{flex:1, height:null, width: null, zIndex:2}}
// //       />
// //       <Animated.View style={{height:height/3, backgroundColor:'rgba(0,0,0,0.2)', transform:[{translateY:this.bgy}]}}>

      
// //       <TapGestureHandler onHandlerStateChange={this.onStateChange}>
// //       <Animated.View style={{opacity:this.buttonOpacity, borderRadius:15, margin:0, backgroundColor:'white', transform:[{translateY:this.buttonY}]}}>
// //       <Text>
// //           Click Here
// //       </Text>

// //       </Animated.View>

// //       </TapGestureHandler>
// //       </Animated.View>

// //       </Animated.View>
      
//  render() {
//     return (
//       <Animated.View
//         style={{ ...StyleSheet.absoluteFill,
//           flex: 1,
          
//           justifyContent: 'flex-end',
//           transform: [{ translateY: this.bgy }]
//         }}
//       >
//       <View stye={{...StyleSheet.absoluteFill}}>

//       <SVG height={height+100} width={width}>

      
//           <Image
//             href={require('./bg.jpg')}
//             height={height+100}
//             width={width}
//             preserveAspectRatio='xMidYMid slice'
//           />
//       </SVG>
//       </View>
        
//         <Animated.View style={{ height: height / 9, justifyContent: 'center', zIndex:-1,  }}>
//           <TapGestureHandler onHandlerStateChange={this.onStateChange}>
//             <Animated.View
//               style={{
//                 ...styles.button,
//                 opacity: this.buttonOpacity,
//                 transform: [{ translateY: this.buttonY }]
//               }}
//             >
//               <TouchableOpacity style={styles.button}>
//                   <Text style={styles.buttonText}>Click me</Text>
//               </TouchableOpacity>
//             </Animated.View>
//           </TapGestureHandler>
         
//         </Animated.View>
//       </Animated.View>
//     );
//   } 
// }
      
    
// //     );
// //   }
// // }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       alignItems: 'center',
//       justifyContent: 'center'
//     },
//     button: {
//       backgroundColor: 'black',
//       height: 40,
//       marginHorizontal: '40%',
//       borderRadius: 15,
//       alignItems: 'center',
//       justifyContent: 'center',
//       marginVertical: '90%',
//       borderRadius:30
//     },
//     buttonText:{
        
//         flex:1,
//         fontSize: 16,
//         color: "#fff",
//         fontWeight: "bold",
//         justifyContent:'center',
//         alignSelf: "center",
//         textTransform: "uppercase"

//     }
//   });