const Todo = ({ id, todoName, dateTime, editFunc, deleteFunc }) => {
  return (
    <>
      <div>
        <p>{todoName}</p>
        <p>{dateTime}</p>
        <button onClick={() => editFunc(id)}>Edit</button>
        <button onClick={() => deleteFunc(id)}>Delete</button>
      </div>
    </>
  )
}

export default Todo
