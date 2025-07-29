import React from "react";
import { Layout, Button } from "antd";
import CustomHeader from "../components/Header";
import Sidebar from "../components/Sidebar";
import Banner from "../components/Banner";
import { FloatButton } from "antd";
import couponIcon from "../assets/img/home/coupon.png";
import furnituresIcon from "../assets/img/home/furnitures.png";
import liveIcon from "../assets/img/home/live.png";
import naturalIcon from "../assets/img/home/naturalIcon.png";
import discountIcon from "../assets/img/home/discount.png";
import HomeButton from "../components/HomeButton";
import CardThing from "../components/Card";
import item1Img from "../assets/img/item/item1.jpg"
import item2Img from "../assets/img/item/item2jpg.jpg"
import item3Img from "../assets/img/item/item.3jpg.jpg"
import item4Img from "../assets/img/item/item4.png"
import item5Img from "../assets/img/item/item5.png"
import item6Img from "../assets/img/item/item6.png"

const Home = () => {
  const cardData = [
    {
      image: item1Img,
      title: "런닝화",
      description: "잘 달려짐",
      link: "https://naver.com",
    },
    {
      image: item2Img,
      title: "초경량 양산",
      description: "무더위 필수템",
      link: "https://google.com",
    },
    {
      image: item3Img,
      title: "여성용 우비",
      description: "장마기간에 필수",
      link: "https://shopping.naver.com/ns/home",
    },
    {
      image: item4Img,
      title: "포근포근 스너글",
      description: "온가족 향기 지킴이",
      link: "https://shopping.naver.com/ns/home",
    },
    {
      image: item5Img,
      title: "크리넥스 가습 마스크",
      description: "가습 기능으로 더 촉촉하게",
      link: "https://shopping.naver.com/ns/home",
    },
    {
      image:item6Img,
      title: "히말라야 핑크솔트 치약",
      description: "핑크솔트로 개운함을 더해",
      link: "https://shopping.naver.com/ns/home",
    },
  ];

  return (
    <Layout>
      <Banner></Banner>

      {/* 홈 버튼 */}
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

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          // gap: "100px",
          marginTop: "20px"
        }}
      >
        <h2 style={{ color: "#7346F3", fontWeight: 1000 }}>오늘의 행사</h2>
        <h2 style={{ marginLeft: "5px" }}>놓치지 마세요!</h2>
      </div>

      {/* 홈카드 */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          margin: "30px",
        }}
      >
        {cardData.map((card, index) => (
          <CardThing
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            link={card.link}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
