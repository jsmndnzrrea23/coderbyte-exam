import React, { useState } from 'react'
import Counter from '../components/Counter'
import List from '../components/List'
import Navbar from '../components/Navbar'
import Form from '../components/Form'
import Calculator from '../components/Calculator'
import DragDrop from '../components/DragDrop'

type ExamCategory =
  | 'COUNTER'
  | 'LIST_OF_ITEMS'
  | 'NAVBAR'
  | 'FORM_VALIDATION'
  | 'CALCULATOR'
  | 'DRAG_AND_DROP'

const HomePage = () => {
  const [examCategory, setExamCategory] = useState<ExamCategory>('COUNTER')
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col gap-8">
      <div className="flex gap-1">
        <button
          onClick={() => setExamCategory('COUNTER')}
          className={`px-4 py-2 rounded-md text-white ${
            examCategory === 'COUNTER' ? 'bg-blue-600' : 'bg-blue-400'
          }`}
        >
          Counter
        </button>
        <button
          onClick={() => setExamCategory('LIST_OF_ITEMS')}
          className={`px-4 py-2 rounded-md text-white ${
            examCategory === 'LIST_OF_ITEMS' ? 'bg-blue-600' : 'bg-blue-400'
          }`}
        >
          List of items
        </button>
        <button
          onClick={() => setExamCategory('NAVBAR')}
          className={`px-4 py-2 rounded-md text-white ${
            examCategory === 'NAVBAR' ? 'bg-blue-600' : 'bg-blue-400'
          }`}
        >
          Navbar
        </button>
        <button
          onClick={() => setExamCategory('FORM_VALIDATION')}
          className={`px-4 py-2 rounded-md text-white ${
            examCategory === 'FORM_VALIDATION' ? 'bg-blue-600' : 'bg-blue-400'
          }`}
        >
          Form validation
        </button>
        <button
          onClick={() => setExamCategory('CALCULATOR')}
          className={`px-4 py-2 rounded-md text-white ${
            examCategory === 'CALCULATOR' ? 'bg-blue-600' : 'bg-blue-400'
          }`}
        >
          Calculator
        </button>
        <button
          onClick={() => setExamCategory('DRAG_AND_DROP')}
          className={`px-4 py-2 rounded-md text-white ${
            examCategory === 'DRAG_AND_DROP' ? 'bg-blue-600' : 'bg-blue-400'
          }`}
        >
          Drag & Drop
        </button>
      </div>

      {examCategory === 'COUNTER' && <Counter />}
      {examCategory === 'LIST_OF_ITEMS' && <List />}
      {examCategory === 'NAVBAR' && <Navbar />}
      {examCategory === 'FORM_VALIDATION' && <Form />}
      {examCategory === 'CALCULATOR' && <Calculator />}
      {examCategory === 'DRAG_AND_DROP' && <DragDrop />}
    </div>
  )
}

export default HomePage
