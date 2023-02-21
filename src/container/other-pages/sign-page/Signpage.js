import React from "react";
import { Outlet } from "react-router-dom";
import Facebook from "../../../assets/icons/custom-icons/Facebook";
import Google from "../../../assets/icons/custom-icons/Google";
import Twitter from "../../../assets/icons/custom-icons/Twitter";
import "./signpage.css";

const Signpage = () => {
     return (
          <div id="sign">
               <div className="signpage">
                    <h1>Sign In Now</h1>
                    <p>Login to your account for a faster checkout.</p>
                    <div className="signpage__signin_up-faster">
                         <Google />
                         <Facebook />
                         <Twitter />
                    </div>
                    <Outlet />
                    <p className="signpage__change-sign">
                         Don't you have an account? <span>Sign up</span>
                    </p>
               </div>
          </div>
     );
};

export default Signpage;
