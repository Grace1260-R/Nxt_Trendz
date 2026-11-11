import React from "react"
import Header from "../Header"
import "./index.css"

const Cart = ({cartItems, removeFromCart, changeQuantity}) => {
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  return (
    <div className="cart-page">
      <Header cartCount={cartItems.reduce((total, item) => total + item.quantity, 0)} />
      <main className="cart-content">
        <h1>My Cart</h1>
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
              alt="empty cart"
              className="cart-image"
            />
            <p>Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="cart-items-list">
              {cartItems.map(item => (
                <div className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-info">
                    <h2>{item.name}</h2>
                    <p>₹{item.price.toLocaleString("en-IN")}</p>
                    <div className="quantity-controls">
                      <button type="button" onClick={() => changeQuantity(item.id, -1)}>-</button>
                      <span>{item.quantity}</span>
                      <button type="button" onClick={() => changeQuantity(item.id, 1)}>+</button>
                    </div>
                  </div>
                  <div className="cart-item-actions">
                    <strong>₹{(item.price * item.quantity).toLocaleString("en-IN")}</strong>
                    <button type="button" className="remove-button" onClick={() => removeFromCart(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-total">
              <h2>Total: ₹{totalAmount.toLocaleString("en-IN")}</h2>
              <p>{cartItems.reduce((total, item) => total + item.quantity, 0)} item(s) in your cart</p>
            </div>
          </>
        )}
      </main>
    </div>
  )
}

export default Cart
