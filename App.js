import React from "react";
import Todo from "./Components/Todo";
import './App.css';


const App = () => {
  return (
  <div className="App">
    <h1>My Todos</h1>
   <Todo text ='Learn React'/>
   <Todo text='Master React'/>
   <Todo text ='Explore the full React Course'/>

   
  </div>
  );
};
export default App;
