const Note = require('../../models/note')

module.exports ={
fetchNotes,
fetchNote,
createNote,
updateNote,
deleteNote,
}


const fetchNotes = async (req,res) => {
    const notes= await Note.find({user: req.user._id})
    res.json({notes})
  }
  
  const fetchNote = async (req,res) => {
      const noteID = req.user._id;
      const note = await note.findById(noteID)
      res.json({note})
    }
  
  const createNote = async (req,res) => {
      const note = await Note.create({
        ...req.body,
        user: req.user._id
      });
      res.json({note})
    }
  
  const updateNote = async (req, res) => {
      const note = await Note.findByIdAndUpdate({
            _id: req.params.id,
            user: req.user._id
      },
      req.body,
      {new:true, runValidators: true})
      res.json({note: result})
    }
  
  const deleteNote = async (req,res) => {
      const note = await Note.findOneAndDelete({
        _id: req.params.id,
        user:req.user._id
      });
    
      res.json({success: "Note Deleted"},{note})
    }

