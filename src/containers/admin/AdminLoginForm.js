import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { changeField, initializeForm, login } from 'modules/auth';
import AuthForm from 'components/auth/AuthForm';

const AdminLoginForm = ({ history }) => {
    const dispatch = useDispatch();
    const { form } = useSelector(({ auth }) => ({
        form: auth.login,
        user: auth.user,
        userError: auth.userError,
    }));
    
    const onChange = e => {
        const { name, value } = e.target;
        dispatch(changeField({
            form: 'login',
            key: name,
            value
        }));
    }
    const onSubmit = e => {
        e.preventDefault();
        const { email, password } = form;

        dispatch(login({ email, password }));
    }

    useEffect(() => {
        dispatch(initializeForm('login'));
    }, [dispatch]);

    return (
        <AuthForm 
            type="login"
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
        />
    );
}

export default withRouter(AdminLoginForm);