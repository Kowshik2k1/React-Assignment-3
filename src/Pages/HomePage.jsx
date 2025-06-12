import React from 'react';
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="home-wrap">
      <div className="left-content px-2 w-100">
        <h1>Your feet deserve the best</h1>
        <p className="desc">Your feet deserve the best and we're here to help you with our shoes. Your feet deserve the best and we're here to help you with our shoes.</p>
        <div className="btn-wrap">
          <p><Link to="/shop"><button className="shop-now">Shop Now</button></Link></p>
          <p><button className="category">Category</button></p>
        </div>
        <p>Also Available On</p>
        <p className="icons"><a href="https://www.flipkart.com/" rel="noreferrer" target="_blank"><img src="/flipkart-icon.png" width="50" alt="Flipkart Icon" /></a><a href="https://www.amazon.in/" rel="noreferrer" target="_blank"><img src="/amazon-icon.png" width="50" alt="Amazon Icon"/></a></p>
      </div>
      <div className="image-content w-100">
        <img src="/nike-image.avif" width="500px" alt="Shoe" />
      </div>
    </div>
  )
}

export default HomePage