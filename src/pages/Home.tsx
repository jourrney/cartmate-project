import React from "react";
import { Layout, Button } from "antd";
import CustomHeader from "../components/Header";
import Sidebar from "../components/Sidebar";
import Banner from "../components/Banner";
import { FloatButton } from "antd";
import couponIcon from '../assets/img/home/coupon.png';
import furnituresIcon from '../assets/img/home/furnitures.png';
import liveIcon from '../assets/img/home/live.png';
import naturalIcon from '../assets/img/home/naturalIcon.png';
import discountIcon from '../assets/img/home/discount.png';
import HomeButton from "../components/HomeButton";

const Home = () => {
  return (
    <Layout>
      <CustomHeader></CustomHeader>
      <Banner></Banner>

       <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "100px",
          margin: "10px 0",
        }}
      >
        <HomeButton icon={couponIcon} label="쿠폰뽑기" />
        <HomeButton icon={furnituresIcon} label="베스트가전" />
        <HomeButton icon={discountIcon} label="슈퍼특가" />
        <HomeButton icon={liveIcon} label="쇼핑라이브" />
        <HomeButton icon={naturalIcon} label="신선식품" />
      </div>

      {/* <Sidebar></Sidebar> */}
    </Layout>
  );
};

export default Home;
