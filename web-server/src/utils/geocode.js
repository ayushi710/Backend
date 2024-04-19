const request = require('request')

const geocode = (address, callback ) => {
    const geo_url ='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1Ijoic3VyYWpuZWdpIiwiYSI6ImNrY2hmeTU4bTExdWUydG81dmd4dHdpOW0ifQ.8uLduhqi1xP1V5U1hk7VlA&limit=1';
    request({
        url: geo_url,
        json: true
    }, (error, response) => {
        if(error) {
           callback('Unable to connect with location service', undefined)
        } else if(!response.body.features.length) {
          callback('Unable to find location. Try another search.', undefined)
        } else{
            callback(undefined, {
                
                lat :response.body.features[0].geometry.coordinates[0],
                long: response.body.features[0].geometry.coordinates[1],
                location : response.body.features[0].place_name
            })
        }
    })
        
}

module.exports = geocode