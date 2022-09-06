import { configureStore } from '@reduxjs/toolkit'
import todosReducer from '../Features/TodosList/TodosSlice'

// Store object
export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
})
