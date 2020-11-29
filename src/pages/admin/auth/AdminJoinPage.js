import React from 'react';
import AuthTemplate from 'components/auth/AuthTemplate';
import AdminJoinForm from 'containers/admin/AdminJoinForm';


const AdminJoinPage = () => {
    return (
        <>
            <AuthTemplate>
                <AdminJoinForm />
            </AuthTemplate>
        </>
    );
};

export default AdminJoinPage;