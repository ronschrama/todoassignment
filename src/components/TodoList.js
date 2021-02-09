import React from 'react'
import Todo from './Todo';


export default function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul style={{ marginTop: '24px' }}>
      {todos ?
        todos.map(todoItem => {
          return <Todo
            key={todoItem.id}
            todoItem={todoItem}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        })
        : null}
    </ul>
  )
}
