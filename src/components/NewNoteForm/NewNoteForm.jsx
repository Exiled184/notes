import { useState } from "react";
import * as noteAPI from "../../utilities/notes-api";

export default function NewNoteForm({ notes, setNotes }) {
    const [noteText, setNoteText] = useState({
        title: "",
        body: "",
    })


    const addNote = async () => {
        try {
            const newNote = await noteAPI.createNote({ title: noteText })
            setNotes([newNote, ...notes])
        } catch (error) {
            console.log(error)
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (noteText.trim()) {
            console.log(noteText)
            addNote(noteText);
            setNoteText('')
        }
    }



    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                placeholder="Enter your note here"
                rows="4"
                required
            />
            <button type="submit">Add Note</button>
        </form>

    )
}