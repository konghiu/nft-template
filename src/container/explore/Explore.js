import React from "react";
import items from "../../assets/auth/items";
import Item from "../../component/item/Item";
import "./explore.css";

const Explore = () => {
     return (
          <section id="explore">
               <div className="explore__options">
                    <div className="explore__options-left">
                         <button>All</button>
                         <button>Digital Art</button>
                         <button>Music</button>
                         <button>3D Illustraction</button>
                    </div>
                    <div className="explore__options-right">
                         <select className="form-control">
                              <option value="All Artworks">All Artworks</option>
                              <option value="Digital">Digital</option>
                              <option value="Illustraction">
                                   Illustraction
                              </option>
                         </select>
                         <select className="form-control">
                              <option value="Sort by">Sort by</option>
                              <option value="Top rate">Top rate</option>
                              <option value="Mid rate">Mid rate</option>
                              <option value="Low rate">Low rate</option>
                         </select>
                    </div>
               </div>
               <div className="explore__items">
                    {items.map((item) => (
                         <Item item={item} key={item.id} />
                    ))}
               </div>
          </section>
     );
};

export default Explore;
