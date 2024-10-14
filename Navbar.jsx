import React from 'react'
import { Link } from 'react-router-dom'

// navbar component
function Navbar({ toggleDarkMode }) {
  return (
    <nav className="navbar bg-base-100 shadow-md py-4 px-6">
      {/* left side - logo */}
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost normal-case text-2xl font-bold">
          TravelBuddy <span>👒</span>
        </Link>
      </div>

      {/* middle - nav links */}
      <div className="navbar-center flex justify-center">
        <ul className="menu menu-horizontal px-4 space-x-6">
          <li>
            <Link
              to="/"
              className="btn btn-outline border-2 border-primary text-primary hover:bg-primary hover:text-white"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/entries"
              className="btn btn-outline border-2 border-primary text-primary hover:bg-primary hover:text-white"
            >
              Entries
            </Link>
          </li>
          <li>
            <Link
              to="/buddies"
              className="btn btn-outline border-2 border-primary text-primary hover:bg-primary hover:text-white"
            >
              Buddies
            </Link>
          </li>
          <li>
            <button
              className="btn btn-outline border-2 border-primary text-primary hover:bg-primary hover:text-white"
              onClick={toggleDarkMode}
            >
              🌙 Dark Mode
            </button>
          </li>
        </ul>
      </div>

      {/* right side - empty for now */}
      <div className="navbar-end">
        {/* we can add something here later */}
      </div>
    </nav>
  )
}

export default Navbar