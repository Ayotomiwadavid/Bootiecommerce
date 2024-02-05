import React from "react";
import Rating from '@mui/material/Rating';

function Products(props) {
  return (
    <div className="productCard">
      <div className="cardUpperSide">
        <img src={props.image} />
        <div className="productCardOverLay">
          <span className="ProductLabel">new</span>
          <h3 className="productTitle">{props.title}</h3>
        </div>
      </div>
      <div className="lowerSide">
        <p className="productPrice">${props.price}</p>
        <Rating name="half-rating-read" 
        defaultValue={Number(props.rate)} 
        precision={0.5}
        style={{color: "gray"}}
        readOnly 
        />
      </div>
    </div>
  );
}

export default Products;
