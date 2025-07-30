import React from 'react';
import { Checkbox } from 'antd';
// import type { CheckboxProps } from 'antd';

interface CheckboxProps {
    checked: boolean;
    label: string;
    onChange: (cheked: boolean) => void;
}

// 리액트 컴포넌트는 항상 props 객체 하나를 인자로 받아야 {}
const CheckBox: React.FC<CheckboxProps> = ({ checked, label, onChange }) => {
  return (
    <Checkbox
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
    >
      {label}
    </Checkbox>
  );
};


export default CheckBox;