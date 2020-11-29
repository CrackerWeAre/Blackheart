import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import { ReactComponent as Logo } from 'assets/bh_logo1.svg';

const HeaderWrapper = styled.header`
    position: ${props => props.main ? 'absolute!important' : 'relative'};
    display: flex;
    justify-content: space-between;
    width: 100vw;
    height: 100px;

    & > a {
        position: absolute;
        top: 0;
        left: 3vw;
        transform: translate(0%, 14%);
        z-index: 9999;
    }

    nav ul {
        /* position: absolute;
        top: 0;
        left: 2.8vw;
        z-index: 9999;
        transform: translate(0%, 100%); */
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 50%;
        right: 0;
        transform: translate(0%, -50%);
        margin-right: 3vw;
        z-index: 9999;

        li a {
            font-size: 0.938rem;
            margin: 0.625rem;
            font-weight: 400;
            color: ${props => props.main ? '#fff' : '#130d14'};
            /* color: #000; */
            font-family: 'Poppins', serif;
        }
    }
`;

const Header = ({ history, user, onLogout, adminheader, ...otherProps }) => {
  return (
    <>
        <HeaderWrapper {...otherProps}>
            {adminheader ? (
                <Link to="/admin">
                    <Logo weight="5rem" height="5rem" fill="#000" stroke="#fff" />
                </Link>
            ) : (
                <Link to="/">
                    <Logo weight="5rem" height="5rem" fill="#000" stroke="#fff" />
                </Link>
            )}
                
            <nav>
                <ul>
                    <h1 className="sr-only">Navigation Menu</h1>
                    {adminheader ? (
                        <>
                            <li>
                                <Link to="/">
                                    Home
                                </Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link to="/company/about">About</Link>
                            </li>
                            <li>
                                <Link to="/product/shop">Shop</Link>
                            </li>
                            <li>
                                <Link to="/member/login">Log In</Link>
                            </li>
                            <li>
                                <Link to="/member/join">Sign Up</Link>
                            </li>
                            <li>
                                <Link to="/admin/main">Admin</Link>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </HeaderWrapper>
    </>
    );
};

export default withRouter(Header);