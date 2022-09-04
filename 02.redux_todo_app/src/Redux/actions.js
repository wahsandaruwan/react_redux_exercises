// Add todo action
export const addTodo = (todo) => {
  return {
    type: 'ADD',
    payload: todo,
  }
}

// Update todo action
export const updateTodo = (todo, todoIndex) => {
  return {
    type: 'UPDATE',
    payload: { name: todo, index: todoIndex },
  }
}

// Delete todo action
export const deleteTodo = (todoId) => {
  return {
    type: 'DELETE',
    payload: todoId,
  }
}
