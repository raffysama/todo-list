import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { BsFillCheckCircleFill } from 'react-icons/bs';

function TodoList({ todos, setTodos, statusTodos }) {
  
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
          <p className='text-rose-400'>Incomplete: {unCompletedCount}</p>
          </div>
      </div>
      <div>
        {todos.length < 1 ? (<p className='text-lime-100 text-2xl'>No list of todo...</p>
        ):(
          statusTodos.map((todo) => (
            <ul className='text-left mb-4 relative' key={todo.id}>
              <li className={`w-full rounded-md border-gray-200 px-5 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white bg-gray-950 py-3 pl-5
                ${todo.status ? 'dark:bg-gray-900' : ''}`}>
                {todo.text}
              </li>                
             
              <BsFillCheckCircleFill
                  onClick={() => handleStatusToggle(todo.id)}
                  size={25}
                  className={`cursor-pointer ${
                    todo.status ? 'text-green-500' : 'text-stone-100'
                  } absolute bottom-2 right-14`}
                />
                 {todo.status && <span className="ml-1 text-green-500 absolute top-3 right-24">Completed</span>}
              <RiDeleteBin6Line
                onClick={() => handleDelete(todo.id)}
                size={30}
                className='cursor-pointer text-stone-100 absolute bottom-2 right-5'
              />
            </ul>
          ))              
        )}          
      </div>
        
    </div>
  );
}

export default TodoList;