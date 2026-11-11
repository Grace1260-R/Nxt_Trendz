import React, {useEffect, useState} from "react"
import {Switch, Route, Redirect} from "react-router-dom"
import LoginForm from "./components/LoginForm"
import Home from "./components/Home"
import Products from "./components/Products"
import Cart from "./components/Cart"

const ProtectedRoute = ({component: Component, render: renderComponent, ...rest}) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("jwt_token") !== null ? (
        renderComponent ? renderComponent(props) : <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
)

const PublicRoute = ({component: Component, ...rest}) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("jwt_token") === null ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
)

const App = () => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("nxt_trendz_cart")
    return savedCart ? JSON.parse(savedCart) : []
  })

  useEffect(() => {
    localStorage.setItem("nxt_trendz_cart", JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = product => {
    setCartItems(currentItems => {
      const existingItem = currentItems.find(item => item.id === product.id)
      if (existingItem) {
        return currentItems.map(item =>
          item.id === product.id ? {...item, quantity: item.quantity + 1} : item
        )
      }
      return [...currentItems, {...product, quantity: 1}]
    })
  }

  const removeFromCart = productId => {
    setCartItems(currentItems => currentItems.filter(item => item.id !== productId))
  }

  const changeQuantity = (productId, amount) => {
    setCartItems(currentItems =>
      currentItems
        .map(item =>
          item.id === productId ? {...item, quantity: item.quantity + amount} : item
        )
        .filter(item => item.quantity > 0)
    )
  }

  return (
    <Switch>
      <PublicRoute exact path="/login" component={LoginForm} />
      <ProtectedRoute
        exact
        path="/"
        render={props => (
          <Home
            {...props}
            cartCount={cartItems.reduce((total, item) => total + item.quantity, 0)}
          />
        )}
      />
      <ProtectedRoute
        exact
        path="/products"
        render={props => <Products
          {...props}
          addToCart={addToCart}
          cartCount={cartItems.reduce((total, item) => total + item.quantity, 0)}
        />}
      />
      <ProtectedRoute
        exact
        path="/cart"
        render={props => (
          <Cart
            {...props}
            cartItems={cartItems}
            removeFromCart={removeFromCart}
            changeQuantity={changeQuantity}
          />
        )}
      />
      <Redirect to="/login" />
    </Switch>
  )
}

export default App
