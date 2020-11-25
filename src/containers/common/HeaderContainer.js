import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from 'components/common/Header';
import { logout } from 'modules/auth';

const HeaderContainer = ({ ...props }) => {
    const { user } = useSelector(({ auth }) => ({
        user: auth.user,
    }));
    const dispatch = useDispatch();
    const onLogout = () => {
        dispatch(logout());
    }
    return <Header user={user} onLogout={onLogout} {...props} />;
};

export default HeaderContainer;