
const request = require('request')
const code = (latitude,longitude,callback) =>{
    const url = 'https://api.weatherapi.com/v1/current.json?key=' + process.env.WEATHER_KEY + '&q=' + latitude + ',' + longitude
       request({url,json:true},(error,response)=>{
        // low level error 
        if(error){
            callback('Unable to connect weather service',undefined)
        }
        else if(response.body.error){
           callback(response.body.error.message,undefined)
        }
        else {
              callback(undefined,
        response.body.current.condition.code)
        }
    }) 
}
module.exports = code