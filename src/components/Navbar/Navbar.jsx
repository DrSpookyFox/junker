
import React from 'react'

import { Link, useLocation } from 'react-router-dom'

//Navbar is displayed on all of the pages the same way
function Navbar() {
  // const location = useLocation()

  return (
    <div className="navbar">
     
      {/* <div className="toggleButton">
        <button></button>
      </div> */}
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/logout">Logout</Link>
        <Link to="/myposts">My Posts</Link>
        {/* <Link to="/logout">Logout</Link> */}
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </div>
  )
}

export default Navbar
