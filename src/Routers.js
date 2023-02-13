import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./component/footer/Footer";
import Home from "./container/home/Home";

const Routers = () => {
     return (
          <Router id="router">
               <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/nft-template" element={<Home />} />
                    <Route path="/nft-template/home" element={<Home />} />
               </Routes>
               <Footer />
          </Router>
     );
};

export default Routers;
