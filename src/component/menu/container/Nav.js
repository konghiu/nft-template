import React from "react";
import nav from "./nav.json";

const Nav = () => {
     return (
          <ul>
               {nav.map((nav) => (
                    <li key={nav.id}>{nav.title}</li>
               ))}
          </ul>
     );
};

export default Nav;
