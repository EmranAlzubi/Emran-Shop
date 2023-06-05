import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import CartPage from "./Pages/CartPage";
import Layout from "./Pages/Layout";
import ShopContextProvider from "./context/ShopContext";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "cart",
          element: <CartPage />,
        },
      ],
    },
  ]);

  return (
    <ShopContextProvider>
      <RouterProvider router={route} />
    </ShopContextProvider>
  );
}

export default App;


