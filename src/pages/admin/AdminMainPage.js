import React from 'react';
import HeaderContainer from 'containers/common/HeaderContainer';
import Drawer from 'components/common/Drawer';

const AdminDashboardPage = () => {
    return (
        <>
            <HeaderContainer adminheader dark />
            <Drawer />   
        </>
    );
};

export default AdminDashboardPage;