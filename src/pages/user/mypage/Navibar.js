import React from 'react'
import styled, { css } from 'styled-components';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

const NaviBar = styled.div`
    width : 250px;
    padding : 0px 50px 0px 0px;
    flex: none;

    section {
        margin-bottom: 38px;
    }

    h3 {
        margin-bottom: 8px;
        font-size: 17px;
        line-height: 26px;
        font-weight: 800px;
    }

    ul {
        margin-bottom: 28px;
    }

    ul li {
        list-style: none;
    }

    ul li a {
        display: inline-block;
        padding: 10px 0;
        font-size: 15px;
        font-weight: 200px
        text-decoration: none
    }
`

const NavHeader = styled.div`
    position: absolute;
    height: 250px; 
    top: 200px;
    left: 300px;
    width: calc(100% - 350px);
    background-color: #000000;
    color: white;

    .naviHeader {
        padding: 50px 45px 50px 45px;
        display: table;
        width: 100% !important;
        height: 100%;
    }

    .naviHeader .headerMain {
        position: relative;
        vertical-align: middle;
        display: table-cell;
        text-align: center;
    }

    .naviHeader .headerPoint {
        position: relative;
        width: 25%;
        vertical-align: middle;
        display: table-cell;
        text-align: center;
    }

    .naviHeader .headerPoint::before {
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

    .naviHeader .headerCoupon {
        position: relative;
        width: 25%;
        vertical-align: middle;
        display: table-cell;
        text-align: center;
    }

    .naviHeader .headerCoupon::before {
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
export const Navibar = () => {
    return (
        <>
            <NavHeader>
                <div className="naviHeader">
                    <div className="headerMain">
                        <div className="tabled full-width">
                            <div>
                                <div></div>
                                <span>정보 수정</span>
                            </div>
                            <div>
                                <span>정윤도 님 안녕하세요.</span>
                                <div>누적 구매금액: 0원</div>
                            </div>
                        </div>
                    </div>
                    <div className="headerPoint">
                        <p>포인트</p>
                        <span>1,500</span>
                    </div>
                    <div className="headerCoupon">
                        <p>쿠폰</p>
                        <span>0</span>
                    </div>
                </div>
            </NavHeader>
            <NaviBar>
                <section className="shortInfo">
                    <div className="infoSummary">
                        <h2 className="infoSummaryTitle">사용자이름</h2>
                        <ul className="infoSummeryContents">
                            <li>장바구니</li>
                            <li></li>
                        </ul>
                    </div>
                </section>
                <section className="infoListContainer">
                    <h3 className="infoListTitle">나의 쇼핑정보</h3>
                    <ul className="infoListContents">
                        <li className="infoListItem"><Link to="/mypage/orderlist">주문내역조회</Link></li>
                        <li className="infoListItem"><Link to="/mypage/reviewlist">상품 리뷰</Link></li>
                        <li className="infoListItem"><a>증빙서류 발급</a></li>
                    </ul>
                    <h3 className="infoListTitle">나의 계정설정</h3>
                    <ul className="infoListContents">
                        <li className="infoListItem"><Link to="/mypage/myinfo">회원정보수정</Link></li>
                        <li className="infoListItem"><a>회원등급</a></li>
                        <li className="infoListItem"><a>마일리지현황</a></li>
                        <li className="infoListItem"><Link to="/mypage/coupon">쿠폰</Link></li>
                    </ul>
                    <h3 className="infoListTitle">고객센터</h3>
                    <ul className="infoListContents">
                        <li className="infoListItem"><a>1:1문의내역</a></li>
                        <li className="infoListItem"><a>상품 Q&A내역</a></li>
                        <li className="infoListItem"><a>공지사항</a></li>
                        <li className="infoListItem"><a>FAQ</a></li>
                        <li className="infoListItem"><a>고객의 소리</a></li>
                    </ul>
                </section>
            </NaviBar>
        </>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Navibar)
