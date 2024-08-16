import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';

import NavBar from '../../components/NavBar/NavBar';
import NewNoteForm from '../../components/NewNoteForm/NewNoteForm';
// import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [notes, setNotes] = useState([])

  const addNote = (text) => {
    const newNote = {
      text: text,
      createdAt: new Date(),
    }
    setNotes([newNote, ...notes])
  }


  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/notes/new" element={<NewNoteForm addNote={addNote} />} />
          </Routes>
          <div>
            <h2>Your Notes</h2>
            {notes.length === 0 ? (
              <p>No Notes Yet!</p>
            ) : (
              <ul>
                {notes.map(note => (
                  <li key={note._id}>
                    <p>{note.text}</p>
                    <p>{new Date(note.createdAt).toLocaleString()}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

