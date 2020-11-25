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
`;

const BackgroundWrapper = styled.div`
  margin: 30px 0 15px;
  padding: 30px 20px;
  border-radius: 1px;
  border: 1px solid #ddd;
  background: #fff;
  width: 95%;
  justify-content: center;
  -webkit-box-shadow: 0 2px 1px 0 rgba(205,211,222,1);
  -moz-box-shadow: 0 2px 1px 0 rgba(205,211,222,1);
  box-shadow: 0 2px 1px 0 rgba(205,211,222,1);
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