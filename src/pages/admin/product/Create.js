import React from 'react';
import HeaderContainer from 'containers/common/HeaderContainer';
import Drawer from 'components/common/Drawer';

import 'semantic-ui-css/semantic.min.css';


const AdminProductCreate = () => {
  return (
    <>
      <HeaderContainer adminheader dark />
      <Drawer />
    </>
  );
};

export default AdminProductCreate;
