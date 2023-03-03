import React from 'react';
import './App.css';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <TodoHeader />
      <TodoList />
    </div>
  );
}

export default App;
