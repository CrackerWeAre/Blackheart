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

  return (
    <UlPagination>
      <li
        onClick={() => paginate(nowPage-1)}
      >
        &laqui; 
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
        onClick={() => paginate(nowPage+11)}
      >
        &raqui; 
      </li>
    </UlPagination>
  );
};

export default Pagination;