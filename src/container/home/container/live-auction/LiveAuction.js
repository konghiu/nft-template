import React from "react";
import items from "../../../../assets/auth/items";
import Item from "../../../../component/item/Item";
import "./liveAuction.css";

const LiveAuction = () => {
     return (
          <div id="liveAuction">
               <h1 className="home__component-title">Live Auction</h1>
               <div className="home__component-content liveAuction__content">
                    {items.slice(0, 4).map((item) => (
                         <Item item={item} key={item.id} />
                    ))}
               </div>
          </div>
     );
};

export default LiveAuction;
