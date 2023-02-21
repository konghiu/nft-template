import React from "react";
import { useNavigate } from "react-router-dom";
import Heart from "../heart/Heart";
import FootInfoAuth from "./component/FootInfoAuth";
import "./item.css";

const Item = (props) => {
     const navigate = useNavigate();

     return (
          <div id="item">
               <div className="item__image">
                    <span className="item__image-heart">
                         <Heart />
                    </span>
                    <img src={props.item.image} alt="" />
               </div>
               <p
                    className="item__title"
                    onClick={() => navigate("/nft-template/item-details")}
               >
                    {props.item.name} #{props.item.id}
               </p>
               <FootInfoAuth
                    item={props.item}
                    position="creater"
                    status="Cuurent Bit"
               />
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
