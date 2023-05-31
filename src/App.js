import React, {useState,useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
   

  const localData = () =>{
    const data = localStorage.getItem('todos');
    return data ? JSON.parse(data) :[]
  }

  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState(localData());
  const [status,setStatus] = useState('');
  const [statusTodos, setStatusTodos] = useState([]);

  useEffect(()=>{
    const statusTodosHandler = () =>{
      switch(status){
          case "completed":
          setStatusTodos(todos.filter((todo)=>
          todo.status === true))
          break;
  
          case "uncompleted":
          setStatusTodos(todos.filter((todo)=>
          todo.status === false))
          break;
  
          default:
            setStatusTodos(todos)
            break;
      }
    }
    statusTodosHandler()
  },[todos, status])

  // get data from Local Storage
  useEffect(()=>{
    localData();
  },[])

  // set data to local storage

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos))
  },[todos])


  return (
    <div className="App background-color: rgb(8, 11, 24);">
      <div className="container mx-auto max-w-2xl mt-10 px-4">
        <h1 className='text-left text-orange-200 text-4xl font-semibold mb-5'>Any plan for today ?</h1>
        <Form 
          setInputText={setInputText} 
          todos={todos} 
          setTodos={setTodos} 
          inputText={inputText}
          localData={localData}
          setStatus={setStatus}
          setStatusTodos={setStatusTodos}
          />

        <TodoList 
          todos={todos} 
          setTodos={setTodos}
          statusTodos={statusTodos}/>
      </div>
    </div>  
  );
}

export default App;
