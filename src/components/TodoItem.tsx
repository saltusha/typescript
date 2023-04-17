import React from 'react'
import { ITodo } from './modules/type'

interface ITodoItem extends ITodo {
  toggleTodo: (id: number) => void
  removeTodo: (id: number) => void
}

const TodoItem: React.FC<ITodoItem> = (props) => {
  const { id, title, isDone, toggleTodo, removeTodo } = props
  return (
    <div>
      <input type="checkbox" checked={isDone} onChange={() => toggleTodo(id)} />
      {title}
      <button style={{ background: 'transparent', border: 'none', outline: 'none', color: 'red' }} onClick={() => removeTodo(id)}>X</button>
    </div>
  )
}

export { TodoItem }