import React, { useState, useEffect, useCallback, createRef, useMemo } from 'react'
import styled, { css } from 'styled-components';
import Button from 'components/common/Button';
import produce from 'immer'
export const CartListForm = ({dataList, sendData}) => {

    
    console.log("list", dataList)
    const [loading, setLoading] = useState(true)
    const [tempList, setTempList] = useState(dataList)
    var newItem = produce(dataList, draft => draft)
    const handleChange = (e, item) => {
        if(e.target.checked){
            
            if(newItem){
                newItem=newItem.concat([item])
            }else{
                newItem=newItem.concat([item])
            }
        }else{
            
            if(newItem){
                newItem=newItem.filter(data => data !== item)
            }else{
                newItem=newItem.filter(data => data !== item)
            }
        }
    }

    const sendToPay = useCallback(
        () => {
            sendData(newItem);
        },
        [newItem],
    )
    
   
    // const dispatch = useDispatch();

    useEffect(() => {

        if(dataList)(setLoading(false))
        setTempList(dataList)

    }, [dataList])

    useEffect(() => {

    }, [tempList])

    const tableList = ({loading, data}) => {
        let number = 0;

        if(loading){
            return  <div> 로딩중 입니다. </div>
        } else {
            return data?.map((item)=>{

                var price = (parseInt(item.product.pPrice)*(100-parseInt(item.product.pDiscount))/100).toLocaleString();
                var delivary = 2500;
                var totalprice = (parseInt(item.product.pPrice)*(100-parseInt(item.product.pDiscount))/100*parseInt(item.cQuantity)+delivary).toLocaleString();
                const sendData = (e) => {
                    handleChange(e, item)
                }
                number++;

                return (
                    <tr className="cartTableRow" key={item.cID}>
                        <td>
                            <div>
                                <input 
                                    type="checkbox"
                                    defaultChecked
                                    onChange={sendData}
                                    value={item}
                                />
                            </div>
                        </td>
                        <td>
                            <div className="productDetail">
                                <a className="imgBox" href="/mypage/cart">
                                    <img src={item.product.pListImage} alt="상품이미지"/>
                                </a>
                                <ul className="productDetailist">
                                    <li className="name">{item.product.pName}</li>
                                    <li className="option">옵션 : {item.product.pOption}</li>
                                </ul>
                            </div>
                        </td>
                        <td>
                            <div className="productPrice">
                                {price}원
                            </div>
                        </td>
                        <td>
                            <ul className="productAmount">
                                <li className="item">-</li>
                                <li className="quantity">{item.cQuantity}개</li>
                                <li className="item">+</li>
                            </ul>
                        </td>
                        <td>
                            <div className="coupon">
                                0원 
                            </div>
                        </td>
                        <td>
                            <div className="delivery">
                                2,500원
                            </div>
                        </td>
                        <td>
                            <div className="fullPrice">
                                {totalprice}원
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
            list-style: none;

            li {
                list-style: none;
            }
        }



        table {
            width : 100%;
            border-collapse: collapse;
            table-layout: fixed;

            colgroup {
                col{
                    width: 12%;
                }
                col:nth-child(1){
                    width: 5%;
                }
                col:nth-child(2){
                    width: 35%;
                }
            }

            th {
                height: 52px;
                border-bottom: 1px solid #000000;
                vertical-align: middle;
                font-weight: normal;
            }
            td {
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
    
                .productAmount {
                    display: inline-block;
                    margin: auto;
                    li {
                        color: black;
                        float: left;
                        padding: 8px 16px;
                        text-decoration: none;

                        &.item{
                            background-color: #eee;
                            color: black;
                        }

                        &:hover:not(.item) {
                            background-color: #232323;
                            color: white;
                        }
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
                {console.log("hello")}
                <tbody className="cartListTableBody">
                    {tableList({loading, data:dataList})}
                    <tr className="cartTableRow" >
                        <td>
                            
                        </td>
                        <td>
                            
                        </td>
                        <td>
                            
                        </td>
                        <td>
                            
                        </td>
                        <td>
                            
                        </td>
                        <td>
                            
                        </td>
                        <td>
                            
                        </td>
                        <td>
                            <div className="pay">
                                <Button onClick={sendToPay}>선택 결제하기</Button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </CartList>
    )
}

export default CartListForm