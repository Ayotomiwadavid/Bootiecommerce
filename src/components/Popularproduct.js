import React from "react";
import heroeSectionShoe from "../images/heroeSectionShoe.png";
import { Router, Route, Link } from "react-router-dom";

function Popularproduct(props) {
  return (
    <div className="popularProductCont">
      <div className="popular_ProductCard spanColumn">
        <img src="https://i.imgur.com/sC0ztOB.jpeg" />
        <p className="popularshopNow">shop now</p>
      </div>
      <div className="secondContainerDiv">
        <div className="popular_ProductCard">
          <img src="https://i.imgur.com/R3iobJA.jpeg" />
          <p className="popularshopNow">shop now</p>
        </div>
        <div className="popular_ProductCard">
          <img src="https://i.imgur.com/mp3rUty.jpeg" />
          <p className="popularshopNow">shop now</p>
        </div>
      </div>
    </div>
  );
}

export default Popularproduct;
