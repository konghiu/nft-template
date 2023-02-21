import React from "react";
import "./footInfoAuth.css";

const FootInfoAuth = (props) => {
     return (
          <div className="infoAuth">
               <div className="infoAuth-image">
                    <img src={props.item.auth.image} alt="" />
               </div>
               <div className="infoAuth-name">
                    <p>{props.item.auth.name}</p>
                    <p>{props.position}</p>
               </div>
               <div className="infoAuth-eth">
                    <p>{props.item.auth.ETH} ETH</p>
                    <p>{props.status}</p>
               </div>
          </div>
     );
};

export default FootInfoAuth;
