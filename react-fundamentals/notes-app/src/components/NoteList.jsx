const NoteList = ({ notes, removeNote }) => {
  if (notes.length === 0) {
    return <p className='text-center text-gray-500'>No Notes Yet</p>;
  }

  return (
    <div className='space-y-4'>
      {notes.map((note) => (
        <div
          key={note.id}
          className='p-4 bg-white rounded-lg shadow-md border-l-4'
        >
          <h3 className='text-lg font-bold'>{note.title}</h3>
          <p className='text-sm text-gray-600'>
            <strong>Category: </strong> {note.category}
          </p>
          <p className='pt-1 text-sm text-gray-600'>
            <strong>Priority: </strong> {note.priority}
          </p>
          <p className='pt-2'>{note.description}</p>
          <button
            className="className='w-full bg-purple-500 text-white px-4 py-2 mt-2 rounded-lg cursor-pointer hover:bg-purple-600'"
            onClick={() => removeNote(note.id)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
