import React from 'react';
import { UserMainForm } from 'containers/mypage/UserMainForm';
import styled from 'styled-components';


const MainInfoWrapper = styled.div`
    padding : 200px 0px 0px 0px;
  
`;

// Navigator Drawer
const MainWrapper = ({children}) => {
    return (
        <MainInfoWrapper> 
            {children}
        </MainInfoWrapper>
    );
};

export default MainWrapper;