import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./container/home/Home";

const Routers = () => {
     return (
          <Router id="router">
               <Routes>
                    <Route path="" element={<Home />} />
               </Routes>
          </Router>
     );
};

export default Routers;
