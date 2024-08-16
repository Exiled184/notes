import sendRequest from "./send-request";   

const BASE_URL = '/api/notes';

export function fetchNotes() {
  return sendRequest(BASE_URL, 'GET');
}

export function createNotes(noteData) {
  return sendRequest(BASE_URL, 'POST', noteData);
}