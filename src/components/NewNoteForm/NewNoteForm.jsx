import { useState } from "react"

export default function NewNoteForm({ addNote }) {
    const [noteText, setNoteText] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if (noteText.trim()) {
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