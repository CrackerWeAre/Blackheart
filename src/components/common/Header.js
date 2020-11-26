import React from 'react';
// eslint-disable-next-line
import styled, { css } from 'styled-components';
import { Link, withRouter } from 'react-router-dom';

const HeaderWrapper = styled.header`
    position: ${props => props.main ? 'absolute' : 'relative'};
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100px;

    h1 {
        position: relative;
        top: 0;
        left: 3vw;
        transform: translate(0%, 60%);
        z-index: 9999;
        font-family: 'Playfair Display', serif;

        a {
            text-transform: uppercase;
            font-size: 1.85rem;
            font-weight: 700;
            color: ${props => props.main ? '#fff' : '#130d14'};
        }
    }

    nav ul {
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
            font-size: 1rem;
            margin: 0 10px;
            font-weight: 400;
            color: ${props => props.main ? '#fff' : '#130d14'};
            font-family: 'Poppins', serif;
        }
    }
`;

const Header = ({ history, user, onLogout, adminheader, ...otherProps }) => {
    console.log({ adminheader, ...otherProps });
  return (
    <>
        <HeaderWrapper {...otherProps} className={adminheader && 'ad_bb'}>
            <h1>
                {adminheader ? (
                    <Link to="/admin">BlackHeart</Link>
                ) : (
                    <Link to="/">Blackheart</Link>
                )}
                
            </h1>

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