const getNotes = require('./notes.js')
const validator = require("validator")
const chalk = require('chalk')

const data = getNotes()

console.log(data)

console.log(validator.isEmail('ayushi'))


console.log(chalk.green.bold.inverse('Successfully  display!'))