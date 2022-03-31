import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter} from 'react-router-dom'
import { ProductProvider } from "./Context/product.jsx";
import { CartProvider } from "./Context/cart";
import { AuthProvider } from "./Context/authContext";
import { WishlistProvider } from "./Context/wishlistContext";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
    <CartProvider>
      <WishlistProvider>
    <ProductProvider>
    <App />
    </ProductProvider>
    </WishlistProvider>
    </CartProvider>
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
