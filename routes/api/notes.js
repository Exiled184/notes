const express = require('express');
const notesController = require('../../controllers/api/notes');
const router = express.Router();
const ensureLoggedIn = require('../../config/ensureLoggedIn');


// Routing  for playlist

router.get('/', ensureLoggedIn, notesController.fetchNotes )

router.post('/', ensureLoggedIn, notesController.createNote)

router.get('/:id',ensureLoggedIn, notesController.fetchNote)

router.put('/:id', ensureLoggedIn, notesController.updateNote)

router.delete('/:id', ensureLoggedIn, notesController.deleteNote)



module.exports = router;