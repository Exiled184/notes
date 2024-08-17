import React from 'react';
import * as noteAPI from '../../utilities/notes-api'

export default function NoteList({ notes, onEdit, onDelete, setNotes }) {

    const handleDelete = async (noteId) => {
        try {
            await noteAPI.deleteNote(noteId);
            // onDelete(noteId);
            const newNotes = notes.filter((note) => note._id !== noteId)
            setNotes(newNotes)
        } catch (error) {
            console.error('Error deleting note:', error);
        }
    };
    console.log(notes)

    return (
        <ul className="space-y-4">
            {notes.map(note => (
                <li
                    key={note._id}
                    className="bg-white shadow-md rounded-lg p-4 flex flex-col space-y-2"
                >
                    <h3 className="text-xl font-semibold text-gray-800">{note.title}</h3>
                    <p className="text-gray-600">{note.content}</p>
                    <div className="flex space-x-2">
                        <button
                            onClick={() => onEdit(note)}
                            className="py-1 px-3 rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => handleDelete(note._id)}
                            className="py-1 px-3 rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                            Delete
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
};