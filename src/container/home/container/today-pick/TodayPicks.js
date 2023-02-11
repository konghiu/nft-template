import React from "react";
import items from "../../../../assets/auth/items";
import Item from "../../../../component/item/Item";
import "./todayPicks.css";

const TodayPicks = () => {
     return (
          <div id="todayPicks">
               <p className="home__component-title">Today's Picks</p>
               <div className="home__component-content todayPicks__content">
                    {items.map((item) => (
                         <Item item={item} key={item.id} />
                    ))}
               </div>
          </div>
     );
};

export default TodayPicks;
