import './App.css';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import Todos from './MyComponents/Todos';
import AddToDo from './MyComponents/AddToDo';
import About from './MyComponents/About';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  const onDelete = (todo) => {
    console.log("I am on delete of todo", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
  };

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }

    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }


  let [todos, setTodos] = useState([
    {
      sno: 0,
      title: 'Goto the market',
      desc: 'You need to go to the market to get this job done'
    },
    {
      sno: 1,
      title: 'Goto the mall',
      desc: 'You need to go to the mall to get this job done'
    },
    {
      sno: 2,
      title: 'Goto the gym',
      desc: 'You need to go to the gym to get this job done'
    },
    {
      sno: 3,
      title: 'Goto the park',
      desc: 'You need to go to the park to get this job done'
    }
  ]);

  let appStyle = {
    padding: '0% 10% 0% 10%',
  }
  return (

    <BrowserRouter>
      <Header title="CustomTitle"></Header>
      <div style={appStyle}>
        <Routes>
          <Route path="/" element={<Todos todos={todos} onDelete={onDelete} addTodo={addTodo}></Todos>}>
          </Route>
          <Route exact path="/about" element={<About></About>} />
        </Routes>
      </div>
      <Footer></Footer>
    </BrowserRouter>

    // <div className="App" >
    //     <Header title="CustomTitle"></Header>
    //     <div style={appStyle}>
    //       <AddToDo addTodo={addTodo}></AddToDo>
    //       <Todos todos={todos} onDelete={onDelete}></Todos>
    //     </div>
    //     <Footer></Footer>
    // </div>
  );
}

export default App;
