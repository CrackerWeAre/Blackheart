import Pagination from 'components/common/Pagination';
import * as apis from 'lib/api/userinfo';
import React, { Component, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import styled, { css } from 'styled-components';

export const OrderList = ({data}) => {

    const [itemList, setItemList] = useState([])
    const [itemListNum, setItemListNum] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10)
    const [totalPosts, setTotalPosts] = useState(20)
    const [loading, setLoading] = useState(false)
    const [filter, setFilter] = useState(0)
    const indexOfLastPost = itemListNum * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const [currentPosts, setCurrentPosts] = useState(itemList.slice(indexOfFirstPost, indexOfLastPost));

    const setStatus = (data) => {
        setFilter(data.target.id)
        console.log(data.target.id)
    }

    const findStatus = (data) => {
        var output = "주문접수";
        if(data==="1"){
            output = "입금확인"
        }else if(data==="2"){
            output = "출고 처리 중"
        }else if(data==="3"){
            output = "출고 완료"
        }else if(data==="4"){
            output = "배송 시작"
        }else if(data==="5"){
            output = "배송 완료"
        }else if(data==="6"){
            output = "구매 확정"
        }else if(data==="7"){
            output = "구매 취소"
        }else if(data==="8"){
            output = "결제 오류"
        }else if(data==="9"){
            output = "교환 요청"
        }else if(data==="10"){
            output = "교환 주문 접수"
        }else if(data==="11"){
            output = "교환 완료"
        }else if(data==="12"){
            output = "교환 취소"
        }else if(data==="13"){
            output = "환불 요청"
        }else if(data==="14"){
            output = "환불 처리 중"
        }else if(data==="15"){
            output = "환불 완료"
        }

        return output;
    }

    const loadData = async() => {
        const itemList = await apis.userOrder({id:31})
        console.log(itemList)
        if(itemList.status===200){
            setItemList(itemList.data.result)
        }
    }
    
    useEffect(() => {
        loadData()
    }, [])

    useEffect(() => {
        setCurrentPosts(itemList.slice(indexOfFirstPost, indexOfLastPost));
    }, [itemList, indexOfLastPost, indexOfFirstPost])

    const paginate = (numb) => {
        setItemListNum(numb)
    }

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
                                    <img src={item.pListImage} alt="상품이미지"/>
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
                                {findStatus(item.oStatus)}
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
            margin-right: 16px;        
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

    return (
        <OrderList>
            <header className="orderListHeader">
                <h2 className="headerTitle">
                    나의 쇼핑내역
                </h2>
                <ul className="headerList">
                    <li onClick={setStatus} id="1">All</li>
                    <li onClick={setStatus} id="2">주문접수</li>
                    <li onClick={setStatus} id="3">결제완료</li>
                    <li onClick={setStatus} id="4">상품준비중</li>
                    <li onClick={setStatus} id="5">배송중</li>
                    <li onClick={setStatus} id="6">배송완료</li>
                    <li onClick={setStatus} id="7">취소/교환/환불</li>
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

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderList)
