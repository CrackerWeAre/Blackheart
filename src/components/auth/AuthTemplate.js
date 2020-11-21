import React from 'react';
import styled from 'styled-components';

const AuthTemplateWrapper = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const AuthBlock = styled.div`
    position: fixed;
    margin-top: 25px;
    padding: 40px 60px;
    max-width: 600px;
`;

const AuthTemplate = ({ children }) => {
    return (
        <AuthTemplateWrapper>
            <AuthBlock>
                {children}
            </AuthBlock>
        </AuthTemplateWrapper>
    );
};

export default AuthTemplate;