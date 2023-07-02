// Write a ReactJS component that renders a calculator. The calculator should be able to perform basic arithmetic operations.

import { useState } from 'react'

const Calculator = () => {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [operator, setOperator] = useState('+')
  const [result, setResult] = useState(0)

  const handleCalculate = () => {
    let calculatedResult

    switch (operator) {
      case '+':
        calculatedResult = num1 + num2
        break
      case '-':
        calculatedResult = num1 - num2
        break
      case '*':
        calculatedResult = num1 * num2
        break
      case '%':
        calculatedResult = num1 % num2
        break
      default:
        calculatedResult = 0
        break
    }

    setResult(calculatedResult)
  }

  return (
    <div className="mt-8">
      <h2 className="mb-8 text-lg font-semibold">Calculator</h2>
      <div className="flex gap-2">
        <label htmlFor="num1" className="w-20">
          Number 1
        </label>
        <input
          id="num1"
          type="text"
          value={num1}
          onChange={(e) => setNum1(Number(e.target.value))}
        />
      </div>
      <div className="flex gap-2 mt-4">
        <label htmlFor="operator" className="w-20">
          Number 2
        </label>
        <select
          name="operator"
          id="operator"
          value={operator}
          onChange={(e) => setOperator(e.target.value)}
          className="w-20"
        >
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">x</option>
          <option value="%">%</option>
        </select>
      </div>
      <div className="flex gap-2 mt-4">
        <label htmlFor="num2" className="w-20">
          Number 2
        </label>
        <input
          id="num2"
          type="text"
          value={num2}
          onChange={(e) => setNum2(Number(e.target.value))}
        />
      </div>
      <button
        onClick={() => handleCalculate()}
        className="mt-4 px-4 py-2 rounded-md text-white bg-green-500"
      >
        Submit
      </button>
      <p className="mt-4 font-semibold">Result: {result}</p>
    </div>
  )
}

export default Calculator
