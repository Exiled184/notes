import { useEffect, useState } from "react";
import * as noteAPI from "../../utilities/notes-api";

export default function NoteItem() {
    const [notes, setNotes] = useState([])


    useEffect(() => {
        fetchNotes()
    }, [])


    const fetchNotes = async () => {
        try {
            const res = await noteAPI.fetchNotes()
            console.log(res)
            setNotes(res.notes)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h2>Your Notes</h2>
            {notes.length === 0 ? (
                <p>No Notes Yet!</p>
            ) : (
                <ul>
                    {notes.map(note => (
                        <li key={note._id}>
                            <p>{note.title}</p>
                            <p>{note.body}</p>
                            <p>{new Date(note.createdAt).toLocaleString()}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>

    )
}