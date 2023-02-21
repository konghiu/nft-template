import React from "react";
import elon_mask from "../../../../assets/profile/elon_mask.png";
import image_02 from "../../../../assets/profile/image-02.svg";
import image_03 from "../../../../assets/profile/image-03.svg";
import image_04 from "../../../../assets/profile/image-04.svg";
import image_05 from "../../../../assets/profile/image-05.svg";
import image_06 from "../../../../assets/profile/image-06.svg";
import image_07 from "../../../../assets/profile/image-07.svg";
import image_08 from "../../../../assets/profile/image-08.svg";
import Heart from "../../../../component/heart/Heart";
import "./popularCollection.css";

const PopularCollection = () => {
     return (
          <div id="popularCollection">
               <h3 className="home__component-title popularCollection__title">
                    Popular Collection
               </h3>
               <div className="home__component-content popularCollection__content">
                    <div className="popularCollection__content-left">
                         <div className="images">
                              <div>
                                   <img src={image_02} alt="" />
                              </div>
                              <div>
                                   <img src={image_03} alt="" />
                                   <img src={image_04} alt="" />
                              </div>
                         </div>
                         <div className="info">
                              <div className="info__title">
                                   <h1>Modern illustration</h1>
                              </div>
                              <div className="info_">
                                   <div className="info__image">
                                        <img src={elon_mask} alt="" />
                                   </div>
                                   <div className="info__auth">
                                        <p>conghieu</p>
                                        <p className="text__gray">creator</p>
                                   </div>
                              </div>
                              <Heart />
                         </div>
                    </div>
                    <div className="popularCollection__content-right">
                         <div className="images">
                              <div>
                                   <img src={image_05} alt="" />
                              </div>
                              <div>
                                   <img src={image_06} alt="" />
                                   <img src={image_07} alt="" />
                                   <img src={image_08} alt="" />
                              </div>
                         </div>
                         <div className="info">
                              <div className="info__title">
                                   <h1>Modern illustration</h1>
                              </div>
                              <div className="info_">
                                   <div className="info__image">
                                        <img src={elon_mask} alt="" />
                                   </div>
                                   <div className="info__auth">
                                        <p>conghieu</p>
                                        <p className="text__gray">creator</p>
                                   </div>
                              </div>
                              <Heart />
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default PopularCollection;
