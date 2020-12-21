const fs = require("fs");
const chalk = require('chalk');

const getNotes =  () =>{
  return "your notes";
};

const addNote =  (title, body)=> {
  const notes = loadNotes();
  const duplicateNotes = notes.filter( (note) =>note.title === title  );
  const duplicatesingle = notes.find((note)=>note.title ===title);
  if (!duplicatesingle) {
    
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log("new note added");
  } else {
    console.log("note title taken");
  }
};

const saveNotes =  (notes)=> {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes =  () =>{
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

//remove
const removeNote =  (title) =>{
    // console.log(title)
  const notes = loadNotes();
  const removeNotes = notes.filter(function(note){
    return note.title !== title;
    
  });
  if(notes.length>removeNotes.length){
    
    console.log(chalk.green.inverse('Note removed successfully'))
    saveNotes(removeNotes)

  }
  else{
      console.log(chalk.red.inverse('no title found'))
  }
    
};
 

const readNote=(title)=>{
const notes = loadNotes()
const note = notes.find((note)=>note.title ===title)
if(note){
console.log(chalk.white.inverse.bold(note.title))
console.log(chalk.grey(note.body))

}else{
  console.log(chalk.red.inverse('not found'))
}

}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  readNote:readNote,
};
