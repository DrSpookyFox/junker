import React, { useState } from "react";
import * as authService from "../../services/authService"

const LoginPage = ({handleSignupOrLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    // event.preventDefault();

    const submitLogin = {
      email: email,
      pw: password,
    };
    
    await authService.login(submitLogin).then(() => handleSignupOrLogin())
    // await authService.login(submitLogin).then(() => console.log('were good!'))
    // authService.login(submitLogin)


  };

  return <div >
    {/* username input */}
    <input
      type="text"
      value={email}
      placeholder="email"
      onChange={(event) => {
        setEmail(event.target.value);
      }}
    />
    {/* password input */}
    <input
      type="text"
      value={password}
      placeholder="password"
      onChange={(event) => {
        setPassword(event.target.value);
      }}
    />
    <button onClick={(event) => handleSubmit(event)}>
      create post
    </button>
  </div>;

};

export default LoginPage;
