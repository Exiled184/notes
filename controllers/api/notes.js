const Note = require('../../models/note')

const fetchNotes = async (req,res) => {
    const notes= await Note.find({user: req.user._id})
    res.json({notes})
  }
  
  const createNote = async (req,res) => {
    try{
      const note = await Note.create({
        ...req.body,
        user: req.user._id
      });
      res.status(201).json(note)
    } catch(error){
      console.log(error)
      res.status(400).json(error)
    }
    }
  
  const updateNote = async (req, res) => {
    try{
      const note = await Note.findByIdAndUpdate({
            _id: req.params.id,
            user: req.user._id
      },
      req.body,
      {new:true, runValidators: true})
      res.status(200).json(note)
    } catch(error){
      console.log(error);
      res.status(400).json(error)
    }
  }
  
  const deleteNote = async (req,res) => {
    try{
      const note = await Note.findOneAndDelete({
        _id: req.params.id,
        user:req.user._id
      }); res.status(200).json(note);
    } catch(error){
      res.json({success: "Note Deleted"},{note})
    }
  }



    module.exports ={
      fetchNotes,
      createNote,
      updateNote,
      deleteNote,
      }