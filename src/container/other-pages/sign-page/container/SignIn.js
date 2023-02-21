import React from "react";
import Input from "../../../../component/input/Input";
import "./sign-style.css";

const SignIn = () => {
     return (
          <div id="signin">
               <p className="signin__title">Or, sign in with your email</p>
               <form>
                    <Input
                         type="email"
                         label="Email"
                         placeholder="Enter your email"
                    />
                    <Input
                         type="password"
                         label="Password"
                         placeholder="Enter your password"
                    />
                    <label className="signin__checkinfo">
                         Keep me signed in
                         <input type="checkbox" />
                         <span className="signin__checkinfo-checkmark"></span>
                    </label>
                    <span className="signin__forgotpass">Forgot Password?</span>
                    <button className="signin__button-signin">Sign in</button>
               </form>
          </div>
     );
};

export default SignIn;
