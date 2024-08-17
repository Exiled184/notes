import { useState, useEffect } from 'react';
import * as noteAPI from '../../utilities/notes-api'

export default function EditNoteForm({ note, onSubmit, onCancel, setNotes }) {
    const [title, setTitle] = useState(note.title);
    const [content, setContent] = useState(note.content);
    const [isEdit, setIsEdit] = useState(false);
    useEffect(() => {
        setTitle(note.title
        );
        setContent(note.content);
    }, [note])


    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsEdit(true)
        const updatedNote = { title, content }
        try {
            await noteAPI.updateNote(note._id, updatedNote);
            // onSubmit(updatedNote)

            const newNotes = [...notes]
            // 
            setNotes([...notes, newNotes])
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

