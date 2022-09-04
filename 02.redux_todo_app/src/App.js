// Third-party components & modules
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// Custom componenets & modules
import Todo from './Components/Todo'
import { addTodo, updateTodo, deleteTodo } from './Redux/actions'
import { saveTodos } from './Helpers/LocalStorageOperations'

const App = () => {
  // States of todos
  const [todo, setTodo] = useState('')
  const [todoIndex, setTodoIndex] = useState('')
  const [edit, setEdit] = useState(false)

  // Redux variables
  const TODOS = useSelector((state) => state)
  const DISPATCH = useDispatch()

  // Store todo to local storage
  useEffect(() => {
    saveTodos(TODOS)
  }, [TODOS])

  // -----Main functions-----
  // Add new todo function
  const addNewTodo = () => {
    DISPATCH(
      addTodo({
        id: Date.now(),
        todoName: todo,
        dateTime: new Date().toLocaleString(),
      }),
    )
    clearAll()
  }

  // Update selected todo function
  const updateSelectedTodo = () => {
    DISPATCH(updateTodo(todo, todoIndex))
    clearAll()
  }

  // Delete todo function
  const deleteSelectedTodo = (todoId) => {
    DISPATCH(deleteTodo(todoId))
  }

  // -----Support functions-----
  // Start edit todo function
  const editSelectedTodo = (todoId) => {
    TODOS.forEach((todo, index) => {
      if (todo.id === todoId) {
        setEdit(true)
        setTodo(todo.todoName)
        setTodoIndex(index)
      }
    })
  }

  // Reset function
  const clearAll = () => {
    setTodo('')
    setTodoIndex('')
    setEdit(false)
  }

  return (
    <>
      <h1>Todo App</h1>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={() => (edit ? updateSelectedTodo() : addNewTodo())}>
        {edit ? 'Update' : 'Add'}
      </button>
      <button onClick={clearAll}>Reset</button>
      <br />
      <br />
      {TODOS?.map((todo, index) => {
        const { id, todoName, dateTime } = todo
        return (
          <Todo
            key={Math.random()}
            id={id}
            todoName={todoName}
            dateTime={dateTime}
            editFunc={editSelectedTodo}
            deleteFunc={deleteSelectedTodo}
          />
        )
      })}
    </>
  )
}

export default App
