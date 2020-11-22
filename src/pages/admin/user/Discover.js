import React from 'react';
import HeaderContainer from 'containers/common/HeaderContainer';
import Drawer from 'components/common/Drawer';
import DashboardWrapper from 'containers/admin/user/DashboardWrapper';

import 'semantic-ui-css/semantic.min.css';


const AdminDashboardPage = () => {
  return (
    <>
      <HeaderContainer adminheader dark />
      <Drawer />
      <DashboardWrapper />
    </>
  );
};

export default AdminDashboardPage;
