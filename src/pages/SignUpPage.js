import React from 'react'

export default function SignUpPage() {
  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <h1>Sign Up</h1>
      <label htmlFor="username">username</label>
      <input id="username" />
      <label htmlFor="email">email</label>
      <input id="email"/>
      <label htmlFor="password">password</label>
      <input id="password" type="password" />
      <label htmlFor="password-repeat">password repeat</label>
      <input id="password-repeat" type="password" />
      <button disabled >Sign Up</button>
    </div>
  ) 
}
