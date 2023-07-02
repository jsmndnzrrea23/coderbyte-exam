import React from 'react'
import { Link } from 'react-router-dom'

const OtherPage = () => {
  return (
    <div>
      Welcome to my other page{' '}
      <span className="border-b-2 border-blue-400 cursor-pointer">
        <Link to="/">Back to home</Link>
      </span>
    </div>
  )
}

export default OtherPage
