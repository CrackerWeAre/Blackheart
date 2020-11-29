import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const SnsWrapper = styled.footer`
    position: absolute;
    display: flex;
    right: 0;
    bottom: 0;
    transform: translateY(-40%);
    z-index: 9999;
    margin-right: 3vw;
    
    a {
        color: #fff;
        font-size: 1.45rem;
        padding: 1.25rem;
        cursor: pointer;
    }
`;

const SnsLink = () => {
    return (
        <SnsWrapper>
            <a href="https://www.instagram.com/blackheart_pencil/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://twitter.com/blackheart_kr" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} />
            </a>
        </SnsWrapper>
    );
}

export default SnsLink;