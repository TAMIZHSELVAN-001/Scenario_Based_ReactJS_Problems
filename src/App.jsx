import { useState } from "react";
import FAQAccordion from "./FAQAccordion";
import Login from "./Login";
import ProductList from "./ProductList";
import { QuantitySelector } from "./QuantitySelector";
import Product from "./product";
import Cart from "./cart";
import DebouncedSearch from "./DebounceSearch";
import FetchUsers from "./fetchUsers";
import TodoList from "./TodoList";



function App() {

  // const [cart, setCart]=useState([]);
  // function addToCart(product){
  //   setCart ((prevCart)=>[...prevCart, product]);
  // }
  return (
    <>
  {/* <FAQAccordion/>
  <Login/>
  <ProductList/>
  <QuantitySelector/> 
  <DebouncedSearch/> */}
  <FetchUsers/>
  {/* <TodoList/> */}
  </>

  //cart
    // <div>
    //   <h1>Shopping cart</h1>
    //   <Product addToCart={addToCart} />

    //   <Cart cart={cart} />
    // </div>
    )
}
export default App;
