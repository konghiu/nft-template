import React from "react";
import "./input.css";

const Input = (props) => {
     return (
          <div className="input__component">
               <label>{props.label}</label>
               <input type={props.type} placeholder={props.placeholder} />
          </div>
     );
};

export default Input;
