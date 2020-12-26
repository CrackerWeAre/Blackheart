import React from 'react'
import styled, { css } from 'styled-components';

function OrderProcess() {

    const OrderTable = styled.section`
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

        table {
            width : 100%;
            border-collapse: collapse;
            table-layout: fixed;
            colgroup {
                col{
                    width: 15%;
                }
                col:nth-child(2){
                    width: 70%;
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
                            
            }
        }
    `
 
    return (
        <OrderTable>
            <table className="orderProcessListTable">
                <colgroup className="orderProcessListColGroup">
                    <col className="orderProcessListCol"></col>
                    <col className="orderProcessListCol"></col>
                    <col className="ordeProcessrListCol"></col>
                </colgroup>
                <thead className="orderProcessListTableHead">
                    <tr className="orderProcessListTableRow">
                        <th scope="col">
                            <div className="tableDiv">
                                주문 상황
                            </div>
                        </th>
                        <th scope="col">
                            <div className="tableDiv">
                                세부 내용
                            </div>
                        </th>
                        <th scope="col">
                            <div  className="tableDiv">
                                비고
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody className="orderProcessListTableBody">
                    <tr className="orderTableRow" >
                        <td>
                            <div className="productDetail">
                                주문 접수
                            </div>
                        </td>
                        <td>
                            <div>
                               
                            </div>
                        </td>
                        <td>
                            
                        </td>
                    
                    </tr>
                    <tr className="orderTableRow" >
                        <td>
                            <div className="productDetail">
                                결제 완료
                            </div>
                        </td>
                        <td>
                            <div>
                               
                            </div>
                        </td>
                        <td>
                            
                        </td>
                    
                    </tr>
                    <tr className="orderTableRow" >
                        <td>
                            <div className="productDetail">
                                출고 처리 중
                            </div>
                        </td>
                        <td>
                            <div>
                               
                            </div>
                        </td>
                        <td>
                            
                        </td>
                    
                    </tr>
                    <tr className="orderTableRow" >
                        <td>
                            <div className="productDetail">
                                출고 완료
                            </div>
                        </td>
                        <td>
                            <div>
                               
                            </div>
                        </td>
                        <td>
                            
                        </td>
                    
                    </tr>
                    <tr className="orderTableRow" >
                        <td>
                            <div className="productDetail">
                                배송 중
                            </div>
                        </td>
                        <td>
                            <div>
                               
                            </div>
                        </td>
                        <td>
                            
                        </td>
                    
                    </tr>
                    <tr className="orderTableRow" >
                        <td>
                            <div className="productDetail">
                                배송 완료
                            </div>
                        </td>
                        <td>
                            <div>
                               
                            </div>
                        </td>
                        <td>
                            
                        </td>
                    
                    </tr>
                    <tr className="orderTableRow" >
                        <td>
                            <div className="productDetail">
                                구매 확정
                            </div>
                        </td>
                        <td>
                            <div>
                               
                            </div>
                        </td>
                        <td>
                            
                        </td>
                    
                    </tr>
                    <tr className="orderTableRow" >
                        <td>
                            <div className="productDetail">
                                구매 취소
                            </div>
                        </td>
                        <td>
                            <div>
                               
                            </div>
                        </td>
                        <td>
                            
                        </td>
                    
                    </tr>
                    <tr className="orderTableRow" >
                        <td>
                            <div className="productDetail">
                                결제 오류
                            </div>
                        </td>
                        <td>
                            <div>
                               
                            </div>
                        </td>
                        <td>
                            
                        </td>
                    
                    </tr>
                    <tr className="orderTableRow" >
                        <td>
                            <div className="productDetail">
                                교환 요청
                            </div>
                        </td>
                        <td>
                            <div>
                               
                            </div>
                        </td>
                        <td>
                            
                        </td>
                    
                    </tr>
                    <tr className="orderTableRow" >
                        <td>
                            <div className="productDetail">
                                교환 주문 접수
                            </div>
                        </td>
                        <td>
                            <div>
                               
                            </div>
                        </td>
                        <td>
                            
                        </td>
                    
                    </tr>
                    <tr className="orderTableRow" >
                        <td>
                            <div className="productDetail">
                                교환 완료
                            </div>
                        </td>
                        <td>
                            <div>
                               
                            </div>
                        </td>
                        <td>
                            
                        </td>
                    
                    </tr>
                    <tr className="orderTableRow" >
                        <td>
                            <div className="productDetail">
                                교환 취소
                            </div>
                        </td>
                        <td>
                            <div>
                               
                            </div>
                        </td>
                        <td>
                            
                        </td>
                    
                    </tr>
                    <tr className="orderTableRow" >
                        <td>
                            <div className="productDetail">
                                환불 요청
                            </div>
                        </td>
                        <td>
                            <div>
                               
                            </div>
                        </td>
                        <td>
                            
                        </td>
                    
                    </tr>
                    <tr className="orderTableRow" >
                        <td>
                            <div className="productDetail">
                                환불 처리 중
                            </div>
                        </td>
                        <td>
                            <div>
                               
                            </div>
                        </td>
                        <td>
                            
                        </td>
                    
                    </tr>
                    <tr className="orderTableRow" >
                        <td>
                            <div className="productDetail">
                            환불 완료
                            </div>
                        </td>
                        <td>
                            <div>
                               
                            </div>
                        </td>
                        <td>
                            
                        </td>
                    
                    </tr>
                </tbody>
            </table>
        </OrderTable>
    )
}

export default OrderProcess
