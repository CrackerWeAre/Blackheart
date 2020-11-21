import React from 'react';
import styled, { css } from 'styled-components';

const CustomButton = styled.button`
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    color: #ffffff;
    background: #130D14;
    border: 2px solid #130D14;
    border-radius: 4px;
    outline: none;
    text-align: center;

    &:focus {
        outline: none;
    }

    ${props => props.fullWidth && css`
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        width: 100%;
        text-transform: uppercase;
        letter-spacing: 2px;
    `}

    ${props => props.auth && css`
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fff;
        color: #79818b;
        border: none;
        box-shadow: 0 1px 2px rgba(0,0,0,.08), 0 1px 4px rgba(0,0,0,.12);
        font-size: 0.8rem;
        min-width: 200px;
        height: 45px;

        svg {
            height: 24px;
            width: 24px;
            margin-right: 15px;
        }
    `}
`;

const Button = props => <CustomButton {...props} />;

export default Button;