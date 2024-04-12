const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
const data = dataBuffer.toString()
const obj = JSON.parse(data)
obj.name = 'Ayushi'
obj.age = 26
fs.writeFileSync("1-json.json", JSON.stringify(obj))