import React from "react";
import "./artist.css";

const Artist = (props) => {
     return (
          <div className="artist">
               <div className="artist__image">
                    <img src={props.info.image} alt="avatar artist" />
               </div>
               <div className="artist__name_eth">
                    <p className="artist__name">{props.info.name}</p>
                    <p className="artist__eth">{props.info.ETH} ETH</p>
               </div>
          </div>
     );
};

export default Artist;
