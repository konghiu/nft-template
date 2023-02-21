import React from "react";
import "./path-frame.css";

const PathFrame = (props) => {
     return (
          <div id="pathFrame">
               <span>Home</span>
               <span> / </span>
               <span>{props.href ? props.href : "..."}</span>
          </div>
     );
};

export default PathFrame;
