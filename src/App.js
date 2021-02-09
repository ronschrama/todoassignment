import './App.css';
import { useState } from 'react';
import styled from 'styled-components';
import Form from './components/Form';
import TodoList from './components/TodoList';

const Appcontainer = styled.div`
  display: column;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 32px;
  width: 400px;
  background-color: #EDF2F7;
  border-radius: 4px;
  padding: 16px;
`

const TodoH1 = styled.h1`
  text-align: center;
  margin-bottom: 0.8em;
`

function App() {
  const [todos, setTodos] = useState([]);

  function toggleTodo(id) {
    const todoDone = todos.map(item => {
      if (item.id === id) {
        item.completed = !item.completed;
        return item;
      }
      return item;
    })
    setTodos(todoDone);
  }

  function deleteTodo(id) {
    const newTodos = todos.filter(item => item.id !== id);
    setTodos(newTodos);
  }

  return (
    <Appcontainer>
      <header className='App-header'>
        <TodoH1>Todo list</TodoH1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </Appcontainer>
  );
}

export default App;
