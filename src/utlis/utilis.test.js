
const {getTimeFromUnixTime, convertKelToCel, getLengthOfNight, cloudVis, calculateVisibility, qualityOfDarkness} = require('./utlis');


test('Return 0 if given undefined', ()=>{
    expect(convertKelToCel(undefined)).toBe(0)
});
test('Return 0 if given 273.15K', ()=>{
    expect(convertKelToCel(273.15)).toBe(0)
});

// test('Return 2 if given 1560281377', ()=>{
//     expect(getTimeFromUnixTime(1560281377)).toBe(2)
// });

// test('Return 8 if given 1560281377', ()=>{
//     expect(getTimeFromUnixTime(1560281377)).toBe(0)
// });

test('Return object if given 1560281377', ()=>{
        expect(getTimeFromUnixTime(1560281377)).toEqual({month:0, hour:2})
     });

     test('Return 0 if given 0,0', ()=>{
        expect(getLengthOfNight(0, 0)).toBe(0)
    });

    test('Return 1 if given 2,1', ()=>{
        expect(getLengthOfNight(2, 1)).toBe(1)
    });

    test('Return cloudObj1 if given 0', ()=>{
        expect(cloudVis(0)).toEqual({
            description:'Clear skies',
            value:5
        })
    });
    test('Return cloudObj1 if given 10', ()=>{
        expect(cloudVis(10)).toEqual({
            description:'Clear skies',
            value:5
        })
    });
    test('Return cloudObj2 if given 11', ()=>{
        expect(cloudVis(11)).toEqual({
            description:'Moderate clouds',
            value:0
        })
    });
    test('Return cloudObj2 if given 40', ()=>{
        expect(cloudVis(40)).toEqual({
            description:'Moderate clouds',
            value:0
        })
    });
    test('Return cloudObj3 if given 41', ()=>{
        expect(cloudVis(41)).toEqual({
            description:'Very cloudy',
            value:-5
        })
    });
    test('Return cloudObj3 if given 41', ()=>{
        expect(cloudVis(100)).toEqual({
            description:'Very cloudy',
            value:-5
        })
    });

   

    test('Return darkLevel3 if given nightLength of 1', ()=>{
        expect(qualityOfDarkness(1)).toEqual({
            description:'Poor viewing',
            value:1
        })
    });
    test('Return darkLevel3 if given nightLength of 6', ()=>{
        expect(qualityOfDarkness(6)).toEqual({
            description:'Poor viewing',
            value:1
        })
    });
    test('Return darkLevel2 if given nightLength of 7', ()=>{
        expect(qualityOfDarkness(7)).toEqual({
            description:'Moderate viewing',
            value:2
        })
    });
    test('Return darkLevel2 if given nightLength of 11', ()=>{
        expect(qualityOfDarkness(11)).toEqual({
            description:'Moderate viewing',
            value:2
        })
    });
    test('Return darkLevel1 if given nightLength of 12', ()=>{
        expect(qualityOfDarkness(12)).toEqual({
            description:'Dark skies',
            value:3
        })
    });
    test('Return 8 if given cloudiness of 0 and nightLength of 13', ()=>{
        expect(calculateVisibility(0, 1600631058, 1605088800)).toBe(8)
    });


