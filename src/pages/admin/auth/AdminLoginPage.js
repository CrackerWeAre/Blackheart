import React from 'react';
import HeaderContainer from 'containers/common/HeaderContainer';
import AuthTemplate from 'components/auth/AuthTemplate';
import AdminLoinForm from 'containers/admin/AdminLoginForm';

const AdminLoginPage = () => {
    return (
        <>
            <HeaderContainer dark adminheader />
            <AuthTemplate>
                <AdminLoinForm />
            </AuthTemplate>
        </>
    );
};

export default AdminLoginPage;