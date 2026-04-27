import React, { useState } from 'react'

export default function SignUpPage() {
  const [disabled, setDisabled] = useState(true)
  const [passwordVal, setPasswordVal] = useState("")
  const [passwordRepeatVal, setPasswordRepeatVal] = useState("")

  const handleChange = (event) => {
    if (event.target.id === "password") {
      setPasswordVal(event.target.value)
      setDisabled(event.target.value !== passwordRepeatVal)
    }
    else if (event.target.id === "password-repeat") {
      setPasswordRepeatVal(event.target.value)
      setDisabled(event.target.value !== passwordVal)
    }
  }

  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <h1>Sign Up</h1>
      <label htmlFor="username">username</label>
      <input id="username" />
      <label htmlFor="email">email</label>
      <input id="email"/>
      <label htmlFor="password">password</label>
      <input id="password" type="password" onChange={handleChange} />
      <label htmlFor="password-repeat">password repeat</label>
      <input id="password-repeat" type="password" onChange={handleChange} />
      <button disabled={disabled} >Sign Up</button>
    </div>
  ) 
}
