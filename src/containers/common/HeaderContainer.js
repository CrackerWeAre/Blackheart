import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from 'components/common/Header';
import { logout } from 'modules/auth';

const HeaderContainer = ({ ...props }) => {
    const { currentUser } = useSelector(({ auth }) => ({
        currentUser: auth.currentUser,
    }));
    const dispatch = useDispatch();
    const onLogout = () => {
        dispatch(logout());
        try {
            localStorage.removeItem('currentUser');
        } catch (e) {
            console.log(e);
        }
    }
    return <Header currentUser={currentUser} onLogout={onLogout} {...props} />;
};

export default HeaderContainer;