const request = require('postman-request')
const geocode = (adress,callback) =>{

    const Geourl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(adress) + '.json?access_token=pk.eyJ1IjoibWluLW1heCIsImEiOiJjbGM5Z3Z5M3gxdTVwM29xa3h1aHFlb29nIn0.7tktS1vOeCmeH_8SygXyHQ'
 
    request({url:Geourl, json:true},(error,{body})=>{
 
       if(error){
          
          callback('unable to connect to location services!',undefined)} // since if we have error,  is undefined
       
       else if(body.features.length===0){
          
          callback('unable to find location please try another one',undefined)}
 
       else {
 
             callback(undefined,{
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
             })
       }
 
    })
 
 }
 



module.exports = {

    getGeocode: geocode
}

