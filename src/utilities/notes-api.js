import sendRequest from "./send-request";   

const BASE_URL = '/api/notes';

export function fetchNotes() {
  return sendRequest(BASE_URL, 'GET');
}

export function createNote(noteData) {
  return sendRequest(BASE_URL, 'POST', noteData);
}

export function updateNote(noteID, noteData){
    return sendRequest(`${BASE_URL}/${noteID}`,'PUT',noteData)
}

export function deleteNote(noteID){
    return sendRequest(`${BASE_URL}/${noteID}`,'DELETE')
}