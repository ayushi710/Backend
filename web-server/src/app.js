const express = require('express')
const path = require('path')




const app = express()

const publicDir= path.join(__dirname, '../public')

app.use(express.static(path.join(__dirname, '../public')))

app.get('/',(req, res) => {
    res.send("Hello ")
})

// app.get('/help',(req, res) => {
//     app.use(express.static(path.join(publicDir, '/help.html')))
// })

// app.get('/about',(req, res) => {
//     res.send("<h1>About</h1")
// })

app.get('/weather',(req, res) => {
    res.send({
        location: 'delhi',
        forecast: 'sunny'
    })
})
app.listen(3000, () => {
    console.log("server is up")
})