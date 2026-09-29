import { createBrowserRouter } from "react-router";
import SignUpLink from "../components/signUp/SignUpLink";
import SignUp from "../components/signUp/SignUp";
import Brands from "../components/brands/Brands";
import ProductList from "../components/products/ProductList";
import NavBar from "../components/navBar/NavBar";
import HomePage from "../components/HomePage";
// import ProductList from "../components/products/ProductList";
// import ProductDetails from "../components/products/ProductDetails";


export const router = createBrowserRouter([
    {
        path : "/",
        element : <HomePage/>
    },

    {
        path : "/SignUp",
        element : <SignUp/>
    },

    // {
    //     path : "/",
    //     element : <NavBar/>
    // },

    // {
    //     path : "/",
    //     element : <Brands/>
    // },

    {
        path: "/products",
        element: <ProductList />,
    },

    // {
    //     path: "/products/:id",
    //     element: <ProductDetails />,
    // },
    
])