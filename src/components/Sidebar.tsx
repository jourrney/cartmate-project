import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: '1',
    icon: <MailOutlined />,
    label: '패션잡화',
    children: [
      { key: '11', label: '주얼리' },
      { key: '12', label: '여성의류' },
      { key: '13', label: '남성의류' },
      { key: '14', label: '어린이패션' },
    ],
  },
  {
    key: '2',
    icon: <AppstoreOutlined />,
    label: 'PC/전자기기',
    children: [
      { key: '21', label: '데스크탑' },
      { key: '22', label: '태블릿' },
      { key: '22', label: '모니터' },
      {
        key: '24',
        label: '휴대폰',
        children: [
          { key: '241', label: '아이폰' },
          { key: '242', label: '삼성' },
          { key: '243', label: '그 외' },
        ],
      },
    ],
  },
  {
    key: '3',
    icon: <SettingOutlined />,
    label: '생활용품',
    children: [
      { key: '31', label: '욕실용품' },
      { key: '32', label: '세탁용품' },
      { key: '33', label: '주방용품' },
      { key: '34', label: '그외용품' },
    ],
  },
];

interface LevelKeysProps {
  key?: string;
  children?: LevelKeysProps[];
}

const getLevelKeys = (items1: LevelKeysProps[]) => {
  const key: Record<string, number> = {};
  const func = (items2: LevelKeysProps[], level = 1) => {
    items2.forEach((item) => {
      if (item.key) {
        key[item.key] = level;
      }
      if (item.children) {
        func(item.children, level + 1);
      }
    });
  };
  func(items1);
  return key;
};

const levelKeys = getLevelKeys(items as LevelKeysProps[]);

const Sidebar: React.FC = () => {
  const [stateOpenKeys, setStateOpenKeys] = useState(['2', '23']);

  const onOpenChange: MenuProps['onOpenChange'] = (openKeys) => {
    const currentOpenKey = openKeys.find((key) => stateOpenKeys.indexOf(key) === -1);
    // open
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);

      setStateOpenKeys(
        openKeys
          // remove repeat key
          .filter((_, index) => index !== repeatIndex)
          // remove current level all child
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey]),
      );
    } else {
      // close
      setStateOpenKeys(openKeys);
    }
  };

  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={['231']}
      openKeys={stateOpenKeys}
      onOpenChange={onOpenChange}
      style={{ width: 256 }}
      items={items}
    />
  );
};

export default Sidebar;