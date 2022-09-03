import { todos } from './states'

export const todoReducer = (state = todos, action) => {
  if (action.type === 'ADD') {
  } else if (action.type === 'EDIT') {
  } else if (action.type === 'DELETE') {
  } else {
    return state
  }
}
