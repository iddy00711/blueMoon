import React from 'react';
import{View} from 'react-native';
import Raindrop from '../components/Raindrop';
import Lightening from '../components/Lightening';
import Snow from '../components/Snow';



function getCloudArr(weatherType,weather){
    if(weatherType==='Clouds')
   { switch (weather){
        case 'few clouds':
            return [...Array(8).keys()];
        break;
        case 'scattered clouds':
            return [...Array(12).keys()];
        break;
        case 'broken clouds':
            return [...Array(24).keys()];
        break;
        case 'overcast clouds':
            return [...Array(32).keys()];
        break;
        default:
            return [] }}
    
    else if(weatherType==='Snow'){
        switch (weather){
            case 'overcast clouds':
                return [...Array(32).keys()]
        }
    }
    else if(weatherType==='Rain'||weatherType==='Drizzle'||weatherType==='Thunderstorm'){
        if(weather.match(/\*light*/gi)){
            return [...Array(8).keys()];
        }
        if(weather.match(/\*heavy*/gi)){
            return [...Array(32).keys()];
        }
        else{
            return [...Array(14).keys()];
        }
    }
    
    else{
        return [];
    };
};

const refArr =  [...Array(6).keys()];

function getRainAnimation(weatherType, topPosition, leftPosition, index, customAnimation){
    

   const customRainAnimation = {
        0:{
          opacity:0,
          translateY:topPosition+7,
        
          
          
        },
        0.5:{
          opacity:1,
          translateY:topPosition+10,
          transform:[
            { translateX:30},
        ]
         
        },
        1:{
          opacity:0,
         
          translateY:topPosition+250,
          transform:[
            { translateX:60},
         ],
          
        } };
      
    
         
      return (refArr.map((_,rainIndex)=>{
             
              
              return(<View>
              <Raindrop
                  key={`rnd${rainIndex}${index}`}
                  index={index}
                  top={`${topPosition+7}vh`}
                  left={`${leftPosition-2}vw`}
                    delay={Math.random()*(15000-6000)+6000}
                    duration={2800+250}
                    customRainAnimation={customRainAnimation}/>
                  
             
                  <Raindrop
                  key={`rnd${rainIndex}${index+1}`}
                  index={index}
                  top={`${topPosition+7}vh`}
                  left={`${leftPosition -3}vw`}
                    delay={Math.random()*(15000-6000)+6000}
                    duration={2800+250}
                    customRainAnimation={customRainAnimation}/>

                     <Raindrop
                  key={`rnd${rainIndex}${index+2}`}
                  index={index}
                  top={`${topPosition+7}vh`}
                  left={`${leftPosition-7}vw`}
                    delay={Math.random()*(15000-6000)+6000}
                    duration={2800+250}
                    customRainAnimation={customRainAnimation}/>
                     </View>)}))};


function getSnowAnimation(weatherType, topPosition, leftPosition, index, customAnimation){
    const customSnowAnimation = {
        0:{
          opacity:0,
          translateY:topPosition,
          translateX:leftPosition,

          transform:[{
            translateX:30,
            
        }]
         
          
       
        },
        0.5:{
            opacity:1,
            translateY:topPosition+30,
            translateX:leftPosition-10,
          
            transform:[{
              translateX:-30,
              
          }]
          },
    
        1:{
          opacity:0.9,
          translateY:topPosition+80,
          translateX:leftPosition+10,
         
          
          transform:[{
            translateX:-30,
            
        }]
        }};
    
        
            return(
                <View>

            <Snow
                    key={`sn${index}`}
                index={index}
                top={`${topPosition+7}vh`}
                left={`${leftPosition}vw`}
                  delay={Math.random()*19300}
                  duration={5500+250}
                  customSnowAnimation={customSnowAnimation}
                />
                  <Snow
                    key={`sn${index}`}
                index={index}
                top={`${topPosition+7}vh`}
                left={`${leftPosition-2}vw`}
                  delay={Math.random()*19300}
                  duration={5500+250}
                  customSnowAnimation={customSnowAnimation}
                />
                  <Snow
                    key={`sn${index}`}
                index={index}
                top={`${topPosition+7}vh`}
                left={`${leftPosition+2}vw`}
                  delay={Math.random()*19300}
                  duration={5500+250}
                  customSnowAnimation={customSnowAnimation}
                />
                </View>
                )};

function getLighteningAnimation(weatherType, topPosition, leftPosition, index, customAnimation){

    let cloudLightNum = index;
    let divideNum = 4;

    
    const customLighteningAnimation = {
        0:{
          opacity:0,
        },
        0.5:{
          opacity:1,
        },
        1:{
          opacity:0,
        } };
        if(cloudLightNum%divideNum===0){
          
            return(<Lightening
                key={`$light${index}`}
                index={index}
                top={`${topPosition+10}vh`}
                left={`${leftPosition-4}vw`}
                  delay={Math.random()*(15000-6000)+6000}
                  duration={3000}
                  customRainAnimation={customLighteningAnimation}
                /> )
        }
                };
      

export {getCloudArr, getRainAnimation, getSnowAnimation, getLighteningAnimation}