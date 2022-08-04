const fs = require('fs')

const addNote = (title) => {
  const notes = loadNotes()
  notes.push({
    title
  })

  saveNotes(notes)
}

const deleteNote = title => {
  const notes = loadNotes()

  saveNotes(notes.filter(i => i.title !== title))
}

const saveNotes = (notes) => {
  fs.writeFileSync('notes2.json', JSON.stringify(notes))
}


const loadNotes = () => {
  try {
    return JSON.parse(fs.readFileSync('notes2.json').toString())
  } catch (e) {
    return []
  }
}

module.exports = { addNote, deleteNote }