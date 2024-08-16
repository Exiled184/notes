import { useState, useEffect } from 'react';
import * as notesAPI from '../../utilities/notes-api'

export default function EditNoteForm({ notes, onSubmit, onCancel }) {
    const [title, setTitle] = useState(notes)
    const [content, setContent] = useState(notes);


    useEffect(() => {
        setTitle(notes);
        setContent(notes);
    }, [notes])


    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedNote = { title, content }
        try {
            await notesAPI.updateNote(notes._id, updatedNote);
            onSubmit(updatedNote)
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </label>
            <label>
                Content:
                <textarea value={content} onChange={(e) => setContent(e.target.value)} />
            </label>
            <button type="submit">Update Note</button>
            <button type="button" onClick={onCancel}>Cancel</button>
        </form>
    );
};
