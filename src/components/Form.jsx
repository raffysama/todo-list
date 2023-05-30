import React from 'react'
import { v4 as uuidv4 } from 'uuid';

function Form({setInputText,setTodos,todos,inputText,setStatus,setStatusTodos}) {

    const changeHandler = (e) =>{
        setInputText(e.target.value)
    }
    const submitHandler = (e) =>{
        e.preventDefault();
        if (!inputText || /^\s*$/.test(inputText)) {
            return;
          }
        setTodos([
            ...todos,
            {
              id: uuidv4(),
              text: inputText,
              status: false,
            },
          ]);
          setInputText('');
    }

    const statusHandler = (e) =>{
        setStatus(e.target.value)
    }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <div className="relative">
                <input
                    value={inputText}
                    onChange={changeHandler}
                    placeholder="Write something..."
                    className="w-full rounded-md border-gray-200 py-2.5 px-5 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
                />
                <span className="absolute inset-y-5 end-0 grid w-10 place-content-center">
                    <button
                        type="submit"
                        className="rounded-full bg-green-600 p-0.5 text-white hover:bg-green-700 dark:bg-green-500 dark:text-gray-800 dark:hover:bg-green-600"
                        >
                        <span className="sr-only">Submit</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-4 w-4"
                        >
                            <path
                            d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"
                            />
                        </svg>
                    </button>
                </span>  
            </div>
            <select onChange={statusHandler} className="mt-5 py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                    <option value="all" className='dark:bg-gray-800'>All</option>
                    <option value="completed" className='dark:bg-gray-800'>Completed</option>
                    <option value="uncompleted" className='dark:bg-gray-800'>Uncompleted</option>
            </select>
            <div>

            </div>
        </form>
    </div>
  )
}

export default Form
