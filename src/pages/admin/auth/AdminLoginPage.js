import React from 'react';
import AuthTemplate from 'components/auth/AuthTemplate';
import AdminLoinForm from 'containers/admin/AdminLoginForm';

const AdminLoginPage = () => {
    return (
        <>
            <AuthTemplate>
                <AdminLoinForm />
            </AuthTemplate>
        </>
    );
};

export default AdminLoginPage;