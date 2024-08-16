const express = require('express');
const router = express.Router();
const notesController = require('../../controllers/api/notes');
const ensureLoggedIn = require ('../../config/ensureLoggedIn');


// Routing  for playlist

router.get('/', ensureLoggedIn, notesController.fetchNotes)

router.post('/', notesController.createNote)

// router.put('/:id', notesController.updateNote)

// router.delete('/:id', notesController.deleteNote)



module.exports = router;