import { useState } from 'react'
export function Counter() {
  const [counter, setCounter] = useState(0)
  function increment() {
    setCounter(counter + 1)
    console.log('Incrementing')
  }
  function decrement() {
    if (counter > 0) {
      console.log('Decrementing')
      setCounter(counter - 1)
    } else {
      alert('Cannot Decrement')
    }
  }
  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={increment}>
        Increment
      </button>
      <button type="button" onClick={decrement}>
        Decrement
      </button>
    </div>
  )
}
