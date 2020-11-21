import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
    }

    body {
        font-family: 'Poppins', serif;
        line-height: 1.5;
        font-size: 16px;
        font-weight: 400;
        color: #130D14;
    }

    a {
        text-decoration: none;
        color: #130D14;
    }

    ul {
        list-style-type: none;
    }

    .main-bg-img {
    position: relative;
    background-image: url('./assets/DSC09046.jpg');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    }

    /* Screen-Reader Only */
    .sr-only {
    position: absolute;
    top: -9999px;
    left: -9999px;
    z-index: -1;
    width: 0;
    height: 0;
    overflow: hidden;
    visibility: hidden;
    }
`;

export default GlobalStyle;