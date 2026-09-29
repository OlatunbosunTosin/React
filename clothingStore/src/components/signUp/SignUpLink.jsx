import React, { use, useState } from "react";
import {Link} from "react-router";
import SignUp from "./SignUp";

const SignUpLink = () => {
   return (
        <main className="bg-black text-white h-[40px] flex justify-center items-center relative px-4">
          <div className="text-sm sm:text-base ">
            Sign up and get 20% off to your first order.  
            <Link to="/SignUp" className="underline ml-2">
              Sign Up Now
            </Link>
          </div>
          <img src="/icons/close-icon.svg" 
                className="absolute right-4 sm:right-10 w-4 h-4 cursor-pointer" 
            alt="close image"/>
        </main>

  );
};

export default SignUpLink;