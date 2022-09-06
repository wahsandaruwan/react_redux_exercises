// Third-party components & modules
import { createSlice } from '@reduxjs/toolkit'

// Custom components & modules
import { loadTodos } from '../../Helpers/StorageOperations'

// Slice for todos
const todosSlice = createSlice({
  name: 'todos',
  initialState: loadTodos(),
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload)
    },
    updateTodo: (state, action) => {
      const { name, index } = action.payload
      if (index !== -1) {
        state[index] = {
          ...state[index],
          todoName: name,
          dateTime: new Date().toLocaleString(),
        }
      }
      return state
    },
    deleteTodo: (state, action) => {
      state = state.filter((todo) => todo.id !== action.payload)
      return state
    },
  },
})

// Export actions
export const { addTodo, updateTodo, deleteTodo } = todosSlice.actions

// Export whole reducer
export default todosSlice.reducer
