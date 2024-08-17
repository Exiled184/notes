import { useState, useEffect } from 'react';
import * as noteAPI from '../../utilities/notes-api'

export default function EditNoteForm({ note, onCancel, handleNote }) {
    const [title, setTitle] = useState(note.title);
    const [content, setContent] = useState(note.content);
    const [isEdit, setIsEdit] = useState(false);
    useEffect(() => {
        setTitle(note.title
        );
        setContent(note.content);
    }, [note])

    // console.log("the initial note", note)

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsEdit(true)
        const updatedNote = { title, content }
        try {
            const res = await noteAPI.updateNote(note._id, updatedNote);
            // console.log(res)
            handleNote(res)
            setIsEdit(false);
        } catch (error) {
            console.log(error)
        }
    };



    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto space-y-4"
        >
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                    Title:
                </label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                    Content:
                </label>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    rows="4"
                    required
                />
            </div>
            <div className="flex space-x-4">
                <button
                    type="submit"
                    disabled={isEdit}
                    className="py-2 px-4 rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    {isEdit ? 'Updating...' : 'Update Note'}
                </button>
                <button
                    type="button"
                    onClick={onCancel}
                    className="py-2 px-4 rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                    Cancel
                </button>
            </div>
        </form>
    );
}
