import React from "react";
import home_image from "../../assets/profile/home-image.svg";
import CoreFeatures from "./container/core-feature/CoreFeatures";
import LiveAuction from "./container/live-auction/LiveAuction";
import PopularCollection from "./container/popular-collection/PopularCollection";
import TodayPicks from "./container/today-pick/TodayPicks";
import TopArtists from "./container/top-artist/TopArtists";
import "./home.css";

const Home = () => {
     return (
          <section id="home">
               <div className="home__container">
                    <div>
                         <h1 className="home__title">
                              This is Template for NFT Marketplace and Web3
                              Platforms
                         </h1>
                         <p className="home__content">
                              Template for NFT, Token, and Web3 marketplace
                              projects, based on Tailwind CSS. Comes with all
                              the essential UI components and pages you need to
                              build an NFT marketplace or all sorts of Web3
                              platforms.
                         </p>
                         <div className="home__buttons">
                              <button className="home__buttons-explore">
                                   Explore now
                              </button>
                              <button className="home__buttons-upload">
                                   Upload Your Art
                              </button>
                         </div>
                    </div>
                    <div className="home__image">
                         <img src={home_image} alt="home banner" />
                    </div>
               </div>
               <div className="home__body">
                    <TopArtists />
                    <LiveAuction />
                    <TodayPicks />
                    <CoreFeatures />
                    <PopularCollection />
               </div>
          </section>
     );
};

export default Home;
