import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { changeField, initializeForm, isEmail, join } from 'modules/auth';
import AuthForm from 'components/auth/AuthForm';

const UserJoinForm = ({ match }) => {

    const [error, setError] = useState(null);

    const dispatch = useDispatch();
    const { form, user, userError, authMessage } = useSelector(({ auth }) => ({
        form: auth.join,
        user: auth.user,
        userError: auth.userError,
        authMessage: auth.authMessage,
    }));

    const onChange = e => {
        const { name, value, type, checked } = e.target;
        dispatch(changeField({
            form: 'join',
            key: name,
            value: type === 'checkbox' ? +checked : value
        }));
    }

    const onSubmit = e => {
        e.preventDefault();
        const { email, password, confirmPassword, username, agree } = form;

        // 하나라도 비어있다면
        if ([username, email, password, confirmPassword].includes('')) {
            setError(`이메일을 입력해주세요.`);
            return;
        }
        // 비밀번호가 일치하지 않는다면
        if (password !== confirmPassword) {
            setError('비밀번호가 일치하지 않습니다.');
            dispatch(changeField({ form: 'join', key: 'password', value: '' }));
            dispatch(changeField({ form: 'join', key: 'confirmPassword', value: '' }));
            return;
        }

        dispatch(join({ email, password, username, agree }));
    }

    const onIsEmailClick = () => {
        const { email } = form;
        
        dispatch(isEmail(email));
    }

    // 컴포넌트가 처음 렌더링될 때 form을 초기화함.
    useEffect(() => {
        dispatch(initializeForm('join'));
    }, [dispatch]);

    // 회원가입 성공/실패 처리
    useEffect(() => {
        if (userError) {
            // 이미 존재하는 이메일일 경우
            // if (userError.response.status === 409) {
            //     setError('이미 존재하는 이메일입니다.');
            //     return;
            // }
            console.log('회원가입 오류 발생');
            console.log(userError);
            return;
        }
    }, [user, userError]);

    useEffect(() => {
        if (authMessage) {
            setError(authMessage);
            return;
        }
    }, [authMessage]);

    return (
        <AuthForm 
            type="join"
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
            error={error}
            onClick={onIsEmailClick}
        />
    );
};

export default withRouter(UserJoinForm);