import React from "react";
import image_dt_01 from "../../../assets/profile/image_dt_01.png";
import elon_mask from "../../../assets/profile/elon_mask.png";
import Heart from "../../../component/heart/Heart";

import "./itemDetails.css";
import FootInfoAuth from "../../../component/item/component/FootInfoAuth";

const ItemDetails = () => {
     return (
          <div id="itemDetails">
               <div className="itemDetails__image">
                    <img src={image_dt_01} alt="" />
               </div>
               <div className="itemDetails__content">
                    <div className="itemDetails__content-title">
                         <h2>3d locker illustration</h2>
                         <Heart Heart="10k" />
                    </div>
                    <div className="itemDetails__content-auth">
                         <div>
                              <img src={elon_mask} alt="" />
                              <div className="itemDetails__content-auth-info">
                                   <p>@cong hieu</p>
                                   <p>Owned by</p>
                              </div>
                         </div>
                         <div>
                              <img src={elon_mask} alt="" />
                              <div className="itemDetails__content-auth-info">
                                   <p>@cong hieu</p>
                                   <p>Create by</p>
                              </div>
                         </div>
                    </div>
                    <p className="itemDetails__content-text">
                         Lorem ipsum dolor sit amet, consectetur adipiscing
                         elit. Sed sodales mi felis, pretium tincidunt lorem
                         varius ac. Curabitur mauris lacus, pretium vel neque
                         nec, blandit pharetra nulla.
                    </p>
                    <div className="itemDetails__content-describe">
                         <div>
                              <p>
                                   Artist: <span>Cong Hieu</span>
                              </p>
                              <p>
                                   Size: <span>4000x4000</span>
                              </p>
                              <p>
                                   Created on: <span>04 june, 2023</span>
                              </p>
                         </div>
                         <div>
                              <p>
                                   Current Bid: <span>4.89 ETH</span>
                              </p>
                              <div className="itemDetails__content-describe-timer">
                                   <span>05 : </span>
                                   <span>15 : </span>
                                   <span>07 : </span>
                                   <span>45</span>
                              </div>
                         </div>
                    </div>
                    <div className="itemDetails__content-info">
                         <div className="itemDetails__content-info-title">
                              <span>History</span>
                              <span>Bids</span>
                              <span>Details</span>
                         </div>
                         <div className="itemDetails__content-info-cast">
                              <FootInfoAuth
                                   item={{
                                        id: 143,
                                        name: "22-Bit Digital",
                                        code: 551,
                                        image: image_dt_01,
                                        date: new Date(),
                                        like: 0,
                                        auth: {
                                             id: 1,
                                             image: elon_mask,
                                             name: "@Thao_Ly",
                                             ETH: "46.00",
                                        },
                                   }}
                                   position="creater"
                                   status="Cuurent Bit"
                              />
                              <FootInfoAuth
                                   item={{
                                        id: 143,
                                        name: "22-Bit Digital",
                                        code: 551,
                                        image: image_dt_01,
                                        date: new Date(),
                                        like: 0,
                                        auth: {
                                             id: 1,
                                             image: elon_mask,
                                             name: "@Thao_Ly",
                                             ETH: "46.00",
                                        },
                                   }}
                                   position="creater"
                                   status="Cuurent Bit"
                              />
                              <FootInfoAuth
                                   item={{
                                        id: 143,
                                        name: "22-Bit Digital",
                                        code: 551,
                                        image: image_dt_01,
                                        date: new Date(),
                                        like: 0,
                                        auth: {
                                             id: 1,
                                             image: elon_mask,
                                             name: "@Thao_Ly",
                                             ETH: "46.00",
                                        },
                                   }}
                                   position="creater"
                                   status="Cuurent Bit"
                              />
                         </div>
                    </div>
                    <button className="itemDetails__content-info-placebid">
                         Place Bid
                    </button>
               </div>
          </div>
     );
};

export default ItemDetails;
