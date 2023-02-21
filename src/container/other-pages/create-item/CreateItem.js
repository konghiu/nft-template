import React from "react";
import Input from "../../../component/input/Input";
import Textarea from "../../../component/input/Textarea";
import "./create-item.css";

const CreateItem = () => {
     return (
          <div id="createItem">
               <div className="createItem__file">
                    <div>
                         <input
                              type="file"
                              id="up_file"
                              accept="image/png, image/jpeg"
                         />
                         <label
                              className="createItem__file-choose"
                              htmlFor="up_file"
                         >
                              <i className="fa-solid fa-image"></i>
                              <h3 className="createItem__file-choose-text-1">
                                   Drop files here
                              </h3>
                              <p className="createItem__file-choose-text-2">
                                   PNG, JPG, GIF, WEBP or MP4. Max 200mb.
                              </p>
                              <p className="createItem__file-choose-text-2">
                                   Or choose a file
                              </p>
                              <p className="createItem__file-choose-button">
                                   Browse
                              </p>
                         </label>
                    </div>
               </div>
               <div className="createItem__info">
                    <div className="createItem__info-basic">
                         <Input
                              type="text"
                              label="Title"
                              placeholder="Enter item title"
                         />
                         <Textarea
                              type="text"
                              label="Description (optional)"
                              placeholder="Type item description"
                         />
                         <Input
                              type="text"
                              label="Price"
                              placeholder="10 ETH"
                         />
                         <Input
                              type="text"
                              label="Royalties"
                              placeholder="5%"
                         />
                         <Input
                              type="text"
                              label="Size"
                              placeholder="e.g. 'size"
                         />
                    </div>
                    <div className="createItem__info-timeAuctions">
                         <h3>Time Auctions (optional)</h3>
                         <Input
                              type="date"
                              label="Starting date"
                              placeholder=""
                         />
                         <Input
                              type="time"
                              label="Expiration date"
                              placeholder=""
                         />
                    </div>
                    <button>Create Item</button>
               </div>
          </div>
     );
};

export default CreateItem;
