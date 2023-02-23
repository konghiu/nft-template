import React from "react";
import Slider from "react-slick";
import artists from "../../../../assets/auth/artists";
import Artist from "../../component/Artist";
import "./topArtists.css";

const settings = {
     arrows: false,
     dots: false,
     infinite: true,
     slidesToShow: 4,
     slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 3000,
     responsive: [
          {
               breakpoint: 1323,
               settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
               },
          },
          {
               breakpoint: 767,
               settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
               },
          },
          {
               breakpoint: 575,
               settings: {
                    slidesToShow: 2,
               },
          },
     ],
};

const TopArtists = () => {
     return (
          <div id="topArtist">
               <h1 className="home__component-title">Top Artists</h1>
               <Slider
                    className="home__component-content topArtist__artists"
                    {...settings}
               >
                    {artists.map((artist) => (
                         <Artist info={artist} key={artist.id} />
                    ))}
               </Slider>
          </div>
     );
};

export default TopArtists;
