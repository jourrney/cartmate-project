// src/components/HomeButton.tsx
import React from 'react';
import { Button } from 'antd';

interface HomeButtonProps {
  icon: string;
  label: string;
  alt?: string;
}

const HomeButton: React.FC<HomeButtonProps> = ({ icon, label, alt }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Button
        type="primary"
        shape="circle"
        style={{ backgroundColor: "#FFFF", width: "60px", height: "60px" }}
      >
        <img
          src={icon}
          alt={alt || label}
          style={{
            width: "40px",
            height: "40px",
            objectFit: "contain",
          }}
        />
      </Button>
      <span style={{ marginTop: "8px" }}>{label}</span>
    </div>
  );
};

export default HomeButton;
