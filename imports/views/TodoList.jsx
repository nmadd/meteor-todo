import React from 'react';
import Todos from '../collections/Todos';

const TodoList = ({todos}) => {
  function todoList() {
    return todos.map((todo, indx) => <li key={indx}>{todo.text}{deleteButton(todo._id)}</li>)
  }

  function deleteTodo(todoId) {
    Todos.remove({_id: todoId})
  }

  function deleteButton(todo) {
    return <button onClick={deleteTodo.bind(this, todo)}>X</button>
  }

  return (
    <ul>
      {todoList()}
    </ul>
  )
}

export default TodoList;
