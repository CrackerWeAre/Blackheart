import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Input from 'components/common/Input';
import Button from 'components/common/Button';

const AuthFormWrapper = styled.div`
    position: relative;

    h1 {
        font-family: 'Playfair Display', serif;
        font-weight: 700;
        font-size: 3.3368091762252345vh;
        text-align: center;
        color: #130d14;
    }

    p {
        text-align: center;
        font-size: 0.875;
        margin-bottom: 3.71900826446281vh;
    }

    .form-check {
        position: relative;
        display: block;
        padding-left: 1.25rem;
        margin-top: 6px;

        input {
            position: absolute;
            margin-left: -1.25rem;
        }
    }

    .form-check-label {
        cursor: pointer;
        margin-bottom: 0;
    }
`;

const BtnMt = styled(Button)`
    margin-top: 1.5rem;
`;

const OauthLoginBlock = styled.div`
    margin-top: 1.25rem;
    
    div:nth-child(1) {
        text-align: center;
        font-family: 'Poppins', sans-serif;
        font-size: 0.875rem;
        color:#7F7F7F;
    }

    div:nth-child(2) {
        display: flex;
        margin-top: 0.5rem;

        button + button {
            margin-left: 0.625rem;
        }
    }
`;

const OrSeparatorContain = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    hr {
        height: 1px;
        background: #dbe2e8;
        border: none;
        margin: 1.875rem 0;
        width: 80%;
    }

    span {
        margin: 0 .625rem;
        color: #79818b;
        font-family: 'Poppins', sans-serif;
    }
`;

// 폼 하단에 로그인 혹은 회원가입 링크를 보여주는 Footer
const Footer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    line-height: 1.714286;

    a {
        font-weight: 500;

        &:hover {
            text-decoration: underline;
        }
    }

    span + a, a + a {
        margin-left: 1rem;
    }
`;

const ErrorMessage = styled.div`
    display: flex;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    color: #ff4949;
    text-align: start;
    font-size: 0.75rem;
    font-weight: 400;
    margin-top: .3125rem;
`;

const btnTypeText = {
    login: '로그인',
    join: '회원가입'
};

const AuthForm = ({ type, form, error, onChange, onSubmit }) => {
    return (
        <AuthFormWrapper>
            <h1>
                BLACKHEART
            </h1>
            <p>작은 연필 가게, 흑심</p>
            <form onSubmit={onSubmit}>
                {type === 'join' ? (
                    <>
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="이메일"
                            value={form.email}
                            onChange={onChange}
                            autoFocus
                        />
                        <Input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="비밀번호"
                            value={form.password}
                            onChange={onChange}
                        />
                        <Input
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                            placeholder="비밀번호 확인"
                            value={form.confirmPassword}
                            onChange={onChange}
                        />
                        <Input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="이름"
                            value={form.username}
                            onChange={onChange}
                        />
                        {/* <div className="form-check">
                            <label htmlFor="agree" className="form-check-label">
                                <Input
                                    type="checkbox"
                                    name="agree"
                                    id="agree"
                                />
                                <span>이용 약관에 동의합니다.</span>
                            </label>
                        </div> */}
                    </>
                ) : (
                    <>
                        <OauthLoginBlock>
                            <div>
                                <span>다른 서비스로 로그인</span>
                            </div>
                            
                            <div>
                                <Button auth>Google</Button>
                                <Button auth>Facebook</Button>
                                <Button auth>Kakao</Button>
                                <Button auth>Naver</Button>
                            </div>
                        </OauthLoginBlock>

                        <OrSeparatorContain>
                            <hr/>
                                <span>or</span>
                            <hr/>
                        </OrSeparatorContain>

                        <Input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="이메일"
                            autoFocus
                            value={form.email}
                            onChange={onChange}
                        />
                        <Input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="비밀번호"
                            autoComplete="new-password"
                            value={form.password}
                            onChange={onChange}
                        />
                    </>
                )}
                {error && <ErrorMessage><span>{error}</span></ErrorMessage>}
                <BtnMt fullWidth>{btnTypeText[type]}</BtnMt>
            </form>
            <Footer>
                {type === 'join' ? (
                    <>
                        <span>이미 계정이 있으세요?</span>
                        <Link to="/member/login">로그인</Link>
                    </>
                ) : (
                    <>
                        <Link to="/member/join">비밀번호 재설정</Link>
                        <Link to="/member/join">회원가입</Link>
                    </>
                )}
            </Footer>
        </AuthFormWrapper>
    );
};

export default AuthForm;