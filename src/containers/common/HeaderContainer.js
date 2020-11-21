import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from 'components/common/Header';
import { adminLogout } from 'modules/admin/auth'; 
import { userLogout } from 'modules/user/auth';

const HeaderContainer = ({ ...props }) => {
    const { user, admin } = useSelector(({ userAuth, adminAuth }) => ({
        user: userAuth.user,
        admin: adminAuth.admin,
    }));
    const dispatch = useDispatch();
    const onLogout = () => {
        dispatch(adminLogout());
        dispatch(userLogout());
    }
    return <Header user={user} admin={admin} onLogout={onLogout} {...props} />;
};

export default HeaderContainer;