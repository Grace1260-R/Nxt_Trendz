import React from "react"
import Header from "../Header"
import "./index.css"

const Home = ({cartCount = 0}) => (
  <div className="home-page">
    <Header cartCount={cartCount} />
    <div className="home-content">
      <div className="home-text">
        <h1>Clothes That Get You Noticed</h1>
        <p>
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Nxt Trendz brings you styles that make you feel
          confident.
        </p>
        <button type="button">Shop Now</button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
        className="home-image"
      />
    </div>
  </div>
)

export default Home