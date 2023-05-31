import React, { useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import {AiOutlineEdit} from 'react-icons/ai'
import EditTodo from './EditTodo';

function TodoList({ todos, setTodos, statusTodos }) {

  const [editTodoId, setEditTodoId] = useState(null);
  const [editTodoText, setEditTodoText] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const handleStatusToggle = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            status: !todo.status,
          };
        }
        return todo;
      })
    );
  };

  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (id) => {
    setIsEditing(true);
    setEditTodoId(id);
    setEditTodoText(todos.find((todo) => todo.id === id).text);
  };

  const handleSaveEdit = (editedText) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === editTodoId ? { ...todo, text: editedText } : todo
      )
    );
    setIsEditing(false);
    setEditTodoId(null);
    setEditTodoText('');
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditTodoId(null);
    setEditTodoText('');
  };

  const completedCount = todos.filter((todo) => todo.status).length;
  const unCompletedCount = todos.filter((todo) => !todo.status).length;

  return (
    <div>

      <div className='mb-5 flex justify-between'>
          <div>
            <h2 className='text-left text-orange-200 text-2xl font-semibold my-5'>Todo List</h2>
          </div>
          <div className='flex mt-8'>
          <p className='mr-10 text-green-500'>Completed: {completedCount}</p>
          <p className='text-rose-400'>Pending: {unCompletedCount}</p>
          </div>
      </div>
      <div>
      {todos.length < 1 ? (
      <p className='text-lime-100 text-2xl'>No todos available.</p>
      ) : (
            isEditing ? <EditTodo
            todoId={editTodoId}
            todoText={editTodoText}
            onSaveEdit={handleSaveEdit}
            onCancelEdit={handleCancelEdit}
          /> : (
          statusTodos.map((todo) => (
            <div className='text-left mb-4 relative' key={todo.id}>
              <div className={`w-full rounded-md  border-gray-200 px-5 dark:border-gray-700  dark:bg-gray-800 text-white bg-gray-950 py-3 pl-5
                ${todo.status ? 'dark:bg-gray-900' : ''}`}>
                {todo.text}
              </div>                
              <AiOutlineEdit 
                size={25} 
                className='cursor-pointer text-stone-100 absolute bottom-2 right-10'
                onClick={() => handleEdit(todo.id)}
              />
              <BsFillCheckCircleFill
                onClick={() => handleStatusToggle(todo.id)}
                size={25}
                className={`cursor-pointer ${
                  todo.status ? 'text-green-500' : 'text-stone-100'
                } absolute bottom-2 right-12 mr-5`}
              />
              {todo.status && <span className="text-green-500 absolute top-3 right-24 mr-2">Completed</span>}
              <RiDeleteBin6Line
                onClick={() => handleDelete(todo.id)}
                size={30}
                className='cursor-pointer text-stone-100 absolute bottom-2 right-2'
              />
            </div>
          ))
          )
        )} 
      </div>
        
    </div>
  );
}

export default TodoList;