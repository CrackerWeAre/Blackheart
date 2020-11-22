import React from 'react';
import styled, { css } from 'styled-components';
import { Link, withRouter } from 'react-router-dom';

const HeaderWrapper = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  ${(props) =>
    props.adminheader && 'border-bottom: 1px solid rgba(0, 0, 0, 0.1);'};

  h1 {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    margin-left: 0;
    padding-top: 2px;
    z-index: 9999;
    font-family: 'Playfair Display', serif;

    a {
      text-transform: uppercase;
      font-size: 2rem;
      color: #ffffff;
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
    margin-right: 35px;
    z-index: 9999;
  }

  nav ul li {
  }

  nav ul li a {
    font-size: 1rem;
    margin: 0 10px;
    font-weight: 500;
    z-index: 9999;
    color: #ffffff;
  }

  ${(props) => props.dark && css`
      h1 {
        a {
          color: #130d14;
        }
      }

      nav ul li a {
        color: #130d14;
      }
    `}
`;

const AdminHeaderWrapper = styled(HeaderWrapper)`
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    h1 {
        position: absolute;
        top: 0;
        left: 8%;
        transform: translate(-50%, 50%);
        margin: 15px 0 0 30px;
        padding-top: 0;

        a {
            font-size: 2rem;
        }
    }

    nav ul li a {
        font-size: 1rem;
        margin: 0 10px;
        font-weight: 500;
        z-index: 9999;
        color: #000;
      }

    .admin_name {
        text-decoration: underline;
    }
`;

const Header = ({ user, admin, onLogout, adminheader, ...otherProps }) => {
  return (
    <>
        {adminheader ? (
            <>
                <AdminHeaderWrapper {...otherProps}>
                    <h1 className="logo">
                        <Link to="/admin">BlackHeart</Link>
                    </h1>
                    <nav>
                        <h1 className="sr-only">Navigation Menu</h1>
                        <ul>
                            <li>
                            <Link to="/">Home</Link>
                            </li>
                        </ul>

                    </nav>
                </AdminHeaderWrapper>
            </>
        ) : (
            <>
                <HeaderWrapper {...otherProps}>
                    <h1>
                        <Link to="/">Blackheart</Link>
                    </h1>

                    <nav>
                        <ul>
                            <h1 className="sr-only">Navigation Menu</h1>
                            <li>
                                <Link to="/company/about">About</Link>
                            </li>
                            <li>
                                <Link to="/product/shop">Shop</Link>
                            </li>
                            <li>
                                <Link to="/main/login">Sign In</Link>
                            </li>
                            <li>
                                <Link to="/admin/main">Admin</Link>
                            </li>
                        </ul>
                    </nav>
                </HeaderWrapper>
            </>
        )}
    </>
    );
};

export default withRouter(Header);
