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
import Debug from "./debug";
import useLocalStorage from "./useLocalStorage";
import UseReducer from "./useReducer";
import UseMemo from "./useMemo";
import { AuthProvider } from "./AuthContext";
import Navbar from "./Navbar";
import Profile from "./Profile"
import ChatWindow from "./ChatWindow";
import Posts from "./useEffect"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import AbortController from "./AbortController"
import CheckoutWizard from "./checkoutWizard";


function Dashboard() {
  return <h1>Welcome to Dashboard!</h1>;
}

function Home() {
  return <h1>Home Page</h1>;
}


function App() {
  const [theme,setTheme]=useLocalStorage("theme","Light");

  // const [cart, setCart]=useState([]);
  // function addToCart(product){
  //   setCart ((prevCart)=>[...prevCart, product]);
  // }
  return (
    <CheckoutWizard/>
      // <AbortController/>
    //  <BrowserRouter>
    //   <AuthProvider>
    //     <Routes>
    //       <Route path="/" element={<Home />} />

    //       <Route path="/login" element={<Login />} />

    //       <Route
    //         path="/dashboard"
    //         element={
    //           <ProtectedRoute>
    //             <Dashboard />
    //           </ProtectedRoute>
    //         }
    //       />

    //       <Route
    //         path="*"
    //         element={<Navigate to="/" replace />}
    //       />
    //     </Routes>
    //   </AuthProvider>
    // </BrowserRouter>
  //   <>
  // {/* <FAQAccordion/>
  // <Login/>
  // <ProductList/>
  // <QuantitySelector/> 
  // <DebouncedSearch/> */}
  // {/* Theme */}
  //     <div
  //     style={{
  //       background: theme === "dark" ? "#000000" : "#fff",
  //       color: theme === "dark" ? "#fff" : "#000000",
  //       padding: "30px",
  //       minHeight: "200px"
  //     }}
  //   >
  //     <h2>Theme: {theme}</h2>

  //     <button
  //       onClick={() =>
  //         setTheme(theme === "light" ? "dark" : "light")
  //       }
  //     >
  //       Toggle Theme
  //     </button>
  //     <FetchUsers/>
  //     <TodoList/>
  //     <Debug/>
  //     <FAQAccordion/>
  //     <UseReducer/>
  //     <UseMemo/>
  //     <AuthProvider>
  //       <Navbar />
  //       <Profile />
  //     </AuthProvider>
  //     <ChatWindow/>
  //     <Posts userId={1}/>
  //   </div>
    

  // </>


    

  // //cart
  //   // <div>
  //   //   <h1>Shopping cart</h1>
  //   //   <Product addToCart={addToCart} />

  //   //   <Cart cart={cart} />
  //   // </div>
    )
}
export default App;
