import React, { Component } from 'react';
import { View, Text,StyleSheet, Image } from 'react-native';
import {Asset} from 'expo-asset';
import { AppLoading } from 'expo';
import BackgroundApp from './BackgroundApp.jsx';

const styles = StyleSheet.create({
    container:{
        flex:1,
        
        alignItems:'center',
        justifyContent:'center'
    }})


function cacheImages(images){
    return images.map(image=>{
        if(typeof image === 'string'){
            return Image.prefetch(image)
        } else{
            return Asset.fromModule(image).downloadAsync();
        }
    })

}

export default class Animations extends Component {
  constructor() {
    super();
    this.state = {
        isLoaded:false
    };
  }
//   async _loadAssetsAsync(){
//       const imageAssests = cacheImages([
//           require('./cloud.png')
//       ]);
//       await Promise.all([...imageAssests])

//   }

  render() {
      if(!this.state.isLoaded){
          console.log('render')
          return (
              <AppLoading startAsync={this._loadAssetsAsync}
                  onFinish={()=>{this.setState({isLoaded:true})}}
                  onError={console.warn}


              />
          )

      }
      else{

          return (
            
          <BackgroundApp/>
            
          );
      }
  }
}



