// Third-party components & modules
import { createStore } from 'redux'

// Custom componenets & modules
import { todoReducer } from './reducers'

export const store = createStore(todoReducer)
