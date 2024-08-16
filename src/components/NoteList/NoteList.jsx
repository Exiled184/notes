import React from 'react';
import * as noteAPI from '../../utilities/notes-api'

const NoteList = ({ notes, onEdit, onDelete }) => {
    const handleDelete = async (noteId) => {
        try {
            await noteAPI.deleteNote(noteId);
            onDelete(noteId);
        } catch (error) {
            console.error('Error deleting note:', error);
        }
    };


    return (
        <ul>
            {notes.map(note => (
                <li key={note._id}>
                    <h3>{note.title}</h3>
                    <p>{note.content}</p>
                    <button onClick={() => onEdit(note)}>Edit</button>
                    <button onClick={() => onDelete(note._id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};


export default NoteList;
