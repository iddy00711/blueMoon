

export default async function getCity(location) {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=045846a6dd5da525b8c1e0e39e795fa5`, {origin:'cors'})
      
    const resData = await res.json()
    console.log(resData)

    

    if(resData.cod == '404'|| resData.cod == '400'){
      
      return resData

    }
    else if(resData.cod === 200){

      const {main, name, sys, visibility, weather, wind, clouds}= resData
      const weatherObj = {
        main,
        name,
        sys,
        visibility,
         weather,
          wind,
          clouds
      }
      
      return weatherObj;
    }
  }



