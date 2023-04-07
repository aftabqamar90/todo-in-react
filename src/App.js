import './App.css';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import Todos from './MyComponents/Todos';
import React, { useState } from 'react';
function App() {

  const onDelete=(todo)=>{
    console.log("I am on delete of todo",todo);
    setTodos(todos.filter((e)=>{
        return e!==todo;
      }));
   }
  
  let [todos,setTodos] = useState([
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
  let appStyle={
    padding: '0% 10% 0% 10%', 
  }
  return (
    <div className="App" >
      <Header title="CustomTitle"></Header>
      <div style={appStyle}>
       <Todos todos={todos} onDelete={onDelete}></Todos>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
