// Load todos from local storage
export const loadTodos = () => {
  let todos = JSON.parse(localStorage.getItem('todoList'))
  if (todos) {
    return todos
  } else {
    return []
  }
}

// Save todos to local storage
export const saveTodos = (todos) => {
  localStorage.setItem('todoList', JSON.stringify(todos))
}
