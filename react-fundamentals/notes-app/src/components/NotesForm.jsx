import { useState } from 'react';
import TextInput from './inputs/TextInput';
import SelectInput from './inputs/SelectInput';
import TextArea from './inputs/TextArea';

const NotesForm = ({ notes, setNotes }) => {
  /* 
   Works but uncommon way
   
   const [title, setTitle] = useState('');
   const [priority, setPriority] = useState('Medium');
   const [category, setCategory] = useState('Work');
   const [description, setDescription] = useState('');
  */

  const [formData, setFormData] = useState({
    title: '',
    priority: 'Medium',
    category: 'Work',
    description: '',
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

  const priorityList = [
    { value: 'High', label: '🔴 High' },
    { value: 'Medium', label: '🟠 Medium' },
    { value: 'Low', label: '🟢 Low' },
  ];

  const categoryList = [
    { value: 'Work', label: '📁 Work' },
    { value: 'Personal', label: '🏠 Personal' },
    { value: 'Ideas', label: '💡 Ideas' },
  ];

  const handleFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description) return;

    const newNote = { id: Date.now(), ...formData };
    setNotes([newNote, ...notes]);
    setFormData({
      title: '',
      priority: 'Medium',
      category: 'Work',
      description: '',
    });
  };

  return (
    <>
      <button
        onClick={() => setIsFormVisible(!isFormVisible)}
        className='w-full bg-gray-100 border border-gray-300 text-purple-800 py-2 rounded-lg cursor-pointer 
        hover:bg-purple-200 hover:border-purple-300 transition mb-4'
      >
        {isFormVisible ? 'Hide Form ❎' : 'Add New Note ➕'}
      </button>
      {isFormVisible && (
        <form onSubmit={handleSubmit} className='mb-6'>
          <TextInput
            label='Title'
            name='title'
            value={formData.title}
            onChange={handleFormData}
          />

          <SelectInput
            label='Priority'
            name='priority'
            value={formData.priority}
            options={priorityList}
            onChange={handleFormData}
          />

          <SelectInput
            label='Category'
            name='category'
            value={formData.category}
            options={categoryList}
            onChange={handleFormData}
          />

          <TextArea
            name='description'
            label='Description'
            value={formData.description}
            onChange={handleFormData}
          />

          <button className='w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-600'>
            Add Note
          </button>
        </form>
      )}
    </>
  );
};

export default NotesForm;
