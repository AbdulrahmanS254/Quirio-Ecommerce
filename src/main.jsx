import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App.jsx";

// Supports weights 100-900 [Main Text font]
import "@fontsource-variable/dm-sans";
// Supports weights 200-800 [Brand Font]
import "@fontsource-variable/plus-jakarta-sans";

import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home/Home.jsx";
import Products from "./pages/Products/Products.jsx";
import ProductDetails from "./pages/ProductDetails/ProductDetails.jsx";
import Admin from "./pages/Admin/Admin.jsx";
import Create from "./pages/Create/Create.jsx";
import Login from "./pages/Login/Login.jsx";
import Cart from "./pages/Cart/Cart.jsx";

import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/products",
                element: <Products />,
            },
            {
                path: "/product/:id",
                element: <ProductDetails />,
            },
            {
                path: "/admin",
                element: <Admin />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/create",
                element: <Create />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
