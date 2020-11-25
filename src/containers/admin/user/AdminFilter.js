import React from 'react';
import { Radio, Select, Input, Table, Button } from 'semantic-ui-react';
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .container {
    display: inherit;
    margin: 20px 0!important;
    margint-top: 150px;

  }
`
const StyledTable = styled(Table)`
  table, td, th {
    font-size: 12px!important;
    vertical-align: middle;
    padding: 0.5rem 0.5rem!important;
  }

  label, div {
    font-size: 12px!important;
  }

  .ui.four.column.table td {
    width: 5%!important;
  }
`;

const StyledSelect = styled(Select)`
  min-width: 8rem!important;
  margin : 0 5px 0 0;

`;

const StyledInput = styled(Input)`
  input {
    max-width: 8rem!important;
    padding: 1rem;
  }
`;

const StyledRadio = styled(Radio)`
  margin : 0 5px 0 0;

`;

const Inline = styled.div`
  display: flex;
  align-items: center;

`;

const searchOptions = [
  {key: 'uName', value: 'uName', text: '이름'},
  {key: 'uEmail', value: 'uEmail', text: '이메일'},
  {key: 'uPhone', value: 'uPhone', text: '전화번호'},
]
const buyOptions = [
  {key: 'all', value: 'all', text: '전체'},
  {key: 'oOrderPriceTotal', value: 'oOrderPriceTotal', text: '총 주문금액'},
  {key: 'oPayedPriceTotal', value: 'oPayedPriceTotal', text: '총 실결제금액'},
  {key: 'oOrderQTYTotal', value: 'oOrderQTYTotal', text: '총 주문건수'},
  {key: 'oValidOrderQTYTotal', value: 'oValidOrderQTYTotal', text: '총 실주문건수'},
]

const orderDateOptions = [
  {key: 'uOrderDate', value: 'uOrderDate', text: '주문일'},
  {key: 'uPayedDate', value: 'uPayedDate', text: '결제완료일'},
]

const userDateOptions = [
  {key: 'uJoinDate', value: 'uJoinDate', text: '가입일'},
  {key: 'uBirth', value: 'uBirth', text: '기념일'},
]

const ButtonEmphasis = () => (
  <Button primary>검색</Button>
);

const TableColumnCount = () => (
  <StyledTable columns={4} celled structured>
    <Table.Body>
      <Table.Row>
        <Table.Cell>검색어</Table.Cell>
        <Table.Cell colSpan='3'>
          <Inline>
            <StyledSelect options={searchOptions}/>
            <StyledInput />
          </Inline>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>구매금액/건수</Table.Cell>
        <Table.Cell>
          <Inline>
              <StyledSelect options={buyOptions}/>
          </Inline>
        </Table.Cell>
        <Table.Cell>주문상품</Table.Cell>
        <Table.Cell>
        <Inline>
              <StyledInput />
          </Inline>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>주문일/결제완료일</Table.Cell>
        <Table.Cell colSpan='3'>
        <Inline>
            <StyledSelect options={orderDateOptions} />
            <StyledInput />
          </Inline>
        </Table.Cell>

      </Table.Row>
      <Table.Row>
        <Table.Cell>나이</Table.Cell>
        <Table.Cell>
        <Inline>
            <StyledInput />세 ~
            <StyledInput />세
          </Inline>
        </Table.Cell>
        <Table.Cell>가입일/기념일</Table.Cell>
        <Table.Cell>
        <Inline>
            <StyledSelect options={userDateOptions} />
          </Inline>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>SMS수신</Table.Cell>
        <Table.Cell>
          <StyledRadio label="전체"/>
          <StyledRadio label="수신허용"/>
          <StyledRadio label="수신안함"/>
        </Table.Cell>
        <Table.Cell>이메일수신</Table.Cell>
        <Table.Cell>
          <StyledRadio label="전체"/>
          <StyledRadio label="수신허용"/>
          <StyledRadio label="수신안함"/>
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </StyledTable>
);

const AdminFilter = () => {
  return (
    <Wrapper>
      <TableColumnCount />
      <ButtonEmphasis />
    </Wrapper>
  );
};

export default AdminFilter;
