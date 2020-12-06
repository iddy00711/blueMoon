

export default async function getCity(location) {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=045846a6dd5da525b8c1e0e39e795fa5`, {origin:'cors'})
      
    const resData = await res.json();

    if(resData.cod == '404'|| resData.cod == '400'){
      return resData;
    }
    else if(resData.cod === 200){

      const {main, name, sys, visibility, weather, wind, clouds}= resData;
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
  };

  // async function getCityImage(city){
   
  //   const apiKey = 'AIzaSyDUcI7YTiOEdrZ-SJxM1JMBvF3YlK4CvUE'

  //   const res = await
  //     fetch( 
  //      `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${city},IL&key=${apiKey}&inputtype=textquery&fields=name,photos`);

  //       const resData = await res.json()

  //       const response = await fetch(
  //         `https://cors-anywhere.herokuapp.com//https://maps.googleapis.com/maps/api/place/photo?photoreferenc${photo_reference}=PHOTO_REF&key=${apiKey}&maxwidth=400&maxheight=400`)
  //         .then(r => r.blob())
  //   .catch(console.error);
    
  //   const image = URL.createObjectURL(response)
       
  //       return image;  
  // };

 

  





