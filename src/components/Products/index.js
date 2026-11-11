import React from "react"
import Header from "../Header"
import "./index.css"

const productsList = [
  {
    id: 1,
    name: "Men's Casual Shirt",
    price: 799,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=700&q=80",
    description: "Comfortable everyday wear",
  },
  {
    id: 2,
    name: "Women's Handbag",
    price: 1299,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=80",
    description: "A stylish bag for every day",
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 1899,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80",
    description: "Lightweight and comfortable",
  },
  {
    id: 4,
    name: "Classic Wrist Watch",
    price: 2499,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=700&q=80",
    description: "A simple, timeless design",
  },
  {
    id: 5,
    name: "Wireless Headphones",
    price: 1599,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80",
    description: "Enjoy your favourite music",
  },
  {
    id: 6,
    name: "Sunglasses",
    price: 599,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=80",
    description: "A smart look for sunny days",
  },
]

const Products = ({addToCart, cartCount}) => (
  <div className="products-page">
    <Header cartCount={cartCount} />
    <main className="products-content">
      <h1>Our Products</h1>
      <p className="products-subtitle">Find something you will love.</p>
      <div className="products-grid">
        {productsList.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-details">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <div className="product-bottom">
                <span className="product-price">₹{product.price.toLocaleString("en-IN")}</span>
                <button type="button" onClick={() => addToCart(product)} className="add-cart-button">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  </div>
)

export default Products
