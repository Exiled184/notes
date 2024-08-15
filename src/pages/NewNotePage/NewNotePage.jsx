import NewNoteForm from "../../components/NewNoteForm/NewNoteForm";

export default function NewNotePage({ addNote }) {

    return (
        <div>
            <h1>Create a Note</h1>
            <NewNoteForm addNote={addNote} />
        </div>
    )
}