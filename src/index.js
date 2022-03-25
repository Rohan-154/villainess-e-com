import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter} from 'react-router-dom'
import { ProductProvider } from "./Context/product.jsx";
import { CartProvider } from "./Context/cart";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <CartProvider>
    <ProductProvider>
    <App />
    </ProductProvider>
    </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
