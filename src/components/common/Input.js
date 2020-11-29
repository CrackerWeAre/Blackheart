import React from 'react';
import styled, { css } from 'styled-components';

const CustomInput = styled.input`
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    border: 1px solid #afb3b9;
    border-radius: 4px;
    padding: .53125rem .75rem;
    margin-top: 1rem;
    outline: none;
    width: 100%;
    line-height: 1.714286;

    &:focus {
        color: #130D14;
        background: #fff;
        outline: 0;
        box-shadow: 0 0 0 0.2rem rgba(96, 154, 233, .25);
        border-color: #130D14;
    }

    & + & {
        margin-top: 1.5rem;
    }

    ${props => props.error && css`
        border: 2px solid #ff4949;
    `}
`;

const Input = props => <CustomInput {...props} />;

export default Input;