import React from 'react';
import AuthTemplate from 'components/auth/AuthTemplate';
import UserJoinForm from 'containers/user/UserJoinForm';

const UserJoinPage = () => {
    return (
        <>
            <AuthTemplate>
                <UserJoinForm />
            </AuthTemplate>
        </>
    );
};

export default UserJoinPage;