import React from 'react';
import { Container, Dropdown } from 'semantic-ui-react';
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

  .dropdown {
    margin: 0;
  }
`;

const AdminFilter = () => {
  return (
    <Wrapper>
      <Container className="container">
        <Dropdown
          placeholder="성별"
          selection
          options={filterOptions.gender}
          className="dropdown"
        ></Dropdown>
        <Dropdown
          placeholder="등급"
          selection
          options={filterOptions.level}
          className="dropdown"
        ></Dropdown>
        <Dropdown
          placeholder="가입경로"
          selection
          options={filterOptions.joinPath}
          className="dropdown"
        ></Dropdown>
      </Container>
    </Wrapper>
  );
};

export default AdminFilter;
