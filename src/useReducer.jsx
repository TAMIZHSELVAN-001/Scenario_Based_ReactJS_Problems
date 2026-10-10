import { useReducer } from "react";

const products = [
  { id: 1, name: "Apple", price: 30 },
  { id: 2, name: "Banana", price: 10 },
  { id: 3, name: "Orange", price: 20 },
];

const initialCart = [];

function cartReducer(cart, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = cart.find(
        (item) => item.id === action.product.id
      );

      if (existingItem) {
        return cart.map((item) =>
          item.id === action.product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...cart, { ...action.product, quantity: 1 }];
    }

    case "INCREASE": {
      return cart.map((item) =>
        item.id === action.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }

    case "DECREASE": {
      return cart
        .map((item) =>
          item.id === action.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);
    }

    case "REMOVE_ITEM": {
      return cart.filter((item) => item.id !== action.id);
    }

    case "CLEAR_CART": {
      return [];
    }

    default:
      return cart;
  }
}

export default function App() {
  const [cart, dispatch] = useReducer(
    cartReducer,
    initialCart
  );

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Shopping Cart</h1>

      <h2>Products</h2>

      {products.map((product) => (
        <div key={product.id} style={{ marginBottom: "12px" }}>
          {product.name} - ₹{product.price}{" "}
          <button
            onClick={() =>
              dispatch({ type: "ADD_ITEM", product })
            }
          >
            Add to Cart
          </button>
        </div>
      ))}

      <hr />

      <h2>My Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} style={{ marginBottom: "15px" }}>
            <p>
              {item.name} - ₹{item.price} × {item.quantity}
            </p>

            <button
              onClick={() =>
                dispatch({ type: "DECREASE", id: item.id })
              }
            >
              -
            </button>

            <span style={{ margin: "0 12px" }}>
              {item.quantity}
            </span>

            <button
              onClick={() =>
                dispatch({ type: "INCREASE", id: item.id })
              }
            >
              +
            </button>

            <button
              style={{ marginLeft: "10px" }}
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", id: item.id })
              }
            >
              Remove
            </button>
          </div>
        ))
      )}

      <h2>Total Price: ₹{totalPrice}</h2>

      <button onClick={() => dispatch({ type: "CLEAR_CART" })}>
        Clear Cart
      </button>
    </div>
  );
}
