import React from 'react';
import { Container, Dropdown, Table, Button } from 'semantic-ui-react';
import styled from 'styled-components';

const filterOptions = {
  gender: [
    {
      key: 'male',
      text: '남성',
      value: 'M',
    },
    {
      key: 'female',
      text: '여성',
      value: 'W',
    },
  ],
  level: [
    {
      key: '0',
      text: '0',
      value: '0',
    },
  ],
  joinPath: [
    {
      key: 'homepage',
      text: '홈페이지',
      value: 'homepage',
    },
    {
      key: 'naver',
      text: '네이버',
      value: 'naver',
    },
    {
      key: 'google',
      text: '구글',
      value: 'google',
    },
    {
      key: 'kakao',
      text: '카카오',
      value: 'kakao',
    },
  ],
};

const Wrapper = styled.div`
  .container {
    display: flex;
    margin: 20px 0!important;
    margint-top: 150px;
  }
`
const StyledTable = styled(Table)`
  table td th {
    font-size: 12px;
  }
`;

const ButtonExampleEmphasis = () => (
  <div>
    <Button primary>검색</Button>
  </div>
);

const TableExampleColumnCount = () => (
  <StyledTable columns={4}>
    <Table.Body>
      <Table.Row>
        <Table.Cell>검색어</Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>구매금액/건수</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell>주문상품</Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>주문일/결제완료일</Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>나이</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell>가입일/기념일</Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>SMS수신</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell>이메일수신</Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
    </Table.Body>
  </StyledTable>
);

const AdminFilter = () => {
  return (
    <Wrapper>
      <TableExampleColumnCount />
      <ButtonExampleEmphasis />
    </Wrapper>
  );
};

export default AdminFilter;
