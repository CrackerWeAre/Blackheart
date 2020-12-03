import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled, { css } from 'styled-components';

export const Grade = () => {
    const GradeList = styled.section`
        height : 100%;
        width: calc(100% - 250px);
        padding : 200px 0px 0px 0px;
        flex: none;
        margin-top : 100px;

        header {
            height : 40px;
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

        header h3 {
            width : 100%;
            margin-bottom: 12px;
            font-size: 18px;
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
            border-bottom: 1px solid #000000;
            text-align: center;
            vertical-align: middle;
            word-break: break-all;
        }
    `

    const GradeHeader = styled.div`
        height: 200px; 
        width: 100%;
        background-color: #f8f8f8;
        color: black;
        margin-bottom: 38px;

        .gradeHeader {
            padding: 30px;
            display: table;
            width: 100% !important;
            height: 100%;
        }

        .gradeHeader .headerMain {
            position: relative;
            vertical-align: middle;
            display: table-cell;
            text-align: left;
            
        }

        .gradeHeader .headerMain .headerMainTable {
            display: table;
            width: 100%;
            
        }

        .gradeHeader .headerMain .headerMainTable div{
            display: table-cell;
            padding-right: 24px;
            vertical-align: middle;
        }

        .gradeHeader .headerMain .headerMainTable .profileImg {
            width: 100px;
            height: 100px;
        }


        .gradeHeader .headerPoint {
            position: relative;
            width: 60%;
            vertical-align: middle;
            display: table-cell;
            text-align: center;
        }

        .gradeHeader .headerPoint::before {
            content: '';
            display: block;
            width: 1px;
            height: 100px;
            position: absolute;
            background: #e5e5e5;
            left: 0;
            top: 50%;
            margin-top: -50px;
        }
    `

    return (
        <GradeList>
            <header className="gradeListHeader">
                <h2 className="headerTitle">
                    나의 등급혜택
                </h2>
            </header>
            <GradeHeader>
                <div className="gradeHeader">
                    <div className="headerMain">
                        <div className="headerMainTable">
                            <div className="profileImg">
                                프로필img
                                없으면 등급img
                            </div>
                            <div className="profileDetails">
                                    <p>정윤도 님 안녕하세요. </p>
                                    <p>회원님의 등급은 실버입니다.</p>
                                    <p>누적 구매금액 : 0원</p>
                                    <p>구매 건수 : 0건</p>
                            </div>
                        </div>
                    </div>
                    <div className="headerPoint">
                        <p>구매건수 10건 누적 구매금액 30000원을 달성하면 다음달 실버로 승급됩니다.</p>
                        <span>(산정기간 : 2020.06.01 ~ 2020.11.30 배송 완료 된 주문 기준)</span><br/>
                        <span>※ 1개월 이전 구매상품에 대한 취소 이력에 의해 일부 오차가 발생할 수 있습니다.</span>
                    </div>
                </div>
            </GradeHeader>
            <header className="gradeListHeader">
                <h3 className="headerTitle">
                회원 등급 기준 안내
                </h3>
            </header>
            <table className="orderListTable">
                <colgroup className="orderListColGroup">
                    <col className="orderListCol"></col>
                    <col className="orderListCol"></col>
                    <col className="orderListCol"></col>
                </colgroup>
                <thead className="orderListTableHead">
                    <tr className="orderListTableRow">
                        <th scope="col">
                            <div className="tableDiv">
                                회원 등급
                            </div>
                        </th>
                        <th scope="col">
                            <div className="tableDiv">
                                등급 기준
                            </div>
                        </th>
                        <th scope="col">
                            <div  className="tableDiv">
                                등급 혜택
                            </div>
                        </th>
                    </tr>
                </thead>
				<tbody>
				<tr>
					<th scope="row">LV.1 브론즈</th>
					<td>회원가입 ~ 2,000점</td>
                    <td>1천원 쿠폰</td>
				</tr>
				<tr>
					<th scope="row">LV.2 실버</th>
					<td>2,001 ~ 10,000점</td>
                    <td>2천원 쿠폰</td>
				</tr>
				<tr>
					<th scope="row">LV.3 골드</th>
					<td>10,001 ~ 100,000점</td>
                    <td>3천원 쿠폰</td>
				</tr>
				<tr>
					<th scope="row">LV.4 플레티넘</th>
					<td>100,001 ~ 200,000점</td>
                    <td>4천원 쿠폰</td>
				</tr>
				<tr>
					<th scope="row">LV.5 다이아몬드</th>
					<td>200,001 ~ 500,000점</td>
                    <td>5천원 쿠폰</td>
				</tr>
				<tr>
					<th scope="row">LV.6 마스터</th>
					<td>500,001 ~ 1,000,000점</td>
                    <td>6천원쿠폰</td>
				</tr>
				<tr>
					<th scope="row">LV.7 그랜드마스터</th>
					<td>1,000,001 ~ 2,000,000점</td>
                    <td>7천원쿠폰</td>
				</tr>
				<tr>
					<th scope="row">LV.8 챌린저</th>
					<td>2,000,001점 ~</td>
                    <td></td>
				</tr>
				</tbody>
			</table>
        </GradeList>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Grade)
