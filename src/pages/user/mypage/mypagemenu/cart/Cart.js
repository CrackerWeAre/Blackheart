import React, { useState, useEffect, } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux'
import styled, { css } from 'styled-components';
import Pagination from 'components/common/Pagination';
import Button from 'components/common/Button';
import { cart } from 'modules/userinfo'

export const Cart = () => {

    const cartList = useSelector(state => state.userinfo.cart.list);
    // const { uEmail, uName:token } = useSelector(state => state.auth.currentUser)
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        
    };

    // const dispatch = useDispatch();

    useEffect(() => {
        
    }, [])

    const tableList = ({loading, data}) => {
        if(loading){
            return  <div> 로딩중 입니다. </div>
        } else {
            return data.map((item)=>{
                return (
                    <tr className="cartTableRow" key={item.oID}>
                        <td>
                            <div>
                                <input 
                                    type="checkbox"
                                    checked={item.checked}
                                    onChange={handleChange}
                                />
                            </div>
                        </td>
                        <td>
                            <div className="productDetail">
                                <a className="imgBox" href="/mypage/cart">
                                    <img src={item.pListImage} alt="상품이미지"/>
                                </a>
                                <ul className="productDetailist">
                                    <li className="name">{item.pName}</li>
                                    <li className="option">옵션 : {item.pOption}</li>
                                </ul>
                            </div>
                        </td>
                        <td>
                            <div className="productPrice">
                                {(parseInt(item.pPrice)*(100-parseInt(item.pDiscount))/100).toLocaleString()}원
                            </div>
                        </td>
                        <td>
                            <div className="productAmount">
                                {item.oQuantity}개
                            </div>
                        </td>
                        <td>
                            <div className="coupon">
                                2,500원 
                            </div>
                        </td>
                        <td>
                            <div className="delivery">
                                2,500원
                            </div>
                        </td>
                        <td>
                            <div className="fullPrice">
                            {(parseInt(item.pPrice)*(100-parseInt(item.pDiscount)*parseInt(item.oQuantity))/100).toLocaleString()}원
                            </div>
                        </td>
                        <td>
                            <div className="pay">
                                <Button> 결제하기</Button>
                            </div>
                        </td>
                    </tr>
                )
            })
        }
        
    };

    const CartList = styled.section`
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
            width: 12%;
        }

        table colgroup col:nth-child(1){
            width: 5%;
        }

        table colgroup col:nth-child(2){
            width: 35%;
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
        <CartList>
            <header className="cartListHeader">
                <h2 className="headerTitle">
                    쇼핑 카트
                </h2>
            </header>
            <table className="cartListTable">
                <colgroup className="cartListColGroup">
                    <col className="cartListCol"></col>
                    <col className="cartListCol"></col>
                    <col className="cartListCol"></col>
                    <col className="cartListCol"></col>
                    <col className="cartListCol"></col>
                    <col className="cartListCol"></col>
                    <col className="cartListCol"></col>
                    <col className="cartListCol"></col>
                </colgroup>
                <thead className="cartListTableHead">
                    <tr className="cartListTableRow">
                        <th scope="col">
                            <div className="tableDiv">
                                체크
                            </div>
                        </th>
                        <th scope="col">
                            <div className="tableDiv">
                                상품정보
                            </div>
                        </th>
                        <th scope="col">
                            <div className="tableDiv">
                                상품금액
                            </div>
                        </th>
                        <th scope="col">
                            <div  className="tableDiv">
                                수량
                            </div>
                        </th>
                        <th scope="col">
                            <div  className="tableDiv">
                                쿠폰
                            </div>
                        </th>
                        <th scope="col">
                            <div  className="tableDiv">
                                배송
                            </div>
                        </th>
                        <th scope="col">
                            <div className="tableDiv">
                                결제금액
                            </div>
                        </th>
                        <th scope="col">
                            <div className="tableDiv">
                                결제하기
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody className="cartListTableBody">
                    {tableList({loading, data:cartList})}
                </tbody>
            </table>
        </CartList>
    )
}


export default Cart
