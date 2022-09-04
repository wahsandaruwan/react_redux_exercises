import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Features/Counter/CounterSlice'

// Store object
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})
