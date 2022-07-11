import React, { useState } from "react";
import * as authService from "../../services/authService"

const SignupPage = ({handleSignupOrLogin}) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    // event.perventDefault();

    const submitUser = {
      email: email,
      username: username,
      password: password,
    };

    console.log(submitUser)

    await authService.signup(submitUser)
    handleSignupOrLogin()
  };

  return <div>
    {/* email input */}
    <input
      type="text"
      value={email}
      placeholder="email"
      onChange={(event) => {
        setEmail(event.target.value);
      }}
    />
    {/* username input */}
    <input
      type="text"
      value={username}
      placeholder="username"
      onChange={(event) => {
        setUsername(event.target.value);
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
    <button  onClick={(event) => handleSubmit(event)}>
      create account
    </button>
  </div>;

};

export default SignupPage;
