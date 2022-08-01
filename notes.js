const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
  const notes = loadNotes()
  const duplicateNotes = notes.find(item => item.title === title)

  if (!duplicateNotes) {
    notes.push({
      title,
      body
    })
    saveNotes(notes)
    console.log(chalk.yellow.inverse('New note has been added'))
  } else {

    console.log(chalk.green.inverse('Title has been taken'))
  }
}

const removeNote = (title) => {
  const notes = loadNotes()
  const titleExist = notes.find(item => item.title === title)

  if (titleExist) {
    const filteredNotes = notes.filter(item => item.title !== title)
    saveNotes(filteredNotes)
    console.log(chalk.green.inverse('Removed'))
  } else {
    console.log(chalk.red.inverse('Not found!'))
  }
}

const listNotes = () => {
  const notes = loadNotes()
  console.log(chalk.yellow.inverse('All Notes'))
  notes.forEach(note => {
    console.log(chalk.red.inverse(note.title))
  })
}

const readNote = (title) => {
  const notes = loadNotes()
  const note = notes.find(item => item.title === title)

  if (note) {
    console.log(chalk.red.inverse(`${note.title} = `), note.body)
  } else {
    console.log(chalk.red.inverse('Note does not exist'))
  }
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }
}

module.exports = { addNote, removeNote, listNotes, readNote }