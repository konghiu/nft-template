import React from "react";
import logo from "../../assets/profile/logo.svg";
import footer_json from "./footer.json";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
     return (
          <footer id="footer">
               <div id="footer__element">
                    <div className="footer__info">
                         <img src={logo} alt="this is logo" />
                         <p>
                              Lorem ipsum dolor amet consectetur adipiscing elit
                              do eiusmod tempor incididunt ut labore et dolore.
                         </p>
                         <div>
                              {footer_json.icons.map((icon) => (
                                   <Link key={icon.id}>
                                        <i className={icon.icon}></i>
                                   </Link>
                              ))}
                         </div>
                    </div>
                    <div className="footer__company">
                         <h3>Company</h3>
                         <ul>
                              {footer_json.company.map((url) => (
                                   <Link to={"/nft-template/"} key={url.id}>
                                        {url.title}
                                   </Link>
                              ))}
                         </ul>
                    </div>
                    <div className="footer__customer">
                         <h3>Customer</h3>
                         <ul>
                              {footer_json.customer.map((url) => (
                                   <Link to={"/nft-template/"} key={url.id}>
                                        {url.title}
                                   </Link>
                              ))}
                         </ul>
                    </div>
                    <div className="footer__subcribe">
                         <h3>Subcribe Now</h3>
                         <p>
                              Enter your email address for receiving valuable
                              newsletters.
                         </p>
                         <div className="footer__subcribe-input">
                              <input
                                   type="text"
                                   placeholder="Enter your email address"
                              ></input>
                              <i className="fa-solid fa-paper-plane"></i>
                         </div>
                    </div>
               </div>
          </footer>
     );
};

export default Footer;
