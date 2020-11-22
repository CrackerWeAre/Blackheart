import React from 'react';
import styled from 'styled-components';
import AdminFilter from './AdminFilter';
import TableFullWidth from './TableFullWidth';

const Wrapper = styled.div`
  margin: 50px 0px 0px 200px;
  padding: 20px;
  position: relative;
  font-family: 'Nanum Gothic', sans-serif;

  h3 {
    position: absolute;
    left: 0;
    top: 0;
    font-size: 1rem;
  }

  .adminFilter {
      margin: 10px;
  }



`;

const DashboardWrapper = () => {
    return (
        <Wrapper>
            <AdminFilter />
            <TableFullWidth className="tableFullWidth" />
        </Wrapper>
    )
}

export default DashboardWrapper