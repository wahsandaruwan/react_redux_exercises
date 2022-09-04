import { createSlice } from '@reduxjs/toolkit'

// Intial state for the slice
const initialState = {
  count: 0,
}

// Slice for the counter
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    addAny: (state, action) => {
      state.count += action.payload
    },
    reset: (state) => {
      state.count = 0
    },
  },
})

// Export particular actions to use in other places
export const { increment, decrement, addAny, reset } = counterSlice.actions

// Export whole reducer to use in the store
export default counterSlice.reducer
