function Cart({ cart }) {
  const total = cart.reduce(
    (sum, product) => sum + product.price,
    0
  );

  return (
    <div>
      <h2>Cart</h2>

      <p>Items: {cart.length}</p>

      <h3>Total: ₹{total}</h3>
    </div>
  );
}

export default Cart;