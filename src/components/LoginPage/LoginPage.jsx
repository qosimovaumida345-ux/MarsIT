import { useState } from 'react'
import './LoginPage.css'

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!username || !password) {
      return
    }
    onLogin(username)
    setUsername('')
    setPassword('')
  }

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label>
          Username
          <input
            type="text"
            value={username}
            name="username"
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Enter your username"
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            name="password"
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter your password"
          />
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
  )
}

export default LoginPage
