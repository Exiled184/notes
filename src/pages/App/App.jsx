import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';

import NavBar from '../../components/NavBar/NavBar';
import NewNoteForm from '../../components/NewNoteForm/NewNoteForm';
import NoteItem from '../../components/NoteItem/NoteItem';
import * as noteAPI from '../../utilities/notes-api'
import './App.css';

import EditNoteForm from '../../components/EditNoteForm/EditNoteForm'
import CreateNoteForm from '../../components/CreateNoteForm/CreateNoteForm'
import HomePage from '../HomePage/HomePage'

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/notes" element={<HomePage />} />
            <Route path="/notes/new" element={<NewNoteForm />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

