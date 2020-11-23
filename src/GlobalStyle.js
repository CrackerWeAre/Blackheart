import { createGlobalStyle } from 'styled-components';
import bg_img from 'assets/DSC09046.jpg';
import Playfair_Display_Regular from 'assets/fonts/Playfair_Display/static/PlayfairDisplay-Regular.ttf';
import Playfair_Display_Medium from 'assets/fonts/Playfair_Display/static/PlayfairDisplay-Medium.ttf';
import Playfair_Display_Bold from 'assets/fonts/Playfair_Display/static/PlayfairDisplay-Bold.ttf';
import Poppins_Light from 'assets/fonts/Poppins/Poppins-Light.ttf';
import Poppins_Regular from 'assets/fonts/Poppins/Poppins-Regular.ttf';
import Poppins_Medium  from 'assets/fonts/Poppins/Poppins-Medium.ttf';
import Poppins_SemiBold from 'assets/fonts/Poppins/Poppins-SemiBold.ttf';
import Poppins_Bold from 'assets/fonts/Poppins/Poppins-Bold.ttf';
import NotoSerifKR_Light from 'assets/fonts/Noto_Serif_KR/NotoSerifKR-Light.otf';
import NotoSerifKR_Regular from 'assets/fonts/Noto_Serif_KR/NotoSerifKR-Medium.otf';
import NotoSerifKR_Medium from 'assets/fonts/Noto_Serif_KR/NotoSerifKR-Regular.otf';
import NotoSerifKR_Bold from 'assets/fonts/Noto_Serif_KR/NotoSerifKR-Bold.otf';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
    }

    body {
        font-family: 'Noto Serif KR', serif;
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
        list-style: none;
    }

    .main-bg-img {
    position: relative;
    background-image: url(${bg_img});
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

    /* Fonts */
    @font-face {
        font-family: 'Playfair Display';
        font-style: normal;
        font-weight: 400;
        src: url(${Playfair_Display_Regular})  format('truetype')
    }
    @font-face {
        font-family: 'Playfair Display';
        font-style: normal;
        font-weight: 500;
        src: url(${Playfair_Display_Medium})  format('truetype')
    }
    @font-face {
        font-family: 'Playfair Display';
        font-style: normal;
        font-weight: 700;
        src: url(${Playfair_Display_Bold})  format('truetype')
    }
    @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 300;
        src: url(${Poppins_Light})  format('truetype')
    }
    @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        src: url(${Poppins_Regular})  format('truetype')
    }
    @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        src: url(${Poppins_Medium})  format('truetype')
    }
    @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        src: url(${Poppins_SemiBold})  format('truetype')
    }
    @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        src: url(${Poppins_Bold})  format('truetype')
    }

    @font-face {
        font-family: 'Noto Serif KR';
        font-style: normal;
        font-weight: 300;
        src: url(${NotoSerifKR_Light})  format('opentype')
    }
    @font-face {
        font-family: 'Noto Serif KR';
        font-style: normal;
        font-weight: 400;
        src: url(${NotoSerifKR_Regular})  format('opentype')
    }
    @font-face {
        font-family: 'Noto Serif KR';
        font-style: normal;
        font-weight: 500;
        src: url(${NotoSerifKR_Medium})  format('opentype')
    }
    @font-face {
        font-family: 'Noto Serif KR';
        font-style: normal;
        font-weight: 700;
        src: url(${NotoSerifKR_Bold})  format('truetype')
    }
`;

export default GlobalStyle;