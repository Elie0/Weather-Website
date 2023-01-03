const request = require('postman-request')

 const forecast = (longitude,latitude,callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=b59bc6f7100d3e505fddc2cf5f3d17aa&query=' + longitude + ',' + latitude + '&units=m'
 
    request({url, json:true},(error,{body})=>{
          if(error)
          {
             callback('unable to connect with the weather forecast api',undefined)
          }
          else if (body.error)
          {
             callback("error, check your writing correctly", undefined)
          }
          else {
                   callback(undefined,[body.current.temperature,body.current.feelslike,body.current.pressure,body.current.wind_speed])
          }
    })
  }
  
  module.exports = forecast






  
//1st argument: is an options object which outline what we wanna do where we provide our url and other information url: X   we called X Myurl also here
//2nd arg: is actuallt when we use that response its a callback fct that runs when we get our data, or if error happened like laptop lost wifi so it has 2 args error and response

/*request({url:Myurl, json:true}, (error,response) => {  //json:true is from librry documentation used to parse the  JSON body
    
         if(error)
         {
            console.log('unable to connect to weather service')
         }
      // const data = JSON.parse(response.body)
      // console.log(response.body.current)

      else if (response.body.error)
      {
        console.log('unable to find location')
      }
else
     {  console.log("actual temperature is: " + response.body.current.temperature + " but it feels like : " + response.body.current.feelslike ) 
   
     }


})*/