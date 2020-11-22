import React from 'react';
import HeaderContainer from 'containers/common/HeaderContainer';
import Drawer from 'components/common/Drawer';

const AdminDashboardPage = () => {
    return (
      <>
        <HeaderContainer adminheader dark />
        <Drawer />
        <div>
          <h1>회원 정보 조회</h1>
        </div>
      </>
    );
};

export default AdminDashboardPage;