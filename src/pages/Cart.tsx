import React, { useState } from "react";
import { Layout, Button } from "antd";
import CustomHeader from "../components/Header";
import Sidebar from "../components/Sidebar";
import CheckBox from "../components/CheckBox";

const Cart = () => {
  //   const [items, setItems] = useState([false, false, false]); // 3개 상품 체크 여부

  type Item = {
    id: number;
    name: string;
    price: number;
    image: string;
    checked: boolean;
  };

  const [items, setItems] = useState<Item[]>([
    { id: 1, name: "상품1", price: 10000, image: "", checked: false },
    { id: 2, name: "상품2", price: 20000, image: "", checked: false },
    { id: 3, name: "상품3", price: 30000, image: "", checked: false },
  ]);

  // 배열의 모든 요소가 true일때만 true를 반환함
  const allChecked = items.every((item) => item.checked);

  // checked가 true이면 모든 item을 check로 만들고 false면 unCheck
  const handleAllChange = (checked: boolean) => {
    setItems(items.map((item) => ({ ...item, checked })));
  };

  const handleItemChange = (index: number, checked: boolean) => {
    const updated = [...items];
    updated[index] = { ...updated[index], checked };
    setItems(updated);
  };

  return (
    <Layout>
      {/* 전체선택 */}
      <CheckBox
        checked={allChecked}
        label="전체선택"
        onChange={handleAllChange}
      ></CheckBox>

      {/* 개별 선택 */}
      {items.map((item, i) => (
        <div key={item.id} style={{ display: "flex", alignItems: "center" }}>
          <CheckBox
            checked={item.checked}
            label={item.name}
            onChange={(checked) => handleItemChange(i, checked)}
          />
         <div style={{ display: "flex", alignItems: "center", gap: 16, marginLeft: 16 }}>
    <p style={{ margin: 0 }}>{item.name}</p>
    <p style={{ margin: 0 }}>{item.price.toLocaleString()}원</p>
    <img src={item.image} alt={item.name} width={80} />
  </div>
        </div>
      ))}
    </Layout>
  );
};

export default Cart;
