import React from 'react';
import styled from 'styled-components';
import Input from 'components/common/Input';
import Button from 'components/common/Button';

const AdminAuthFormWrapper = styled.div`
    h1 {
        font-family: 'Poppins', sans-serif;
        font-weight: 200;
        font-size: 2rem;
        margin: 0 0 20px;
        text-align: center;
        color: #130d14;
    }
`;

const BtnMt = styled(Button)`
    margin-top: 1.5rem;
`;

const btnTypeText = {
    login: '로그인',
    join: '회원가입'
};

const AdminAuthForm = ({ type, onChange, onSubmit, error, form }) => {
    const btntype = btnTypeText[type];
    return (
        <AdminAuthFormWrapper>
            <h1>
                {btntype === 'join' ? '관리자 회원가입' : '관리자 로그인'}
            </h1>
            <form>
                {btntype === 'join' ? (
                    <>
                        <Input
                            name="username"
                            placeholder="Your name"
                            onChange={onChange}
                        />
                        <Input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            onChange={onChange}
                            
                        />
                        <Input
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={onChange}
                            
                        />
                        <Input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            onChange={onChange}
                            
                        />
                    </>
                ) : (
                    <>
                        <Input
                            type="text"
                            name="id"
                            placeholder="아이디"
                            onChange={onChange}
                            
                        />
                        <Input
                            type="password"
                            name="password"
                            placeholder="비밀번호"
                            onChange={onChange}
                            
                        />
                    </>
                )}
                <BtnMt fullWidth>{btntype}</BtnMt>
            </form>
        </AdminAuthFormWrapper>
    );
};

export default AdminAuthForm;