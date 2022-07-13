
import React from 'react'

import { Link, useLocation } from 'react-router-dom'

//Navbar is displayed on all of the pages the same way
function Navbar() {
  // const location = useLocation()

  return (
    <div className="navbar">
     <nav class ="flex justify-center space-x-4">
     
      <div className="links">
        <Link to="/" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Home</Link>
        <Link to="/logout" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Logout</Link>
        <Link to="/myposts" class="font-bol px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">My Posts</Link>
        {/* <Link to="/logout">Logout</Link> */}
        <Link to="/dashboard" class ="font-bold font-me px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Dashboard</Link>
      </div>
      </nav>
    </div>
  )
}

export default Navbar
