export default function getCity() {
    return fetch('https://reactnative.dev/movies.json')
      .then((response) =>  response.json())
      .catch((error) => {
        console.error(error);
      });
  }



//.then((responseJson) => {
//     console.log('api')
//     return responseJson.movies;
//   })
// import axios from 'axios';





// export default function getCity(cityName){
//     const url =""

//     axios.get(`${}${cityName}`).then(res=>{
//         console.log(res)
//         return res
//     })
//     //.then(return )
// }