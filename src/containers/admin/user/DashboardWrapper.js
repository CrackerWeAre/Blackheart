import React from 'react';
import styled from 'styled-components';
import AdminFilter from './AdminFilter';
import TableFullWidth from './TableFullWidth';

const Wrapper = styled.div`
  margin: 0px 0px 0px 200px;
  padding: 20px;
  position: relative;
  // height: calc(100vh - 100px);
  font-family: 'Nanum Gothic', sans-serif;
  background-color : #ecf0f7;
  display:flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  h6 {
    position: absolute;
    left: 20px;
    top: -20px;
    font-size: 1rem;
    font-weight: 600;
  }

  span {
    transfrom: translateY(-20px);
  }
`;

const DashboardWrapper = () => {
    return (
        <Wrapper>
            <BackgroundWrapper>
              <AdminFilter />
            </BackgroundWrapper>
          
            <BackgroundWrapper>
              <TableFullWidth className="tableFullWidth" />
            </BackgroundWrapper>
        </Wrapper>
    )
}

export default DashboardWrapper