// Write a ReactJS component that renders a navigation bar with links to different pages in your application.

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="mt-8">
      <h2 className="mb-8 text-lg font-semibold">Navigation</h2>
      <nav>
        <ul>
          <li>
            <Link to="/" />
            Home
          </li>
          <li>
            <Link to="/other-page">Other page</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
