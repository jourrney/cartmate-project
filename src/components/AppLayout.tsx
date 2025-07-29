import React from 'react';
import CustomHeader from "../components/Header";
import Sidebar from './Sidebar'; // 사이드바 컴포넌트

const AppLayout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* 헤더 */}
      <header style={{ height: '64px', borderBottom: '1px solid #f0f0f0' }}>
        <CustomHeader />
      </header>

      {/* 헤더 아래 사이드바 + 메인 영역 */}
      <div style={{ display: 'flex', flex: 1 }}>
        <aside style={{ width: '256px', borderRight: '1px solid #f0f0f0' }}>
          <Sidebar />
        </aside>

        <main style={{ flex: 1, padding: '16px', overflowY: 'auto' }}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
