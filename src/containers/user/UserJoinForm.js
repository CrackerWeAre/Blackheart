import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { changeField, initializeForm, join } from 'modules/auth';
import AuthForm from 'components/auth/AuthForm';

const UserJoinForm = ({ history }) => {
    const [error, setError] = useState(null);

    const dispatch = useDispatch();
    const { form, user, userError, } = useSelector(({ auth }) => ({
        form: auth.join,
        user: auth.user,
        userError: auth.userError,
    }));

    const onChange = e => {
        const { name, value } = e.target;
        dispatch(changeField({
            form: 'join',
            key: name,
            value
        }));
    }

    const onSubmit = e => {
        e.preventDefault();
        const { email, password, confirmPassword, username } = form;

        // Form Validation
        if ([username, email, password, confirmPassword].includes('')) {
            setError(`이메일을 입력해주세요.`);
            return;
        }

        if (password !== confirmPassword) {
            setError('비밀번호가 일치하지 않습니다.');
            return;
        }
        dispatch(join({ email, password, username }));
    }

    // 컴포넌트가 처음 렌더링될 때 form을 초기화함.
    useEffect(() => {
        dispatch(initializeForm('join'));
    }, [dispatch]);

    // 회원가입 성공/실패 처리
    useEffect(() => {
        if (userError) {
            // 이미 존재하는 이메일일 경우
            if (userError.response.status === 409) {
                setError('이미 존재하는 이메일입니다.');
                return;
            }
            console.log('회원가입 오류 발생');
            console.log(userError);
            return;
        }
        if (user) {
            console.log('회원가입 성공!!!!!!!!');
            console.log(user);
        }
    }, [user, userError]);

    return (
        <AuthForm 
            type="join"
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
            error={error}
        />
    );
};

export default withRouter(UserJoinForm);