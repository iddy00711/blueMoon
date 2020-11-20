

function getTimeFromUnixTime(timeStamp){
    const date={month:new Date(timeStamp).getMonth(),hour:new Date(timeStamp).getHours()}


return date;

};
function getLengthOfNight(sunset, sunrise){
    

    return sunset-sunrise

};

function qualityOfDarkness(nightLength){
    const nightTimeRefObj={
        darkLevel1:{
            description:'Dark skies',
            value:3
        },
        darkLevel2:{
            description:'Moderate viewing',
            value:2
        },
        darkLevel3:{
            description:'Poor viewing',
            value:1
        },
    }
    if(nightLength<=6){
        return nightTimeRefObj.darkLevel3;
    }
    else if(nightLength>=7&&nightLength<=11){
        return nightTimeRefObj.darkLevel2;
    }
    else{
        return nightTimeRefObj.darkLevel1;
    }

}

function cloudVis(cloudiness){
    const cloudRefObj = {
        cloudLevel1:{
            description:'Clear skies',
            value:5
        },
        cloudLevel2:{
            description:'Moderate clouds',
            value:0
        },
        cloudLevel3:{
            description:'Very cloudy',
            value:-5
        }
    }

    if(cloudiness<=10){
        return cloudRefObj.cloudLevel1;
    }
    else if(cloudiness<=40&&cloudiness>10){
        return cloudRefObj.cloudLevel2;
    }
    else{
        return cloudRefObj.cloudLevel3;

    }
}

function calculateVisibility (cloudiness, sunset, sunrise){
    //uses above functions to calculate the quality of the night sky given as an int.

    let weatherValue = 0;

    let checkCloudiness = cloudVis(cloudiness);


    let checkNightLength = qualityOfDarkness(getLengthOfNight(getTimeFromUnixTime(sunset), getTimeFromUnixTime(sunrise)))

    weatherValue+= checkCloudiness.value + checkNightLength.value;



    return weatherValue


}

function convertKelToCel(k){
    if(k=== undefined)
    {return 0}
    else{

        return temp = Math.round( k-273.15, 2)
    }

};

function calculateSeeing(pressure, windSpeed){

}

function calculateTransparacey(humidity, visibility){



}


   module.exports = {getTimeFromUnixTime, convertKelToCel, getLengthOfNight, cloudVis, calculateVisibility, qualityOfDarkness };
// function calculateVisibility (cloudiness, rainPercent, sunset, sunrise)