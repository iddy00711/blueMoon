

const starCount = {
    homePageStars:{
        starArr:[...Array(60).keys()],
        shootingStarArr:[...Array(3).keys()]

    },
};

const shootingStarVars= {
    homePageShootingStars:{
        delay:1000,
        duration:4900,
        fontSize:19,
        textShadowRadius:15,
        bodyShadowColor:'white'
    },
}

const planetPositions = {
    homePagePlanets:{
        planetArr:[
            {name:'mercury', top:'10vh', left:'87vw', fileType:'jpg'},
             {name:'venus', top:'7vh', left:'17vw', fileType:'png'},
              {name:'mars', top:'28vh', left:'35vw', fileType:'png'},
              {name:'jupiter', top:'20vh', left:'47vw', fileType:'png'},
              {name:'saturn', top:'50vh', left:'6vw', fileType:'png'},
              {name:'neptune', top:'5vh', left:'10vw', fileType:'jpg'},
              {name:'uranus', top:'35vh', left:'22vw', fileType:'jpg'},
              {name:'pluto', top:'43vh', left:'83vw', fileType:'jpg'}
            ]

    },
}




    export {starCount, shootingStarVars, planetPositions}

