import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, addAny, reset } from './CounterSlice'

const Counter = () => {
  // State for custom counter increment
  const [value, setValue] = useState(5)

  // Global counter state
  const COUNT = useSelector((state) => state.counter.count)

  // Dispatcher for global counter state
  const DISPATCH = useDispatch()
  return (
    <>
      <h2>{COUNT}</h2>
      <button onClick={() => DISPATCH(increment())}>Increment</button>
      <button onClick={() => DISPATCH(decrement())}>Decrement</button>
      <button onClick={() => DISPATCH(reset())}>Reset</button>
      <br />
      <input
        type="number"
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => DISPATCH(addAny(value))}>Add by 5</button>
    </>
  )
}
export default Counter
