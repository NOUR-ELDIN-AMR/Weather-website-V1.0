const request = require('request')
const geocode = (address,callback) =>{
const MAPBOX_TOKEN = process.env.MAPBOX_TOKEN
/* 
used encode to convert the wrong written address to something that works in the search 
Before: New York has a space, which a URL doesn’t allow.
After: New%20York has the space changed into %20, which is safe in a URL.
 uniform resource identefier 

 يعرف الحاجه الي انت جايبها و يظبتها من ناحية اي حاجه تخرب الurl
 زي %$\؟
component for one piece of url

no comonent  is for full url

a
*/

const geocodeUrl =
    'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
    encodeURIComponent(address) +
    '.json?limit=1&access_token=' + MAPBOX_TOKEN

request({url:geocodeUrl,json:true},(error,response)=>{
    if(error){
        callback('Unable to connect geocde service',undefined)
    }
    else if(response.body.message){
        callback(response.body.message,undefined)
    }
    else if(response.body.features.length ==0){
        callback('Your search is invalid',undefined)
    }
    else {
        callback(undefined,{
            longitude:response.body.features[0].center[0],
            latitude:response.body.features[0].center[1]
        })
    }
    // the sequence must be in order like long then lat 
})
}

module.exports = geocode