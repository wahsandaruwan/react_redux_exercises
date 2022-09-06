// Inbuilt components & modules
import { useState, useEffect } from 'react'

// Third-party components & modules
import { useSelector, useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

// Custom components & modules
import Todo from './Todo'
import { addTodo, updateTodo } from './TodosSlice'
import { saveTodos } from '../../Helpers/StorageOperations'

const TodosList = ({ todoId }) => {
  // Temporary states for todo
  const [todo, setTodo] = useState('')
  const [todoIndex, setTodoIndex] = useState('')
  const [edit, setEdit] = useState(false)

  // Global state only for todos
  const TODOS = useSelector((state) => state.todos)

  // Dispatcher for todos
  const DISPATCH = useDispatch()

  // Store todo to local storage
  useEffect(() => {
    saveTodos(TODOS)
  }, [TODOS])

  // -----Main functions-----
  // Function to add a new todo
  const addNewTodo = () => {
    DISPATCH(
      addTodo({
        id: nanoid(),
        todoName: todo,
        dateTime: new Date().toLocaleString(),
      }),
    )
    resetAll()
  }

  // Function to update selected todo
  const updateSelectedTodo = () => {
    console.log('first')
    DISPATCH(updateTodo({ name: todo, index: todoIndex }))
    resetAll()
  }

  // -----Support functions-----
  // Function to select a todo to update
  const selectTodo = (todoId) => {
    TODOS.forEach((todo, index) => {
      if (todo.id === todoId) {
        setEdit(true)
        setTodo(todo.todoName)
        setTodoIndex(index)
      }
    })
  }

  // Function to reset all temporary states
  const resetAll = () => {
    setTodo('')
    setTodoIndex('')
    setEdit(false)
  }

  return (
    <>
      <div>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={() => (edit ? updateSelectedTodo() : addNewTodo())}>
          {edit ? 'Update' : 'Add'}
        </button>
        <button onClick={resetAll}>Reset</button>
      </div>

      {TODOS?.map((todo) => {
        const { id, todoName, dateTime } = todo
        return (
          <Todo
            key={id}
            id={id}
            todoName={todoName}
            dateTime={dateTime}
            selectFunc={selectTodo}
          />
        )
      })}
    </>
  )
}
export default TodosList
