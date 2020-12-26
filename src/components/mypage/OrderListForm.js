import React, { Component, useState, useEffect, useCallback } from 'react'
import { connect, useSelector } from 'react-redux'
import styled, { css } from 'styled-components';
import Pagination from 'components/common/Pagination';
import * as apis from 'lib/api/userinfo';

export const OrderListForm = ({dataList}) => {
    const [itemList, setItemList] = useState([])
    const [itemListNum, setItemListNum] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10)
    const [totalPosts, setTotalPosts] = useState(20)
    const [loading, setLoading] = useState(false)
    const indexOfLastPost = itemListNum * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const [currentPosts, setCurrentPosts] = useState(itemList?.slice(indexOfFirstPost, indexOfLastPost));

    const [tempList, setTempList] = useState([])

    useEffect(() => {
        setCurrentPosts(itemList?.slice(indexOfFirstPost, indexOfLastPost));
    }, [itemList, indexOfLastPost, indexOfFirstPost])

    const paginate = (numb) => {
        setItemListNum(numb)
    }

    useEffect(() => {
        setItemList(dataList)
        setTempList(dataList)
    }, [dataList])

    

    const OrderList = styled.section`
        width: calc(100% - 250px);
        flex: none;
        margin-top : 100px;

        header {
            height : 120px;
            margin-bottom: 38px;
            width : 100%;
            h2 {
                width : 100%;
                margin-bottom: 12px;
                font-size: 22px;
                line-height: 26px;
                font-weight: 800px;
            }
            ul {
                width : 100%;
                margin-bottom: 28px;

                li {
                    display: inline-block;
                    margin-right: 16px;        
                }
        
            }
        }

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
            colgroup {
                col{
                    width: 15%;
                }
                col:nth-child(1){
                    width: 40%;
                }
            }
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
            .productDetail {
                display: table;
                table-layout: fixed;
                width: 100%;
                line-height: 1.5;
                text-align: left;
                position: relative;
                .imgBox {
                    display: table-cell;
                    width: 80px;
                    padding-top: 96px;
                    vertical-algin: middle;

                    img {
                        height: 96px;
                        width: 80px;
                        position: absolute;
                        left: 0;
                        top: 50%;
                        transform: translateY(-50%);
                    }

                }

                .productDetailist {
                    display: table-cell;
                    padding-left: 10px;
                    vertical-align: middle;
                    li {
                        font-size: 14px;
                        line-height: 22px;
                    }
                    .name {
                        font-weight: bold;
                        display: block;
                        overflow: hidden
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }
                }
            }
        }
    `
    const tableList = ({loading, data}) => {
        if(loading){
            return  <div> 로딩중 입니다. </div>
        } else {
            return data.map((item)=>{
                return (
                    <tr className="orderTableRow" key={item.oID}>
                        <td>
                            <div className="productDetail">
                                <a className="imgBox">
                                    <img src={item.product.pListImage} alt="상품이미지"/>
                                </a>
                                <ul className="productDetailist">
                                    <li className="name">{item.pName}</li>
                                    <li className="option">옵션 : {item.pOption}</li>
                                </ul>
                            </div>
                        </td>
                        <td>
                            <div>
                                {item.oOrderDate.split(" ")[0]}
                            </div>
                        </td>
                        <td>
                            <div>
                                {item.oID}
                            </div>
                        </td>
                        <td>
                            <div className="productPrice">
                                <ul>
                                    <li className="price">{(parseInt(item.pPrice)*(100-parseInt(item.pDiscount))/100).toLocaleString()}원</li>
                                    <li className="quantity">{item.oQuantity}개</li>
                                </ul>
                            </div>
                        </td>
                        <td>
                            <div>
                                {item.oStatus}
                            </div>
                        </td>
                    </tr>
                )
            })
        }
        
    };

    const filterItem = useCallback(
        (data) => {
            switch(data.target.innerText){
                case "All" : 
                    setItemList(tempList)
                    break;
                case "주문 접수" :
                    setItemList(tempList.filter(data => data.oStatus.includes("주문 접수")))
                    break;
                case "결제 완료" :
                    setItemList(tempList.filter(data => data.oStatus.includes("결제 완료")))
                    break;
                case "상품 준비 중" :
                    setItemList(tempList.filter(data => data.oStatus.includes("출고")))
                    break;
                case "배송 중" :
                    setItemList(tempList.filter(data => data.oStatus.includes("배송 중")))
                    break;
                case "배송 완료" :
                    setItemList(tempList.filter(data => data.oStatus.includes("배송 완료" && "구매 확정")))
                    break;
                case "취소/교환/환불/기타" :
                    setItemList(tempList.filter(data => data.oStatus.includes("취소" || "오류" || "교환" || "환불" )))
                    break;
                default:
                    break;

            }
        },
        [tempList],
    )

    return (
        <OrderList>
            <header className="orderListHeader">
                <h2 className="headerTitle">
                    나의 쇼핑내역
                </h2>
                <ul className="headerList">
                    <li onClick={filterItem} >All</li>
                    <li onClick={filterItem} >주문 접수</li>
                    <li onClick={filterItem} >결제 완료</li>
                    <li onClick={filterItem} >상품 준비 중</li>
                    <li onClick={filterItem} >배송 중</li>
                    <li onClick={filterItem} >배송 완료</li>
                    <li onClick={filterItem} >취소/교환/환불/기타</li>
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
                                제품 세부사항
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
                        <th scope="col">
                            <div  className="tableDiv">
                                제품 금액(수량)
                            </div>
                        </th>
                        <th scope="col">
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

export default OrderListForm