import styled from 'styled-components';

const TodoListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 32px;
  padding: 0px 8px;
  margin-bottom: 12px;
  background-color: #CBD5E0;
  border-radius: 4px;
  font-size: 1.2em
`

const DoneButton = styled.button`
  padding: 0px 4px;
  color: #C53030;
  font-weight: bold;
`

export default function Todo({ todoItem, toggleTodo, deleteTodo }) {

  return (
    <TodoListItem>
      <div
        style={{ textDecoration: todoItem.completed ? "line-through" : "" }}
        onClick={() => toggleTodo(todoItem.id)} >
        {todoItem.todoText}
      </div>
      <DoneButton onClick={() => deleteTodo(todoItem.id)}>x</DoneButton>
    </TodoListItem>
  )
}
