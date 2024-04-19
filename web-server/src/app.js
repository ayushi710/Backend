const express = require('express')
const path = require('path')
const hbs =require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')



const app = express()

// define path for express config

const publicDir= path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
// setup handlebars engine and views location

app.set('view engine','hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)


// set up static directory to serve
app.use(express.static(path.join(__dirname, '../public')))


app.get('', (req , res ) => {
    res.render('index', {
        title: 'Weather app',
        name : 'Ayushi'
    })
})

app.get('', (req , res ) => {
    res.render('index', {
        title: 'Weather app',
        name : 'Ayushi'
    })
})
// app.get('/',(req, res) => {
//     res.send("Hello ")
// })

// app.get('/help',(req, res) => {
//     app.use(express.static(path.join(publicDir, '/help.html')))
// })

app.get('/about',(req, res) => {
    res.render('about', {
        title: 'about app',
        name : 'Ayushi'
    })
})

app.get('/help',(req, res) => {
    res.render('help', {
        title: 'help app',
        message : 'this is to help the app',
        name: 'Ayushi'
    })
})
app.get('/weather',(req, res) => {
    if(!req.query.address) {
        return res.send({
            error: "plesae send address"
        })
    }
    
    const payload = geocode(req.query.address, (error, {lat, long, location} = {}) => {
        if(error) {
            return res.send(error)
        } else {
            
            forecast({lat,long}, (error, data) => {
                if(error) {
            return res.send(error)
                } else {
                    res.send({
                    
                        forecast: (data.condition.text+". It is currently "+ data.temp_c+" degrees out and feels like "+data.feelslike_c +" degree"),
                        address: req.query.address,
        
                    })
                   
                }
            })
            
        }
    })
    
})

app.get('/products', (req, res)=> {
    if(!req.query.search) {
       return res.send({
            error: "searxch requird"
        })
    } e
    res.send({
        products: []
    })
})

app.get('/help/*', (req , res ) => {
    res.render( 'error', {
        message :"help articale not found"
})
})
app.get('*',(req, res) => {
    res.render( 'error', {
        message :"404 not found"
})
})

app.listen(3000, () => {
    console.log("server is up")
})