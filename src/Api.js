

export default async function getCity(location) {
    const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=045846a6dd5da525b8c1e0e39e795fa5', {origin:'cors'})
      
    const resData = await res.json()

    console.log(resData)
    const {main:temp}= resData
    console.log(temp.temp)
    return temp.temp
  }



