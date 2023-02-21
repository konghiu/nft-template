import React from "react";
import Input from "../../../../component/input/Input";

const SignUp = () => {
     return (
          <div id="signup">
               <p className="signup__title">Or, sign up with your email</p>
               <form>
                    <Input
                         type="text"
                         label="Email"
                         placeholder="Enter your email"
                    />
                    <Input
                         type="text"
                         label="Username"
                         placeholder="Enter your username"
                    />
                    <Input
                         type="password"
                         label="Password"
                         placeholder="Enter your password"
                    />
                    <button className="signup__button-signup">Sign up</button>
               </form>
          </div>
     );
};

export default SignUp;
