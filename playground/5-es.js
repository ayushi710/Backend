
const https = require('https')

 const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/Delhi.json?access_token=pk.eyJ1Ijoic3VyYWpuZWdpIiwiYSI6ImNrY2hmeTU4bTExdWUydG81dmd4dHdpOW0ifQ.8uLduhqi1xP1V5U1hk7VlA&limit=1';
    
 const request = https.request(url, (response) => {

    let data = '';
    response.on('data', (chunk)=> {
data = data + chunk.toString()
    })

    response.on('end', ()=> {

        const body = JSON.parse(data)
        console.log(body)
    })
    
 })

 request.end()