import React from 'react';
import { Button, Checkbox, Icon, Table, Menu } from 'semantic-ui-react';

import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: 12px;

  .table .menu .button {
    margin: 10px;
  }
`;


const TableFullWidth = () => (
  <Wrapper>
    <Table className="table" celled compact definition>
      <Table.Header fullWidth>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell>uID</Table.HeaderCell>
          <Table.HeaderCell>이름</Table.HeaderCell>
          <Table.HeaderCell>이메일</Table.HeaderCell>
          <Table.HeaderCell>성별</Table.HeaderCell>
          <Table.HeaderCell>주소</Table.HeaderCell>
          <Table.HeaderCell>휴대폰</Table.HeaderCell>
          <Table.HeaderCell>생일</Table.HeaderCell>
          <Table.HeaderCell>등급</Table.HeaderCell>
          <Table.HeaderCell>가입경로</Table.HeaderCell>
          <Table.HeaderCell>가입일</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell collapsing>
            <Checkbox />
          </Table.Cell>
          <Table.Cell>1</Table.Cell>
          <Table.Cell>박소영</Table.Cell>
          <Table.Cell>ssoyyoung.p@gmail.com</Table.Cell>
          <Table.Cell>여성</Table.Cell>
          <Table.Cell>반포동</Table.Cell>
          <Table.Cell>010-7922-5203</Table.Cell>
          <Table.Cell>1994-03-16</Table.Cell>
          <Table.Cell>9</Table.Cell>
          <Table.Cell>homepage</Table.Cell>
          <Table.Cell>2020-11-22 19:24:54</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>

    <Menu className="menu" floated="left" pagination>
      <Menu.Item as="a" icon>
        <Icon name="chevron left" />
      </Menu.Item>
      <Menu.Item as="a">1</Menu.Item>
      <Menu.Item as="a">2</Menu.Item>
      <Menu.Item as="a">3</Menu.Item>
      <Menu.Item as="a">4</Menu.Item>
      <Menu.Item as="a" icon>
        <Icon name="chevron right" />
      </Menu.Item>
    </Menu>

    <Button className="button" floated="right" icon labelPosition="left" primary size="small">
      <Icon name="user" /> Add User
    </Button>
  </Wrapper>
);

export default TableFullWidth;
