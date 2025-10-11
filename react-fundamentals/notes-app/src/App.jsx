import { useEffect, useState } from 'react';
import NotesForm from './components/NotesForm';
import NoteList from './components/NoteList';

const App = () => {
  const [notes, setNotes] = useState(() => {
    const notes = JSON.parse(localStorage.getItem('notes'));
    return notes || [];
  });

  const handleRemoveNote = (noteId) => {
    const updatedNotes = notes.filter((note) => note.id != noteId);
    setNotes(updatedNotes);
  };

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <div className='max-w-lg mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg'>
      <h2 className='text-2xl font-bold mb-4 text-center'>📝 Notes App</h2>
      <NotesForm notes={notes} setNotes={setNotes} />
      <NoteList notes={notes} removeNote={handleRemoveNote} />
    </div>
  );
};

export default App;
