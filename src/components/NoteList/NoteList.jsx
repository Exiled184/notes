// src/components/NoteList.js
import React from 'react';

const NoteList = ({ notes, onEdit, onDelete }) => {
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
