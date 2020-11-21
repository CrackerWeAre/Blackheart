import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AuthForm from 'components/auth/AuthForm';

const UserLoginForm = ({ history }) => {
    const onChange = e => {
        const { name, value } = e.target;
        return { name, value };
    }
    const onSubmit = e => {
        e.preventDefault();
    }

    useEffect(() => {

    }, []);

    return (
        <AuthForm 
            type="signin"
            onChange={onChange}
            onSubmit={onSubmit}
        />
    );
}

export default UserLoginForm;