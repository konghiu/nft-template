import React from "react";
import "./item.css";

const Item = (props) => {
     return (
          <div id="item">
               <div className="item__image">
                    <img src={props.item.image} alt="" />
               </div>
               <p className="item__title">
                    {props.item.name} #{props.item.id}
               </p>
               <div className="item__auth">
                    <div className="item__auth-image">
                         <img src={props.item.auth.image} alt="" />
                    </div>
                    <div className="item__auth-name">
                         <p>{props.item.auth.name}</p>
                         <p>creator</p>
                    </div>
                    <div className="item__auth-eth">
                         <p>{props.item.auth.ETH} ETH</p>
                         <p>Current Bit</p>
                    </div>
               </div>
               <div className="item__buttons">
                    <button className="item__buttons-placebid">
                         Place Bid
                    </button>
                    <p className="item__buttons-viewhistory">
                         <i className="fa-solid fa-arrow-rotate-left"></i>
                         View History
                    </p>
               </div>
          </div>
     );
};

export default Item;
