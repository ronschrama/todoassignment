import { useState } from 'react';
import styled from 'styled-components';

const InputField = styled.input`
  width: 320px;
  height: 26px;
  margin-right: 8px;
`

const SubmitButton = styled.input`
  height: 32px; 
  padding: 5px;
`

export default function Form({ todos, setTodos }) {
  const [input, setInput] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    // if (!input) return;
    let newTodo = { id: new Date().getTime(), todoText: input, completed: false };
    setTodos([
      ...todos,
      newTodo
    ]);
    setInput('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        type='text'
        placeholder='Add new todo'
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <SubmitButton
        type='submit'
        value='Add todo'
      />
    </form>
  )
}
