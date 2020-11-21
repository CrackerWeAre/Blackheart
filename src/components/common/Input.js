import React from 'react';
import styled, { css } from 'styled-components';

const CustomInput = styled.input`
    font-family: 'Poppins', sans-serif;
    font-size: 0.9rem;
    border: 1px solid #afb3b9;
    border-radius: 4px;
    padding-bottom: 1rem;
    margin-top: 1rem;
    outline: none;
    width: 100%;
    padding: 10px;

    &:focus {
        outline: none;
        border: 2px solid #130D14;
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