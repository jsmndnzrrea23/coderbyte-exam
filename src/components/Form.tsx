// Write a ReactJS component that renders a form. The form should have a username and password input field.
// The user should be able to submit the form and be redirected to a different page if the credentials are valid.

import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Form = () => {
  const navigate = useNavigate()

  const fixedUser: { username: string; password: string } = {
    username: 'jess',
    password: 'password',
  }
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const isMatched = useMemo(() => {
    return fixedUser.username === username && fixedUser.password === password
  }, [fixedUser.username, fixedUser.password, username, password])

  return (
    <div className="mt-8">
      <h2 className="mb-8 text-lg font-semibold">Form</h2>
      <div className="flex gap-2">
        <label htmlFor="username" className="w-20">
          Username
        </label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="flex gap-2 mt-4">
        <label htmlFor="password" className="w-20">
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        onClick={() => navigate('/other-page')}
        disabled={!isMatched}
        className={`mt-4 px-4 py-2 rounded-md text-white
          ${!isMatched ? 'bg-gray-500 cursor-not-allowed' : 'bg-green-500'}  
        `}
      >
        Submit
      </button>
    </div>
  )
}

export default Form
