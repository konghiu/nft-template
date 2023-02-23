import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/profile/logo.svg";
import PathFrame from "../path frame/PathFrame";
import nav from "./nav.json";
import "./menu.css";

window.onscroll = () => {
     const menu = document.getElementById("menu");
     if (menu && window.pageYOffset >= 100) {
          menu.classList.add("menu-fixed");
     } else {
          menu.classList.remove("menu-fixed");
     }
};

const relativePath = {
     home: "Home",
     "explore-items": "Explore Items",
     community: "Community",
     support: "Support",
     "create-item": "Create item",
     "connect-wallet": "Connect wallet",
};

const Menu = () => {
     const location = useLocation();

     const [pathFrame, setPathFrame] = useState(
          relativePath[location.pathname.replace("/nft-template/", "")]
     );

     const handleOpenNav = () => {
          const nav = document.querySelector(".menu__nav");
          nav.classList.toggle("menu__nav-open");
     };

     useEffect(() => {
          setPathFrame((prev) => {
               let pathname = location.pathname.replace("/nft-template/", "");
               if (pathname === "") return prev;
               return relativePath[pathname];
          });
          console.log(window.outerWidth);
          if (window.innerWidth <= 1024) {
               document
                    .querySelector(".menu__nav")
                    .classList.toggle("menu__nav-open");
          }

          const positionY = window.pageYOffset;
          document.documentElement.scrollTop -= positionY;
     }, [location.pathname]);

     return (
          <React.Fragment>
               <div id="menu">
                    <div className="menu__container">
                         <div>
                              <img src={logo} alt="this is logo" />
                         </div>
                         <ul className="menu__nav">
                              {nav.map((nav) => (
                                   <li
                                        key={nav.id}
                                        style={
                                             nav.title === pathFrame
                                                  ? { color: "white" }
                                                  : null
                                        }
                                   >
                                        <Link
                                             to={
                                                  nav.to !== ""
                                                       ? "/nft-template/" +
                                                         nav.to
                                                       : location.pathname
                                             }
                                        >
                                             {nav.title}
                                        </Link>
                                        {nav["other-nav"].length > 0 && (
                                             <React.Fragment>
                                                  <i className="fa-solid fa-chevron-down"></i>
                                                  <ul className="menu__container-nav-nest-lv1">
                                                       {nav["other-nav"].map(
                                                            (nv) => (
                                                                 <li
                                                                      key={
                                                                           nv.id
                                                                      }
                                                                 >
                                                                      <Link
                                                                           to={
                                                                                "/nft-template/" +
                                                                                nv.to
                                                                           }
                                                                      >
                                                                           {
                                                                                nv.title
                                                                           }
                                                                      </Link>
                                                                 </li>
                                                            )
                                                       )}
                                                  </ul>
                                             </React.Fragment>
                                        )}
                                   </li>
                              ))}
                         </ul>
                         <div className="menu__container-tail">
                              <span className="menu__container-search">
                                   <i className="fa-solid fa-magnifying-glass"></i>
                                   <span className="menu__container-search-input">
                                        <input placeholder="Search here ..." />
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                   </span>
                              </span>
                              <span className="menu__container-connectwallet">
                                   <i className="fa-solid fa-wallet"></i>
                                   Wallet Connect
                              </span>
                              <span
                                   className="menu__container-bar"
                                   onClick={() => handleOpenNav()}
                              >
                                   <i className="fa-solid fa-bars"></i>
                              </span>
                         </div>
                    </div>
               </div>
               <React.Fragment>
                    {location.pathname.includes("sign") ||
                    location.pathname.includes("home") ||
                    location.pathname.replace("/nft-template", "") === "/" ||
                    location.pathname.replace("/nft-template", "") ===
                         "" ? null : (
                         <PathFrame href={pathFrame} />
                    )}
               </React.Fragment>
          </React.Fragment>
     );
};

export default Menu;
