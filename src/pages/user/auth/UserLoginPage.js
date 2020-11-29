import React from 'react';
import AuthTemplate from 'components/auth/AuthTemplate';
import UserLoginForm from 'containers/user/UserLoginForm';

const UserLoginPage = () => {
    return (
        <>
            <AuthTemplate>
                <UserLoginForm />
            </AuthTemplate>
        </>
    );
};

export default UserLoginPage;