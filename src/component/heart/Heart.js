import React from "react";
import "./heart.css";

const Heart = (props) => {
     return (
          <div className="heart">
               <i className="fa-solid fa-heart"></i>
               <p>{"1.5k"}</p>
          </div>
     );
};

export default Heart;
