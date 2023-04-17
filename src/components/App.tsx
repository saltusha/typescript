import React, { useState, useRef, useEffect } from 'react'
import { ITodo } from './modules/type'
import { TodoList } from './TodoList'

const App: React.FC = () => {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState<ITodo[]>([])

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)

  }

  const inputRef = useRef<HTMLInputElement>(null)

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter')
      AddItem()

  }

  const AddItem = () => {
    if (!value) return

    setTodos([...todos, {
      id: Date.now(),
      title: value,
      isDone: false
    }])
    setValue('')

  }


  const removeTodo = (id: number): void => {
    setTodos(todos.filter((i) => i.id !== id))

  }

  const toggleTodo = (id: number): void => {
    setTodos(todos.map((todo) => todo.id !== id ? todo : { ...todo, isDone: !todo.isDone }))

  }



  useEffect(() => {
    if (inputRef.current)
      inputRef.current?.focus()
  }, [])

  return (
    <div>
      <input onKeyDown={handleKeyDown} value={value} onChange={handleChange} ref={inputRef} />
      <button onClick={AddItem}>Add Todo</button>
      <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </div>
  )
}

export { App }