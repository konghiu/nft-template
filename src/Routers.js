import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./component/footer/Footer";
import Menu from "./component/menu/Menu";
import Explore from "./container/explore/Explore";
import Home from "./container/home/Home";
import ConnectWallet from "./container/other-pages/connectWallet/ConnectWallet";
import CreateItem from "./container/other-pages/create-item/CreateItem";
import ItemDetails from "./container/other-pages/item-detail/ItemDetails";
import SignIn from "./container/other-pages/sign-page/container/SignIn";
import SignUp from "./container/other-pages/sign-page/container/SignUp";
import Signpage from "./container/other-pages/sign-page/Signpage";
import Support from "./container/support/Support";
import "./index.css";

const Routers = () => {
     return (
          <React.Fragment>
               <Menu />
               <Routes>
                    <Route path="/nft-template" element={<Home />} />
                    <Route path="/nft-template/home" element={<Home />} />
                    <Route
                         path="/nft-template/explore-items"
                         element={<Explore />}
                    />
                    <Route path="/nft-template/support" element={<Support />} />
                    <Route
                         path="/nft-template/item-details"
                         element={<ItemDetails />}
                    />
                    <Route
                         path="/nft-template/create-item"
                         element={<CreateItem />}
                    />
                    <Route path="/nft-template/sign" element={<Signpage />}>
                         <Route path="sign-up" element={<SignUp />} />
                         <Route path="sign-in" element={<SignIn />} />
                    </Route>
                    <Route
                         path="/nft-template/connect-wallet"
                         element={<ConnectWallet />}
                    />
               </Routes>
               <Footer />
          </React.Fragment>
     );
};

export default Routers;
