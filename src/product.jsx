function  Product({ addToCart }) {
  const product = {
    id: 1,
    name: "Laptop",
    price: 50000,
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ₹{product.price}</p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default Product;