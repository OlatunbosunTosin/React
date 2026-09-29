import React, { use, useState } from "react";
import {Link} from "react-router";
import Brands from "../brands/Brands";
import ProductList from "../products/ProductList";

const NavBar = () => {
   return (
    <div className="flex justify-center items-center bg-white h-[90px]">
        <img src="/icons/SHOP.CO.svg" 
                className="ml-10 w-40 h-40" 
            alt="logo"/>

         <div className="ml-10 flex justify-between gap-10">
          <Link to="/SignUp" className="ml-2">
                        Shop
          </Link>
          <Link to="/SignUp" className="ml-2">
                        On Sale
          </Link>
          <Link to="/ProductList" className="ml-2">
                        NewArrivals
          </Link>
          <Link to="/Brands" className="ml-2">
                        Brands
          </Link>
         </div>

         <div className="relative flex items-center ml-10 w-full max-w-[500px]">
            <img 
                src="/icons/find-icon.svg" 
                className="absolute left-4 w-5 h-5 opacity-40" 
                alt="search icon" 
            />
            <input
                type="text"
                name="search"
                placeholder="Search for products..."
                className="w-full h-12 bg-[#F0F0F0] rounded-full pl-12 pr-5 text-sm text-black placeholder-gray-400 focus:outline-none"              
            />
        </div>
          
        <div className="relative flex justify-between items-center ml-10 gap-5">
            <img 
                src="/icons/cart-icon.svg" 
                className="w-5 h-5" 
                alt="cart icon" 
            />
            <img 
                src="/icons/user-icon.svg" 
                className="w-5 h-5" 
                alt="user icon" 
            />
            
        </div>
    </div>

  );
};

export default NavBar;