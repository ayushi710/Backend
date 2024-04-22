const fs = require('fs')

const dataBuffer = fs.readFileSync('data.json')
const data = dataBuffer.toString()
const obj = JSON.parse(data)
obj.name = 'Ayushi'
obj.age = 26
fs.writeFileSync("data.xlsx", JSON.stringify(obj))


const textBuffer = fs.readFileSync('mock.txt')
const dataText = textBuffer.toString()
fs.writeFileSync("mock-copy.txt", dataText)
