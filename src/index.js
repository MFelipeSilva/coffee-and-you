import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { CartProvider } from "./hooks/useCart";

import { Header } from "./components/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <Header />
      <App />
    </CartProvider>
  </React.StrictMode>
);
reportWebVitals();
