const request = require('request')

const url ="http://api.weatherapi.com/v1/current.json?key=fc0f00473c37468cb0f63135241204&q=London&aqi=no"

request({
    url : url,
    json: true
}, (error, response) => {

    const data = (response.body.current)
   

    console.log(data.condition.text+". It is currently "+ data.temp_c+" degrees out and feels like "+data.feelslike_c +" degree")

})

