import React from "react";
import ReactDOM from "react-dom/client";
import "./App.scss";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShopPage from "./Pages/ShopPage.tsx";
import MainPage from "./Pages/MainPage.tsx";
import Product from "./components/ProductShowcase/Product.tsx";
import ContextProvider from "./components/context/ContextProvider.tsx";
import CartPage from "./Pages/CartPage.tsx";
import CheckoutPage from "./Pages/CheckoutPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <div>not found</div>,
  },
  {
    path: "/shop",
    element: <ShopPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/checkout",
    element: <CheckoutPage />,
  },
  {
    path: "/products/:productId",
    element: <Product />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
);
