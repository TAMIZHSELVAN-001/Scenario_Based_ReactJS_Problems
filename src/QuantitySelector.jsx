import { useState } from "react";

export function QuantitySelector() {
  const [counts, setCounts] = useState({});

  const products = [
    { id: 1, name: "Apple", quantity: 4 },
    { id: 2, name: "Mango", quantity: 5 },
    { id: 3, name: "Orange", quantity: 2 },
  ];

  function increment(product) {
    setCounts((prev) => {
      const currentCount = prev[product.id] || 0;

      if (currentCount >= product.quantity) {
        return prev;
      }

      return {
        ...prev,
        [product.id]: currentCount + 1,
      };
    });
  }

  function decrement(product) {
    setCounts((prev) => {
      const currentCount = prev[product.id] || 0;

      if (currentCount <= 0) {
        return prev;
      }

      return {
        ...prev,
        [product.id]: currentCount - 1,
      };
    });
  }

  return (
    <>
      <h1>Quantity Selector</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>

          <button onClick={() => decrement(product)}>
            -
          </button>

          <span>{counts[product.id] || 0}</span>

          <button onClick={() => increment(product)}>
            +
          </button>

          <p>Available: {product.quantity}</p>
        </div>
      ))}
    </>
  );
} 