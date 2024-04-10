const fs = require('fs')
const chalk = require('chalk')

const getNotes = function () {
    return "your Notes..."
}

const addNote = ( title, body) => {
const notes = loadNotes()
const duplicateNotes = notes.find(n => n.title === title)

if(!duplicateNotes) {
console.log(chalk.red.inverse("title taken"))
} else {
    notes.push({
        title: title,
        body: body
    })
    console.log(chalk.green.inverse('Note added!'))
    saveNotes(notes)
}


}

const removeNote = (title) => {
    const notes = loadNotes()
    const newNotes = notes.filter(n => n.title !== title)
    if(newNotes.length === notes.length) {
        console.log(chalk.red.inverse('No note found!'))
    } else {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(newNotes)
    }
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.green("Your Notes"))
    notes.forEach(element => {
        console.log(element.title)
    });
}

const readNote = (title) => {
    debugger
    const notes = loadNotes()
const duplicateNotes = notes.find(n => n.title === title)
console.log(duplicateNotes);

}


const loadNotes = () => {
    try {
    const dataBuffer = fs.readFileSync('notes.json')
    const notes = JSON.parse(dataBuffer.toString())
    return notes

    } catch (e) {
        return []
    }
}

const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson)
}

module.exports = {
    getNotes,
    addNote,
    removeNote,
    listNotes,
    readNote
}