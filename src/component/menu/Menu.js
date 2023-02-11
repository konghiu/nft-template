import React from "react";
import logo from "../../assets/profile/logo.svg";
import Nav from "./container/Nav";
import "./menu.css";

window.onscroll = () => {
     const menu = document.getElementById("menu");
     if (menu && window.pageYOffset >= 100) {
          menu.classList.add("menu-fixed");
     } else {
          menu.classList.remove("menu-fixed");
     }
};

const Menu = () => {
     return (
          <div id="menu">
               <div className="menu__container">
                    <div>
                         <img src={logo} alt="this is logo" />
                    </div>
                    <Nav />
                    <div>
                         <span className="menu__container-search">
                              <i className="fa-solid fa-magnifying-glass"></i>
                         </span>
                         <span className="menu__container-connectwallet">
                              <i className="fa-solid fa-wallet"></i>
                              Wallet Connect
                         </span>
                    </div>
               </div>
          </div>
     );
};

export default Menu;
