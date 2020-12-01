import React, { useEffect, useState } from 'react';
import { StyledPagination } from 'components/common/StyledPagination';
import { userDeleteAPI,userDiscoverAPI } from 'lib/api/admin/User';
import { Button, Checkbox, Icon, Table, Input } from 'semantic-ui-react';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: 11px;
  margin-top: 10px;

  .table .menu .button {
    margin: 5px;
  }

  .ui.input {
    width: 50%!important;
    max-width: 50%!important;
  }
`;

const TableFullWidth = () => {
  const [modify, setModify] = useState(false);
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [checkList, setCheckList] = useState([]);

  const handlePaginationChange = (page) => {
    setPage(page);
  }

  const pushCheckList = (uID) => {
    if(checkList.includes(uID)){
      setCheckList(oldArray => oldArray.filter(item => item !== uID))
    }else{
      setCheckList(oldArray => [...oldArray, uID]);
    }
  }

  const toggleModify = () => {
    setModify(prevState => !prevState);
  }

  const deleteRow = (uID) => {
    return new Promise(resolve => {
      try {
        const response = userDeleteAPI({uID});
        resolve();
      } catch(e){
        console.log(e)
      }
    })

  }

  const deleteRows = async () => {
    const promises = checkList.map(uID => deleteRow(uID));
    await Promise.all(promises);
    window.location.reload();

  }

  const fetchUsers = async () => {
    try {
      setCheckList([]);
      setError(null);
      setUsers(null);
      setLoading(true);
      const response = await userDiscoverAPI({ page, maxResult: 10 });
      console.log(response.data)
      setUsers(response.data.result);
    } catch (e) {
      setError(e);
      console.log(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, [page]);

  const PaginationShorthand = () => (
    <StyledPagination
      activePage={page}
      firstItem={null}
      lastItem={null}
      pointing
      secondary
      totalPages={5}
      onPageChange={e=>handlePaginationChange(e.target.getAttribute('value'))}
    />
  )

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return null;

  return (
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
        {users.map((user, idx) => (
          <Table.Body key={user.uID}>
            <Table.Row>
              <Table.Cell collapsing>
                <Checkbox onClick={()=>{pushCheckList(user.uID);toggleModify()}}/>
              </Table.Cell>
              <Table.Cell>{user.uID}</Table.Cell>
              <Table.Cell>{modify? <Input transparent placeholder={user.uName} /> :user.uName}</Table.Cell>
              <Table.Cell>{user.uEmail}</Table.Cell>
              <Table.Cell>{user.uGender}</Table.Cell>
              <Table.Cell>{user.uAddr}</Table.Cell>
              <Table.Cell>{user.uPhone}</Table.Cell>
              <Table.Cell>{user.uBirth}</Table.Cell>
              <Table.Cell>{user.uLevel}</Table.Cell>
              <Table.Cell>{user.uJoinPath}</Table.Cell>
              <Table.Cell>{user.uJoinDate}</Table.Cell>
            </Table.Row>
          </Table.Body>
        ))}
      </Table>

      <PaginationShorthand></PaginationShorthand>
      
      <Button
        className="button"
        floated="right"
        icon
        labelPosition="left"
        color={checkList.length>0 ? "red" : ""}
        size="small"
        onClick={()=>deleteRows()}
      >
        <Icon name="user" /> Remove
      </Button>
      <Button
        className="button"
        floated="right"
        icon
        labelPosition="left"
        color={checkList.length>0 ? "green" : ""}
        size="small"
      >
        <Icon name="user" /> Modify
      </Button>
    </Wrapper>
  );
};

export default TableFullWidth;
