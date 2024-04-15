const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast') 

const location = process.argv[2]

if(location) {
    geocode(location, (error, {lat, long, location} = {}) => {
        if(error) {
            console.log("Some error occured. ", error)
        } else {
            console.log(location)
            forecast({lat,long}, (error, data) => {
                if(error) {
                    console.log("Some error occured. ", error)
                } else {
                    console.log(data.condition.text+". It is currently "+ data.temp_c+" degrees out and feels like "+data.feelslike_c +" degree")
                }
            })
            
        }
    })
    
} else {
    console.log("Location not found")
}




