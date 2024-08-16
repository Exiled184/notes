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
        <main className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-3xl font-bold mb-6">Note Taking App</h1>

            <div className="w-full max-w-md mb-6">
                {!showCreateForm && !editingNote && (
                    <button
                        onClick={() => setShowCreateForm(true)}
                        className="w-full py-2 px-4 rounded-md font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Create New Note
                    </button>
                )}
            </div>

            {showCreateForm && (
                <div className="w-full max-w-md mb-6">
                    <CreateNoteForm
                        onSubmit={handleCreateNote}
                        onCancel={() => setShowCreateForm(false)}
                    />
                </div>
            )}

            {editingNote && (
                <div className="w-full max-w-md mb-6">
                    <EditNoteForm
                        note={editingNote}
                        onSubmit={handleUpdateNote}
                        onCancel={() => setEditingNote(null)}
                    />
                </div>
            )}

            <div className="w-full max-w-4xl">
                <NoteList
                    notes={notes}
                    onEdit={setEditingNote}
                    onDelete={handleDeleteNote}
                />
            </div>
        </main>
    );
}