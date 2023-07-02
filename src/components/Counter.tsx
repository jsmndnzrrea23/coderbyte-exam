// Write a ReactJS component that renders a counter. The counter should start at 0 and increment by 1 whenever the user clicks a button.

import { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0)

  return (
    <div className="mt-8">
      <h2 className="mb-8 text-lg font-semibold">Counter</h2>
      <h1>{counter}</h1>
      <button
        onClick={() => setCounter(counter + 1)}
        className="px-4 py-2 rounded-md bg-green-500 text-white"
      >
        Increment
      </button>
    </div>
  )
}

export default Counter
