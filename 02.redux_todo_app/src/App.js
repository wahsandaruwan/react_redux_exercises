import { useState, useEffect } from 'react'
import Todo from './Components/Todo'

// Load todos from local storage
const loadTodos = () => {
  let todos = JSON.parse(localStorage.getItem('todoList'))
  if (todos) {
    return todos
  } else {
    return []
  }
}

const App = () => {
  // States of todos
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState(loadTodos())
  const [edit, setEdit] = useState(false)
  const [editTodoId, setEditTodoId] = useState('')

  // Store todo to local storage
  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todos))
  }, [todos])

  // Add todo function
  const addTodo = () => {
    // Add new todo to the todos array
    setTodos((oldTodos) => [
      ...oldTodos,
      { todoName: todo, dateTime: new Date().toLocaleString() },
    ])

    setTodo('')
  }

  // Delete todo function
  const deleteTodo = (id) => {
    setTodos(
      todos.filter((value, index) => {
        return index !== id
      }),
    )
  }

  // Edit todo function
  const editTodo = (id) => {
    todos.forEach((value, index) => {
      if (index === id) {
        setEdit(true)
        setEditTodoId(id)
        setTodo(value.todoName)
      }
    })
  }

  // Update todo function
  const updateTodo = () => {
    const newTodoList = todos.map((value, index) => {
      if (index === editTodoId) {
        console.log('first')
        return {
          ...value,
          todoName: todo,
          dateTime: new Date().toLocaleString(),
        }
      }
      return value
    })

    setTodos(newTodoList)
    setEdit(false)
    setEditTodoId('')
    setTodo('')
  }

  return (
    <>
      <h1>Todo App</h1>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={edit ? updateTodo : addTodo}>
        {edit ? 'Edit' : 'Add'}
      </button>
      <br />
      <br />
      {todos?.map((todo, index) => {
        const { todoName, dateTime } = todo
        return (
          <Todo
            key={Math.random()}
            id={index}
            todoName={todoName}
            dateTime={dateTime}
            editFunc={editTodo}
            deleteFunc={deleteTodo}
          />
        )
      })}
    </>
  )
}

export default App
