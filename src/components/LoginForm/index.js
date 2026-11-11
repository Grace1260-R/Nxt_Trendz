import React, {useState} from "react"
import {useHistory, Redirect} from "react-router-dom"
import "./index.css"

const LoginForm = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errorMsg, setErrorMsg] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const history = useHistory()
  const jwtToken = localStorage.getItem("jwt_token")

  if (jwtToken !== null) {
    return <Redirect to="/" />
  }

  const submitForm = async event => {
    event.preventDefault()
    setErrorMsg("")
    setIsLoading(true)

    const userDetails = {username, password}
    const url = "https://apis.ccbp.in/login"
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    }

    try {
      const response = await fetch(url, options)
      const data = await response.json()

      if (response.ok) {
        localStorage.setItem("jwt_token", data.jwt_token)
        history.replace("/")
      } else {
        setErrorMsg(data.error_msg)
      }
    } catch (error) {
      setErrorMsg("Something went wrong. Please try again.")
    }

    setIsLoading(false)
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="login-logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="login-image"
        />
        <form className="login-form" onSubmit={submitForm}>
          <label htmlFor="username">USERNAME</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={event => setUsername(event.target.value)}
            placeholder="Username"
          />
          <label htmlFor="password">PASSWORD</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
            placeholder="Password"
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </button>
          {errorMsg !== "" && <p className="error-message">*{errorMsg}</p>}
        </form>
      </div>
    </div>
  )
}

export default LoginForm