import React, { useEffect, useState } from "react";
import ProductCard from "components/ProductCard/ProductCard"

function ShopNow() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <div
        className="d-flex my-5 flex-wrap gap-3 justify-content-center justify-content-xl-start site-container"
        id="products"
      >
        {products.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
    </div>
  );
}

export default ShopNow;
