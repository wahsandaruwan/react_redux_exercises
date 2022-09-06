// Third-party components & modules
import { useDispatch } from 'react-redux'

// Custom components & modules
import { deleteTodo } from './TodosSlice'

const Todo = ({ id, todoName, dateTime, selectFunc }) => {
  // Dispatcher for todos
  const DISPATCH = useDispatch()

  return (
    <>
      <div>
        <h3>{todoName}</h3>
        <p>{dateTime}</p>
        <button onClick={() => selectFunc(id)}>Edit</button>
        <button onClick={() => DISPATCH(deleteTodo(id))}>Delete</button>
      </div>
    </>
  )
}
export default Todo
