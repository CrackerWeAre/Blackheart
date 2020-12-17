import Pagination from 'components/common/Pagination';
import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import styled, { css } from 'styled-components';

export const Review = () => {
    const [itemList, setItemList] = useState([])
    const [itemListNum, setItemListNum] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10)
    const [totalPosts, setTotalPosts] = useState(20)
    const [loading, setLoading] = useState(false)
    const indexOfLastPost = itemListNum * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = itemList.slice(indexOfFirstPost, indexOfLastPost);


    const paginate = (numb) => {
        setItemListNum(numb)
    }

    const tableList = ({loading, data}) => {
        if(loading){
            return  <div> 로딩중 입니다. </div>
        } else {
            return data.map((item)=>{
                return (
                    <tr className="reviewTableRow">
                        <td>
                            <div>
                                제품 디테일
                            </div>
                        </td>
                        <td>
                            <div>
                                리뷰 등록 날짜
                            </div>
                        </td>
                        <td>
                            <div>
                                리뷰 내용
                            </div>
                        </td>
                        <td>
                            <div>
                                리뷰 이미지
                            </div>
                        </td>
                        <td>
                            <div>
                                리뷰 별점
                            </div>
                        </td>
                    </tr>
                )
            })
        }
        
    };

    const ReviewList = styled.section`
        height : 100%;
        width: calc(100% - 250px);
        padding : 200px 0px 0px 0px;
        flex: none;
        margin-top : 100px;

        header {
            height : 120px;
            margin-bottom: 38px;
            width : 100%;
        }

        header h2 {
            width : 100%;
            margin-bottom: 12px;
            font-size: 22px;
            line-height: 26px;
            font-weight: 800px;
        }

        header ul {
            width : 100%;
            margin-bottom: 28px;
        }

        header ul li {
            display: inline-block;
            margin-right: 16px;        }

        ul {
            margin-bottom: 28px;
        }

        ul, li {
            list-style: none;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            table-layout: fixed;
        }

        table colgroup col{
            width: 20%;
        }

        table th {
            height: 52px;
            border-bottom: 1px solid #000000;
            vertical-align: middle;
            font-weight: normal;
        }

        table td {
            height: 70px;
            padding: 10px;
            box-sizing: border-box;
            border-bottom: 1px solid #f5f5f5;
            text-align: center;
            vertical-align: middle;
            word-break: break-all;
        }
    ` 

    return (
        <ReviewList>
            <header className="reviewListHeader">
                <h2 className="headerTitle">
                    나의 리뷰내역
                </h2>
                <ul className="headerList">
                    <li>작성 가능한 리뷰</li>
                    <li>내 리뷰</li>
                </ul>
            </header>
            <table className="reviewListTable">
                <colgroup className="reviewListColGroup">
                    <col className="reviewListCol"></col>
                    <col className="reviewListCol"></col>
                    <col className="reviewListCol"></col>
                    <col className="reviewListCol"></col>
                    <col className="reviewListCol"></col>
                </colgroup>
                <thead className="reviewListTableHead">
                    <tr className="reviewListTableRow">
                        <th scope="col">
                            <div className="tableDiv">
                                제품 디테일
                            </div>
                        </th>
                        <th scope="col">
                            <div className="tableDiv">
                                리뷰 등록 날짜
                            </div>
                        </th>
                        <th scope="col">
                            <div  className="tableDiv">
                                리뷰 내용
                            </div>
                        </th>
                        <th scope="col">
                            <div className="tableDiv">
                                리뷰 이미지
                            </div>
                        </th>
                        <th scope="col">
                            <div className="tableDiv">
                                리뷰 별점
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody className="reviewListTableBody">
                    {tableList({loading, data:currentPosts})}
                </tbody>
            </table>
            <Pagination  nowPage={itemListNum} postsPerPage={postsPerPage} totalPosts={totalPosts} paginate={paginate}></Pagination>
        </ReviewList>
    )
}

export default Review
