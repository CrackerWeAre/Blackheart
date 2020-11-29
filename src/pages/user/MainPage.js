import React from 'react';
import styled from 'styled-components';
import bgimg from 'assets/DSC09046.jpg';
import SnsLink from 'components/common/SnsLink';

const MainWrapper = styled.div`
    position: relative;
    height: 100vh;
    background-image: url(${bgimg});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 11;
        /* background-color: rgba(255, 255, 255, 0.2); */
        background-color: rgba(0, 0, 0, 0.2);
    }
`;

const MainPage = () => {
    return (
        <MainWrapper>
            <SnsLink />
        </MainWrapper>
    );
}

export default MainPage;