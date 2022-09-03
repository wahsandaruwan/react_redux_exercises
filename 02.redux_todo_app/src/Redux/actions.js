export const addTodo(todo){
    return {
        type: "ADD",
        payload: todo
    }
}

export const editTodo(todo){
    return {
        type: "EDIT",
        payload: todo
    }
}

export const deleteTodo(todoId){
    return {
        type: "DELETE",
        payload: todoId
    }
}