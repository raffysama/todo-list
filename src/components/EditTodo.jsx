import React, { useState } from 'react';

function EditTodo({  todoText, onSaveEdit, onCancelEdit }) {
  const [editedText, setEditedText] = useState(todoText);
  const [alert, setAlert] = useState(false);

  const handleInputChange = (e) => {
 
    setEditedText(e.target.value);
  };

  const handleSave = () => {
    if (!editedText || /^\s*$/.test(editedText)) {
        setAlert(true);
        return
      }
    onSaveEdit(editedText);
  };

  const handleCancel = () => {
    onCancelEdit();
  };

  return (

    <div className='text-left mb-4 relative'>
        {alert && (<div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 mb-10" role="alert">
            <p>Please enter a valid todo text.</p>
            </div>)}
      <textarea
        className='w-full rounded-md border-gray-200 px-5 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white bg-gray-950 py-3 pl-5'
        value={editedText}
        onChange={handleInputChange}
      />
      <div>
        <button className='text-green-500 mx-5' onClick={handleSave}>
          Save
        </button>
        <button className='text-stone-100' onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default EditTodo;