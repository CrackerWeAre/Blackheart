import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { changeField, initializeForm, login } from 'modules/auth';
import AuthForm from 'components/auth/AuthForm';

const UserLoginForm = ({ history }) => {
    const [error, setError] = useState(null);

    const dispatch = useDispatch();
    const { form, currentUser } = useSelector(({ auth }) => ({
        form: auth.login,
        currentUser: auth.currentUser
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

        if (email === '') {
            setError('이메일을 입력해주세요.');
            return;
        }

        if (password === '') {
            setError('비밀번호를 입력해주세요.');
            return;
        }

        dispatch(login({ email, password }));
    }

    useEffect(() => {
        dispatch(initializeForm('login'));
    }, [dispatch]);

    useEffect(() => {
        if (currentUser) {
            history.push('/');

            // 로그인 상태 유지
            try {
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
            } catch (e) {
                console.log(e);
            }
        }
    }, [history, currentUser]);

    return (
        <AuthForm 
            type="login"
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
            error={error}
        />
    );
}

export default withRouter(UserLoginForm);