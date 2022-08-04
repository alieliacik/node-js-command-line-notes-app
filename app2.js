const yargs = require('yargs')
const { addNote, deleteNote } = require('./notes2.js')

yargs.command({
  command: 'add',
  builder: {
    title: {
      desribe: 'title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    addNote(argv.title)
  }
})


yargs.command({
  command: 'delete',
  builder: {
    title: {
      desribe: 'title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    deleteNote(argv.title)
  }
})

yargs.parse()
