const express = require('express')
const path = require('path')
const hbs =require('hbs')




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
    res.send({
        location: 'delhi',
        forecast: 'sunny'
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