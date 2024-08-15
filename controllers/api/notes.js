const Note = require('../../models/note')

module.exports ={
fetchNotes,
fetchNote,
createNote,
updateNote,
deleteNote,
}


const fetchNotes = async (req,res) => {
    const notes= await Note.find()
    console.log(notes)
    res.json({notes: notes})
  }
  
  const fetchNote = async (req,res) => {
      const noteID = req.params.id;
      const note = await note.findById(noteID)
      res.json({note: note})
    }
  
  const createNote = async (req,res) => {
      const body = req.body.body;
      const note = await Note.create({
        body: body,
      });
      res.json({note: note})
    }
  
  const updateNote = async (req, res) => {
      const noteID = req.params.id;
    
      const body = req.body.body;
    
      const result = await Note.findByIdAndUpdate(noteID, {
        body: body,
      },{returnDocument:"after"})
      console.log(result)
      console.log(noteID)
     
      res.json({note: result})
    }
  
  const deleteNote = async (req,res) => {
      const noteID = req.params.id
      await Note.deleteOne({id: noteID})
    
      res.json({success: "Note Deleted"})
    }

