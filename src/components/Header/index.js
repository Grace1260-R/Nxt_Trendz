import React from "react"
import {Link, useHistory} from "react-router-dom"
import "./index.css"

const Header = ({cartCount = 0}) => {
  const history = useHistory()

  const logout = () => {
    localStorage.removeItem("jwt_token")
    history.replace("/login")
  }

  return (
    <nav className="navbar">
      <Link to="/" className="logo-link">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="nav-logo"
        />
      </Link>
      <div className="nav-links">
        <Link to="/" className="nav-link">
          <span>Home</span>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="nav home"
          />
        </Link>
        <Link to="/products" className="nav-link">
          <span>Products</span>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav products"
          />
        </Link>
        <Link to="/cart" className="nav-link">
          <span>Cart {cartCount > 0 ? `(${cartCount})` : ""}</span>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="nav cart"
          />
        </Link>
        <button type="button" className="logout-button" onClick={logout}>
          <span>Logout</span>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="nav logout"
          />
        </button>
      </div>
    </nav>
  )
}

export default Header