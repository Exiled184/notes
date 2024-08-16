import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';

import NavBar from '../../components/NavBar/NavBar';
import NewNoteForm from '../../components/NewNoteForm/NewNoteForm';
import NoteItem from '../../components/NoteItem/NoteItem';
import * as noteAPI from '../../utilities/notes-api'
// import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [notes, setNotes] = useState([])


  useEffect(() => {
    fetchNotes()
  }, [])


  const fetchNotes = async () => {
    try {
      const res = await noteAPI.fetchNotes()
      setNotes(res.notes)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/notes/new" element={<NewNoteForm notes={notes} setNotes={setNotes} />} />
          </Routes>
          <NoteItem notes={notes} />
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

