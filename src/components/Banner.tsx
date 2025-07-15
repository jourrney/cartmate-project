import React from "react";
import { Carousel } from "antd";
import banner1 from "../assets/img/home/banner1.jpg";
import banner2 from "../assets/img/home/banner2.png";
import banner3 from "../assets/img/home/banner3.jpg";
import banner4 from "../assets/img/home/banner4.png";


const contentStyle: React.CSSProperties = {
  height: "350px",
  color: "#fff",
  lineHeight: "200px",
  textAlign: "center",
  background: "#364d79",
};

const bannerWrapperStyle: React.CSSProperties = {
  width: "100%",
  margin: "40px auto",
  boxShadow: "0 8px 16px rgba(0,0,0,0.4)",
  overflow: "hidden",
  backgroundColor: "#fff",
};

const Banner = () => {
  return (
    <div style={bannerWrapperStyle}>
      <Carousel autoplay>
        <div>
          <img
            src={banner1}
            alt="배너1"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          ></img>
        </div>
        <div>
          <img
            src={banner2}
            alt="배너2"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          ></img>
        </div>
        <div>
          <img
            src={banner3}
            alt="배너3"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          ></img>
        </div>
        <div>
          <img
            src={banner4}
            alt="배너4"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          ></img>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
