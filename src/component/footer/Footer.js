import React from "react";
import logo from "../../assets/profile/logo.svg";
import "./footer.css";

const Footer = () => {
     return (
          <footer id="footer">
               <div className="footer__info">
                    <img src={logo} alt="this is logo" />
                    <p>
                         Lorem ipsum dolor amet consectetur adipiscing elit do
                         eiusmod tempor incididunt ut labore et dolore.
                    </p>
               </div>
               <div className="footer__company">
                    <h3>Company</h3>
               </div>
               <div className="footer__customer">
                    <h3>Customer</h3>
               </div>
               <div className="footer__subcribe">
                    <h3>Subcribe Now</h3>
               </div>
          </footer>
     );
};

export default Footer;
