import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const App = () => {
  // State
  const [value, setValue] = useState(0)

  // Redux variables
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  // Functions
  const increment = () => dispatch({ type: 'IN' })

  const decrement = () => dispatch({ type: 'DE' })

  const addBy = () => dispatch({ type: 'ADD', payload: 5 })

  const addAny = () => dispatch({ type: 'ADA', payload: value })

  return (
    <>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addBy}>Add by 5</button>
      <br />
      <input type="text" onChange={(e) => setValue(parseInt(e.target.value))} />
      <br />
      <button onClick={addAny}>Add Any</button>
    </>
  )
}

export default App
