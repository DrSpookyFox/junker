import React, {useState} from "react"
// import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import {Routes, Route} from "react-router-dom"
import LoginPage from "./components/LoginPage/LoginPage"
import SignupPage from "./components/SignupPage/SignupPage"
import * as authService from "./services/authService"
import MyPosts from "./components/MyPosts/MyPosts";

function App() {
  const [user, setUser] = useState(null)

  const handleLogout = () => {
    authService.logout()
    setUser(null)
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  return (
    <div className="App">
      <Routes>
      {/* What routes do we need? */}
      {/* Signup */}
        <Route exact path="/signup" element={user ? <Dashboard user={user} />  : <SignupPage handleSignupOrLogin={handleSignupOrLogin} />} />
      {/* Login */}
        <Route exact path="/login" element={user ? <Dashboard user={user} />  : <LoginPage handleSignupOrLogin={handleSignupOrLogin} />} />
      {/* Dashboard */}
        <Route exact path="/dashboard" element={<Dashboard user={user}/>} />
      {/* Create Post */}
      {/* MyPosts */}
        <Route exact path="/myposts" element={user && <MyPosts posts={user.posts}/>} />
      </Routes>
    </div>
  );
}

export default App;