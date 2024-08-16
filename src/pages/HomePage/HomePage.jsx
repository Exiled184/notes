import { useState, useEffect } from 'react';

// import './App.css';

import * as noteAPI from '../../utilities/notes-api'

import NoteList from '../../components/NoteList/NoteList'
import EditNoteForm from '../../components/EditNoteForm/EditNoteForm'
import CreateNoteForm from '../../components/CreateNoteForm/CreateNoteForm'


export default function HomePage() {
    const [notes, setNotes] = useState([])
    const [editingNote, setEditingNote] = useState(null)
    const [showCreateForm, setShowCreateForm] = useState(false)

    useEffect(() => {
        fetchNotes()
    }, [])


    const fetchNotes = async () => {
        try {
            const res = await noteAPI.fetchNotes()
            setNotes(res.notes)
        } catch (error) {
            console.log(error)
        }
    }

    const handleCreateNote = async (noteData) => {
        try {
            const res = await noteAPI.createNote(noteData)
            setNotes([...notes, res]);
            setShowCreateForm(false);
        } catch (error) {
            console.log(error)
        }
    }

    const handleUpdateNote = async (updatedNote) => {
        try {
            await noteAPI.updateNote(updatedNote._id, updatedNote);
            setEditingNote(null)
            fetchNotes()
        } catch (error) {
            console.log(error)
        }
    }

    const handleDeleteNote = async (noteId) => {
        try {
            await noteAPI.deleteNote(noteId);
            fetchNotes()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <main className="App">

            <h1>Note Taking App</h1>

            {!showCreateForm && !editingNote && (
                <button onClick={() => setShowCreateForm(true)}>Create New Note</button>
            )}
            {showCreateForm && (
                <CreateNoteForm onSubmit={handleCreateNote} onCancel={() => setShowCreateForm(false)} />
            )}
            {editingNote && (
                <EditNoteForm
                    note={editingNote}
                    onSubmit={handleUpdateNote}
                    onCancel={() => setEditingNote(null)}
                />
            )}
            <NoteList
                notes={notes}
                onEdit={setEditingNote}
                onDelete={handleDeleteNote}
            />

        </main >
    );
}

