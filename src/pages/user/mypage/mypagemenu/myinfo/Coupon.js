import Pagination from 'components/common/Pagination';
import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import styled, { css } from 'styled-components';

export const Coupon = () => {
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
                    <tr className="couponTableRow">
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
    const CouponList = styled.section`
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
            width: 100%;
            border-collapse: collapse;
            table-layout: fixed;
        }

        table colgroup col{
            width: 13.33%;
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
        <>
            <CouponList>
                <header className="couponListHeader">
                    <h2 className="headerTitle">
                        나의 쿠폰
                    </h2>
                    <ul className="headerList">
                        <li>최신순</li>
                        <li>할인순</li>
                    </ul>
                </header>
                <table className="couponListTable">
                    <colgroup className="couponListColGroup">
                        <col className="couponListCol"></col>
                        <col className="couponListCol"></col>
                        <col className="couponListCol"></col>
                        <col className="couponListCol"></col>
                        <col className="couponListCol"></col>
                        <col className="couponListCol"></col>
                    </colgroup>
                    <thead className="couponListTableHead">
                        <tr className="couponListTableRow">
                            <th scope="col">
                                <div className="tableDiv">
                                    쿠폰 번호
                                </div>
                            </th>
                            <th scope="col"  colspan="2">
                                <div className="tableDiv">
                                    쿠폰명
                                </div>
                            </th>
                            <th scope="col">
                                <div  className="tableDiv">
                                    할인금액
                                </div>
                            </th>
                            <th scope="col">
                                <div className="tableDiv">
                                    적용범위
                                </div>
                            </th>
                            <th scope="col">
                                <div className="tableDiv">
                                    유효기간
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="couponListTableBody">
                        {tableList({loading, data:currentPosts})}
                    </tbody>
                </table>
                <Pagination nowPage={itemListNum} postsPerPage={postsPerPage} totalPosts={totalPosts} paginate={paginate}></Pagination>
            </CouponList>
        </>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Coupon)
