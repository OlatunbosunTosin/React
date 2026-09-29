import { createBrowserRouter } from "react-router";
import SignUpLink from "../components/signUp/SignUpLink";
import SignUp from "../components/signUp/SignUp";
import Brands from "../components/brands/Brands";
import NavBar from "../components/navBar/NavBar";
import Hero from "./hero/Hero";
import ProductList from "./products/ProductList";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SignUpLink />  
      <NavBar />       
      <Hero/>
      <Brands />
      <ProductList /> 
    </div>
  );
};

export default HomePage;