const request = require('request')

const forecast = (data, callback) => {
    const url ="http://api.weatherapi.com/v1/current.json?key=fc0f00473c37468cb0f63135241204&q="+ encodeURIComponent(data.lat)+","+ encodeURIComponent(data.long)+ "&aqi=no"

    request({
        url,
        json: true
    }, (error, {body}) => {
    
        if(error) {
            callback("Unable to connect with website service")
            
        } else if(body.error) {
    
            callback('Unable to find location')
    
        } else{
    
            const data = (body.current)
            callback(undefined, data)
            //console.log(data.condition.text+". It is currently "+ data.temp_c+" degrees out and feels like "+data.feelslike_c +" degree")
        
        }
       
    })

}


module.exports = forecast