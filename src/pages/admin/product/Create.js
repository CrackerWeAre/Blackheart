import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { AdminContentArea } from 'components/common/AdminContentArea';
import { AdminHeadingArea } from 'components/common/AdminHeadingArea';
import { BackgroundWrapper } from 'components/common/BackgroundWrapper';
import {
  Radio,
  Select,
  Input,
  Table,
  Form,
  TextArea,
} from 'semantic-ui-react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .container {
    display: inherit;
    margin: 20px 0 !important;
    margint-top: 150px;
  }
`;
const StyledTable = styled(Table)`
  table,
  td,
  th {
    font-size: 12px !important;
    vertical-align: middle;
    padding: 0.5rem 0.5rem !important;
  }

  label,
  div {
    font-size: 12px !important;
  }

  .ui.four.column.table td {
    width: 5% !important;
  }
`;

const StyledSelect = styled(Select)`
  min-width: 8rem !important;
  margin: 0 5px 0 0;
`;

const StyledInput = styled(Input)`
  input {
    padding: 1rem;
  }
`;

const StyledRadio = styled(Radio)`
  margin: 0 5px 0 0;
`;

const Inline = styled.div`
  display: flex;
  align-items: center;
`;

const TableColumnCount = () => (
  <StyledTable columns={4} celled structured>
    <Table.Body>
      <Table.Row>
        <Table.Cell>상품명 (필수)</Table.Cell>
        <Table.Cell>
          <Inline>
            <StyledInput></StyledInput>
          </Inline>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>판매가 (필수)</Table.Cell>
        <Table.Cell>
          <Inline>
            <StyledInput></StyledInput>
          </Inline>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>상품 요약설명</Table.Cell>
        <Table.Cell>
          <Inline>
            <StyledInput></StyledInput>
          </Inline>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>상품 상세설명</Table.Cell>
        <Table.Cell>
          <Form>
            <TextArea placeholder="Tell us more" style={{ minHeight: 100 }} />
          </Form>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>이미지</Table.Cell>
        <Table.Cell>
          <input type="file" name="file" onChange={null} />
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </StyledTable>
);

const AdminProductCreate = () => {
  return (
    <AdminContentArea>
      <AdminHeadingArea title="상품관리" subTitle="상품 등록" />
      <BackgroundWrapper>
        <div class="mBoard typeWrite">
          <TableColumnCount />
        </div>
      </BackgroundWrapper>
    </AdminContentArea>
  );
};

export default AdminProductCreate;
