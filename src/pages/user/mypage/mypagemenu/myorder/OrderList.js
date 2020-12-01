import Pagination from 'components/common/Pagination';
import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import styled, { css } from 'styled-components';

export const OrderList = ({data}) => {

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
                    <tr className="orderTableRow">
                        <td>
                            <div>
                                제품 디테일
                            </div>
                        </td>
                        <td>
                            <div>
                                제품 구매날짜
                            </div>
                        </td>
                        <td>
                            <div>
                                제품 주문번호
                            </div>
                        </td>
                        <td>
                            <div>
                                상태
                            </div>
                        </td>
                        <td>
                            <div>
                                상태
                            </div>
                        </td>
                    </tr>
                )
            })
        }
        
    };

    const OrderList = styled.section`
        height : 100%;
        width: calc(100% - 250px);
        padding : 300px 0px 0px 0px;
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
            width : 100%;
            border-collapse: collapse;
            table-layout: fixed;
        }

        table colgroup col{
            width: 15%;
        }

        table colgroup col:nth-child(1){
            width: 40%;
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
            broder-bottom: 1px solid #f5f5f5;
            text-align: center;
            vertical-align: middle;
            word-break: break-all;
        }
    `

    return (
        <OrderList>
            <header className="orderListHeader">
                <h2 className="headerTitle">
                    나의 쇼핑내역
                </h2>
                <ul className="headerList">
                    <li>All</li>
                    <li>입금/결제</li>
                    <li>배송중</li>
                    <li>배송완료</li>
                    <li>구매확정</li>
                    <li>교환</li>
                    <li>교환완료</li>
                    <li>환불</li>
                    <li>환불완료</li>
                </ul>
            </header>
            <table className="orderListTable">
                <colgroup className="orderListColGroup">
                    <col className="orderListCol"></col>
                    <col className="orderListCol"></col>
                    <col className="orderListCol"></col>
                    <col className="orderListCol"></col>
                    <col className="orderListCol"></col>
                </colgroup>
                <thead className="orderListTableHead">
                    <tr className="orderListTableRow">
                        <th scope="col">
                            <div className="tableDiv">
                                제품 디테일
                            </div>
                        </th>
                        <th scope="col">
                            <div className="tableDiv">
                                제품 구매날짜
                            </div>
                        </th>
                        <th scope="col">
                            <div  className="tableDiv">
                                제품 주문번호
                            </div>
                        </th>
                        <th scope="col" colSpan="2">
                            <div className="tableDiv">
                                상태
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody className="orderListTableBody">
                    {tableList({loading, data:currentPosts})}
                </tbody>
            </table>
            <Pagination nowPage={itemListNum} postsPerPage={postsPerPage} totalPosts={totalPosts} paginate={paginate}></Pagination>
        </OrderList>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderList)
