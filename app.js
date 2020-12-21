// const add = require('./utils.js')
// const validator  = require('validator')
const notes = require("./notes.js");
const chalk = require("chalk");
const yargs = require("yargs");

// const fs = require('fs')
// fs.appendFileSync('notes.txt',message)
// const sum = add (4,-62)
// console.log(sum)
// const msg =notes()
// console.log(msg)

// console.log(chalk.yellow.inverse.bold('Success'))

// console.log(validator.isURL('https://uij@s'))


//add
yargs.command({
  command: "add",
  description: "Add a new note",
  builder:{
      title:{
          describe :'Note title',
          demandOption:true,
          type:'string'
      },
      desc:{
        describe :'Note description',
        demandOption:true,
        type:'string'
    }
  },
  handler(argv) {
    // console.log("Note Title: "+argv.title);
    // console.log("Note Description: "+argv.desc);
    notes.addNote(argv.title,argv.desc);
  },
});

//remove

yargs.command({
    command: "remove",
    description: "remove a note",
    builder:{
      title:{
        describe :'Note title',
        demandOption:true,
        type:'string'
      }
    },
    handler(argv) {
      notes.removeNote(argv.title);
    },
  });

  //listing

  yargs.command({
    command: "list",
    description: "list a note",
    handler() {
      console.log("listing a note");
    },
  });

  //read
  yargs.command({
    command: "read",
    description: "read a note",
    builder:{
      title:{
        describe :'Note title',
        demandOption:true,
        type:'string'
      }
    },
    handler(argv) {
      notes.readNote(argv.title)
    },
  });
// console.log(yargs.argv);
yargs.parse();
