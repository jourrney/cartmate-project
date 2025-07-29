import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import logo from "../assets/shopping-store.png";
import { Flex, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    label: "카테고리",
    key: "SubMenu1",
    icon: <ShopOutlined />,
    children: [
      {
        type: "group",
        label: "패션잡화",
        children: [
          { label: "주얼리", key: "setting:1" },
          { label: "여성의류", key: "setting:2" },
          { label: "남성의류", key: "setting:3" },
        ],
      },
      {
        type: "group",
        label: "PC/전자기기",
        children: [
          { label: "노트북", key: "setting:4" },
          { label: "모니터", key: "setting:5" },
          { label: "태블릿", key: "setting:6" },
        ],
      },
      {
        type: "group",
        label: "생활용품",
        children: [
          { label: "욕실용품", key: "setting:7" },
          { label: "세탁용품", key: "setting:8" },
        ],
      },
    ],
  },
  {
    label: "마이쇼핑",
    key: "SubMenu2",
    icon: <UserOutlined />,
    children: [
      { label: "마이쇼핑 홈", key: "setting:9" },
      { label: "찜한 스토어", key: "setting:10" },
      { label: "리뷰 작성", key: "setting:11" },
    ],
  },
  {
    label: "장바구니",
    key: "cart",
    icon: <ShoppingCartOutlined />,
  },
];

const CustomHeader = () => {
  const [current, setCurrent] = useState("mail");
  const navigate = useNavigate();

  // const onClick: MenuProps["onClick"] = (e) => {
  //   console.log("click ", e);
  //   setCurrent(e.key);
  // };
  const cartOnClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);

    if (e.key === "cart") {
      navigate("/cart"); // 장바구니 페이지로만 이동
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between", // 좌우 정렬
        alignItems: "center",
        padding: "0 50px",
        background: "#fff",
        height: "64px",
        borderBottom: "1px solid #f0f0f0",
      }}
    >
      {/* 왼쪽: 로고 + 페이지명 */}
      <Link to="/" style={{ textDecoration: "none", color: "navy" }}>
        <div
          style={{ display: "flex", alignItems: "center", marginLeft: "-10px" }}
        >
          <img
            src={logo}
            alt="logo"
            style={{ width: "32px", marginRight: "10px" }}
          />
          <h2 style={{ margin: 0 }}>CartMate</h2>
        </div>
      </Link>

      <Flex style={{ marginRight: "380px", width: "800px" }}>
        <Input.Search placeholder="상품명 혹은 브랜드 입력" variant="filled" />
      </Flex>

      {/* 오른쪽: 메뉴 */}
      <Menu
        onClick={cartOnClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
    </div>
  );
};

export default CustomHeader;
