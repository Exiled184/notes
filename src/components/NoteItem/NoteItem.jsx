import { useEffect, useState } from "react";
import * as noteAPI from "../../utilities/notes-api";
// import EditNoteForm from "../EditNoteForm/EditNoteForm";

export default function NoteItem({ notes }) {



    // const editNote = async () => {
    //     try {
    //         const response = await noteAPI.updateNote(updatedNote._id, updatedNote)
    //         setNotes([reponses, ...notes])
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }


    return (
        <div>
            <h2>Your Notes</h2>
            {notes.length === 0 ? (
                <p>No Notes Yet!</p>
            ) : (
                <div>
                    {notes.map(note => (
                        <div className="note"
                            key={note._id}>
                            <p>{note.title}</p>
                            <p>{note.body}</p>
                            {/* <EditNoteForm /> */}
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>

                    ))
                    }
                </div>
            )}
        </div>

    )
}