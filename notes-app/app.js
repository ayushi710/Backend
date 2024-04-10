const notes = require('./notes.js')
const validator = require("validator")
const chalk = require('chalk')
const yargs= require('yargs')
const { argv } = require('process')

// const command = yargs[_[0]]


yargs.command({
    command: 'add',
    describe: 'add new note',
    builder: {
        title: {
            decribe:"Note title",
            demandOption: true,
            type: "string"
        },
        body: {
            decribe:"Note body",
            demandOption: true,
            type: "string"
        }
    },
    handler: function(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove note',
    builder: {
        title: {
            decribe:"Note title",
            demandOption: true,
            type: "string"
        }
    },
    handler: function(argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'list the note',
    handler: function() {
       notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'read note',
    builder: {
        title: {
            decribe:"Note title",
            demandOption: true,
            type: "string"
        }
    },
    handler: function(argv) {
        notes.readNote(argv.title)
    }
})

// console.log(yargs.argv)
yargs.parse()