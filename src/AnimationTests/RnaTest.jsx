import React, {useRef} from 'react';
import {StatusBar} from 'expo-status-bar';
import { View, Text, StyleSheet, Animated, FlatList, Image, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('screen');

const bgs = ['#A5BBFF', '#DDBEFE', '#FF63ED', '#B98EFF'];

const DATA = [
    {
        key:'3571572',
        title:'Multi-lateral',
        description:'Use the optical SAS system...',
        image:'https://image.flaticon.com/icons/png/256/3571/3571572.png'
    },

    {
    key:'3571747',
    title:'Automated radical data-warehouse',
    description:'Use the optical SAS system...',
    image:'https://image.flaticon.com/icons/png/256/3571/3571747.png'
},
{
    key:'3571680',
    title:'Adp sensory is down',
    description:'Use the optical SAS system...',
    image:'https://image.flaticon.com/icons/png/256/3571/3571680.png'
},
{
    key:'3571603',
    title:'Monitored global data-warehouse',
    description:'We need to program the open source IB...',
    image:'https://image.flaticon.com/icons/png/256/3571/3571603.png'
},
];
const Indicator =({scrollX})=>{
    return(<View style={{position:'absolute', bottom:100, flexDirection:'row', justifyContent:'center', left:'50vw'}}>
        {
            DATA.map((_, i)=>{
                const inputRange=[(i-1)*width, i*width, (i+1)*width];

                const scale = scrollX.interpolate({
                    inputRange,
                    outputRange:[0.8, 1.4, 0.8],
                    extrapolate:'clamp'
                });

                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange:[0.8, 1, 0.8],
                    extrapolate:'clamp'
                })
                
                
               return ( <Animated.View key={`indicator-${i}`}
                    style={
                        {
                            height:10,
                            width:10,
                            borderRadius:5,
                            backgroundColor:'white',
                            margin:5, 
                            opacity,
                            transform:[{
                                scale,
                            }]
                            
                        }}/>
                   
                    
                )
            })
        }
    </View>)
};

const Backdrop =({scrollX})=>{
    const backgroundColor = scrollX.interpolate({
        inputRange:bgs.map((_, i)=>i*width),
        outputRange:bgs.map((bg)=>
        { console.log(bg)
            return bg}),
    });
    return( <Animated.View
        style={[StyleSheet.absoluteFillObject, {
            backgroundColor
        }]}
    />)
};


const Square = ({scrollX})=>{
    const YOLO = Animated.modulo(Animated.divide(
        Animated.modulo(scrollX, width),
        new Animated.Value(width)
    ), 1);
    
    
    const rotate = YOLO.interpolate({
        inputRange:[0, 0.5, 1],
        outputRange:['35deg', '0deg', '35deg']
    });
    
    const translateX = YOLO.interpolate({
        inputRange:[0, 0.5, 1],
        outputRange:[0, -height, 0]
    });
    return ( <Animated.View
        style={{
            width:height,
            height:height,
            top:-height*0.6,
            left:-height*0.3,
            backgroundColor:'white',
            borderRadius:86,
            position:'absolute',
            transform:[
                {
                    rotate
                },
                {
                translateX
                }
            ]
        }}
    />

    )
};

export default function RnaTest () {

    const scrollX = React.useRef(new Animated.Value(0)).current;


    
 

   return  (  <View style={{display:'flex', flex:1, justifyContent:"center",}}>
   <StatusBar hidden/>
   <Backdrop scrollX={scrollX}/>
   <Square scrollX = {scrollX}/>
   
        <FlatList data={DATA}
            keyExtractor={item=> item.key}
            horizontal
            scrollEventThrottle={32}
            onScroll={Animated.event([{nativeEvent:{contentOffSet:{x:scrollX}}}], {useNativeDriver:false})}
            contentContainerStyle={{paddingBottom:100}}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            renderItem={({item})=>{
                console.log(item)
                
               return <View style={{width:width, alignItems:'center', flex:1, padding:20}}>
               <View style={{flex:0.7, justifyContent:'center' }}>


                        <Image source={{uri:item.image}} style={{ width:width/6, height:width/6,
                             resizeMode:'contain', }}/>
               </View>
               <View style={{flex:0.3, }}>
                   <Text style={{fontWeight:'800', fontSize:32, marginBottom:10, marginTop:50, color:'white'}}>{item.title}</Text>
                   <Text>{item.description}</Text>
               </View>
                   </View>
                
            }}
        />
        <Indicator scrollX={scrollX}/>
      </View>)
   
  
}
