import { createStore } from 'redux'

// Reducer function - A function that updates the store
const reducerFunction = (state = { counter: 0 }, action) => {
  // Limitations in reducer function
  // It should be a synchronous function
  // Shouldn't mutate the original state (Always should be a copy of original state)

  let { counter } = state
  if (action.type === 'IN') {
    return { counter: counter + 1 }
  } else if (action.type === 'DE') {
    return { counter: counter - 1 }
  } else if (action.type === 'ADD') {
    return { counter: counter + action.payload }
  } else if (action.type === 'ADA') {
    return { counter: counter + action.payload }
  } else{
    return state
  }
}

const store = createStore(reducerFunction)

export default store
