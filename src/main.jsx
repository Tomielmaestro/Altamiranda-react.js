import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ContextProductProvider from "./context/ContextProduct";
import CartContextProvider from "./context/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProductProvider>
      <CartContextProvider>
        <BrowserRouter>
          <App></App>
        </BrowserRouter>
      </CartContextProvider>
    </ContextProductProvider>
  </React.StrictMode>
);
