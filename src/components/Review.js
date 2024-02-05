import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Rating from "@mui/material/Rating";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function Review() {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide className="swiperSlide">
        <div className="reviewCard">
          <h3 className="customerName">jenifer burns</h3>
          <Rating
            name="half-rating-read"
            defaultValue={4.5}
            precision={0.5}
            style={{
              color: "red",
              fontSize: "18px",
            }}
            readOnly
          />
          <p className="reviewMsg">
            <FormatQuoteIcon />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquipex ea commodo consequat.
            <FormatQuoteIcon />
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiperSlide">
        <div className="reviewCard">
          <h3 className="customerName">John Doe</h3>
          <Rating
            name="half-rating-read"
            defaultValue={3.5}
            precision={0.5}
            style={{
              color: "red",
              fontSize: "18px",
            }}
            readOnly
          />
          <p className="reviewMsg">
            <FormatQuoteIcon />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. ullamco
            laboris nisi ut
            <FormatQuoteIcon />
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiperSlide">
        <div className="reviewCard">
          <h3 className="customerName">jaden smith</h3>
          <Rating
            name="half-rating-read"
            defaultValue={5.0}
            precision={0.5}
            style={{
              color: "red",
              fontSize: "18px",
            }}
            readOnly
          />
          <p className="reviewMsg">
            <FormatQuoteIcon />
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam
            <FormatQuoteIcon />
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Review;
