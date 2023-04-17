import React from 'react'
import { ITodo } from './modules/type'
import { TodoItem } from './TodoItem'

interface ITodoList {
  items: ITodo[] // массив объектов 
  removeTodo: (id: number) => void
  toggleTodo: (id: number) => void
}

const TodoList: React.FC<ITodoList> = (props) => {
  const { items, removeTodo, toggleTodo } = props
  return (
    <div>
      {items.map((i) => <TodoItem key={i.id} removeTodo={removeTodo} toggleTodo={toggleTodo}  {...i} />)}
    </div>
  )
}

export { TodoList }