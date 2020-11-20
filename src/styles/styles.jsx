import React from 'react';
import { StyleSheet } from 'react-native';



const styles = StyleSheet.create({
        WeatherCard:{
    
            container:{
                justifyContent:"center",
                display:'flex',
                flex: 1,
                padding: 8,
                margin:8
                },
                linearGrad:{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom:0,
                    height: '100vh',
                    overflow:'hidden'
                  },
                imageCircle:{
                  blurRadius:'50',
                  border:'solid',
                  borderColor:'red',
                   position:'absolute',
                  height:350,
                  width:350,
                  borderRadius:'50%',
                 
                  top:'6%',
                  left:'41%',
            
            
                },
             
                text:{
                  position:'relative',
                  fontSize:'1em',
                color: "white",
                textShadowColor: "blue",
                textShadowRadius: 1,
                textAlign:'center',
                paddingLeft:40,
                fontFamily:'comic sans',
               
                },
                box:{
                  position:"relative",
                   flex:1,
                   alignSelf:"center",
                   justifyContent: 'space-evenly',
                    backgroundColor: "black",
                    borderWidth: 3,
                    borderStartColor:'grey',
                    opacity:0.9,
                    alignItems:'center',
                    flexDirection:'column',
                    height:'20vh',
                    width:'20vw',
                margin: '10%',
                padding:3,
                top:'20vh',
                overflow:'hidden'
            
                }
        }
    });


     export default styles;
    
 



