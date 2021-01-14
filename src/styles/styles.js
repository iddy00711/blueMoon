import React from 'react';
import { StyleSheet, View, Dimensions, StatusBar} from 'react-native';

const {height, width} = Dimensions.get("screen");


const styles = {
  HomePage:{
  
    container:{
    position:'relative',
    height,
    width,
    display:'flex',
    flex: 1,
    justifyContent: "center",
    padding: 0,
    margin:0,
    },
    viewContainer:{
      position:'absolute',
    top:'30vh', 
    left:'52vw',
    padding: 0,
    margin:0,
  },
  button:{
   position:'absolute',
   top:'50vh', 
    left:'50vw',
    padding: 0,
    margin:0,
  },
  backGroundStar:{margin:0, 
    position:'absolute', 
    right:'70%',
    backgroundColor: "white",
    overflow:'hidden',
    height:9,
    width: 9,
    borderRadius:'50%',
    shadowColor:'white',
    shadowRadius:10,
    shadowOpacity:0.9,
  },
  shootingStar:{backgroundColor:'white',
   position:'absolute',
    width:5, 
    height:5, 
    borderRadius:'50%',},

    titleText:{
        position:'absolute',
        textShadowColor: "white",
        textShadowRadius: 30,
        fontFamily:'fantasy',
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold",
        justifyContent:'center',
        alignSelf: "center",
        textDecorationLine:'underline',
        top:'70vh',
        margin:5,
    },
    star:{
        position:'relative',
        textShadowColor: "white",
        textShadowRadius: 15,
        fontFamily:'fantasy',
        fontSize:29,
        fontWeight:'bold',
        color: "#fff",
        

    },

},
        WeatherCard:{
        container:{
          position:'relative',
                width,
                height,
              alignItems:'center',
              justifyContent:"center",
              display:'flex',
              flex: 1,
              padding: 0,
              margin:0
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
                backGroundStar:{
                  margin:0, 
                  position:'absolute', 
                  right:'70%',
                  backgroundColor: "white",
                  overflow:'hidden',
                  height:10,
                  width: 10,
                  borderRadius:'50%',
                  shadowColor:'white',
                  shadowRadius:10,
                  shadowOpacity:0.9,
                },
                backGroundWeather:{
                  width:230,
                  height:230, 
                   zIndex:1,
                  position:'absolute', 
                  overflow:'hidden'},
                text:{

                  position:'relative',
                  fontSize:20,
    color: "white",
    textShadowColor: "blue",
    textShadowRadius: 1,
    textAlign:'center',
    fontFamily:'comic sans',
    margin:0,
    flexBasis:'50%',
  
                },
                box:{
                  flex: 0.7,
                flexDirection: 'row',
                justifyContent: 'center',
                flexWrap:'wrap',
                flexBasis:'50%',
                  shadowColor: 'red',
                     shadowOffset: { width: 1, height: 2 },
                     shadowOpacity: 0.5,
                     shadowRadius: 5,
                     elevation: 3,
                        borderBottomLeftRadius:'5%',
                        borderBottomRightRadius:'5%',
                        borderTopLeftRadius:'10%',
                        borderTopRightRadius:'10%',
                        position:"absolute",
                        justifyContent:'center',
                         alignItems:'center',
                      
                          backgroundColor: "black",
                          borderWidth: 1,
                          borderColor:'grey',
                          height:'35%',
                          width:'30%',
                      padding:3,
                      top:'55vh',
                      left:'35vw',
                      zIndex:1},
              },}


     export {styles};
    
 



