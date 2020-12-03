import React from "react";
import styled from 'styled-components';

const Pagination = ({nowPage, postsPerPage, totalPosts, paginate }) => {
  const pageNumber = [];

  const UlPagination = styled.ul`
    display: inline-block;
    li {
      color: black;
      float: left;
      padding: 8px 16px;
      text-decoration: none;
    }

    li.onPaginationItem {
      background-color: #000000;
      color: white;
    }

    li:hover:not(.onPaginationItem) {
      background-color: #232323;
      color: white;
    }
  `

  // Math.ceil: 올림
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber.push(i);
  }

  const pageSub = (nowPage) => {
    if(nowPage===1){
      paginate(1)
    }else{
      paginate(nowPage-1)
    }
  }

  const pageAdd = (nowPage) => {
    console.log(pageNumber.length)
    if(nowPage===pageNumber.length){
      paginate(pageNumber.length)
    }else{
      paginate(nowPage+1)
    }
  }

  return (
    <UlPagination>
      <li
        onClick={() => pageSub(nowPage)}
      >
        &laquo; 
      </li>
      {pageNumber.map((pageNum) => (
        <li
          key={pageNum}
          className={pageNum===nowPage ? "onPaginationItem":"offPaginationItem"}
          onClick={() => paginate(pageNum)}
        >
          {pageNum}
        </li>
      ))}
      <li
        onClick={() => pageAdd(nowPage)}
      >
        &raquo; 
      </li>
    </UlPagination>
  );
};

export default Pagination;