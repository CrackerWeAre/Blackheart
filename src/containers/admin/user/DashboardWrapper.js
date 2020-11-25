import React from 'react';
import styled from 'styled-components';
import AdminFilter from './AdminFilter';
import TableFullWidth from './TableFullWidth';

const Wrapper = styled.div`
  margin: 0px 0px 0px 200px;
  padding: 20px;
  position: relative;
  font-family: 'Nanum Gothic', sans-serif;

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
            <h6>회원정보 조회</h6>
            <hr/>
            {/* <AdminFilter /> */}
            <TableFullWidth className="tableFullWidth" />
        </Wrapper>
    )
}

export default DashboardWrapper