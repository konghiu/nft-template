import React from "react";
import "./input.css";

const Textarea = (props) => {
     return (
          <div className="textarea__component">
               <label>{props.label}</label>
               <textarea type={props.type} placeholder={props.placeholder} />
          </div>
     );
};

export default Textarea;
