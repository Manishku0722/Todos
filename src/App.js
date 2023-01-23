import './App.css';

import Header from './MyComponent/Header';
import Footer from './MyComponent/Footer';
import Todos from './MyComponent/Todos';
import AddTodo from './MyComponent/AddTodo';
import { useState } from 'react';

function App() {

  const onDelete=(todo)=>{
    console.log(todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
  }

  const addTodo = (title, desc)=>{
    let sno = todos[todos.length-1].sno+1;
    const myTodo={
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo)
  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to got to the market for this job is done1"
    },
    {
      sno: 2,
      title: "Go to the GYM",
      desc: "You need to got to the market for this job is done2"
    },
    {
      sno: 3,
      title: "Go to the Mall",
      desc: "You need to got to the market for this job is done3"
    }
  ]);

  return (
    <div>
      <Header/>
      <AddTodo addTodo={addTodo}/>
      <Todos todos = {todos} onDelete={onDelete}/>
      <Footer/>
    </div>
  );
}

export default App;
