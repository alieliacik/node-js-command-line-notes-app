
const fs = require('fs')
const chalk = require('chalk')
const yargs = require('yargs')
const { addNote, listNotes, removeNote, readNote } = require('./notes.js')

// Create add command

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'body',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    addNote(argv.title, argv.body)
  }
})

// Create remove command

yargs.command({
  command: 'remove',
  describe: 'Remove a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    removeNote(argv.title)
  }
})

// Create list command

yargs.command({
  command: 'list',
  describe: 'list a new note',
  handler() {
    listNotes()
  }
})

// Create read command

yargs.command({
  command: 'read',
  describe: 'read a new note',
  builder: {
    title: {
      describe: 'title',
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    readNote(argv.title)
  }
})

yargs.parse()