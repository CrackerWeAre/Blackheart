import React from 'react'
import styled, { css } from 'styled-components';
import { connect, useSelector } from 'react-redux'
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
        li {
            list-style: none;
        }
        .nav_list {

        }
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

    a {
        color: white;
        :hover {
            color : gray;
        }
    }

    .naviHeader {
        padding: 50px 45px 50px 45px;
        display: table;
        width: 100% !important;
        height: 100%;

        .headerMain {
            position: relative;
            vertical-align: middle;
            display: table-cell;
            text-align: center;

            
        }

        .headerCoupon {
            position: relative;
            width: 25%;
            vertical-align: middle;
            display: table-cell;
            text-align: center;

            ::before {
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
        
        }

        .headerPoint {
            position: relative;
            width: 25%;
            vertical-align: middle;
            display: table-cell;
            text-align: center;
    
            ::before {
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
        }
    }

`
export const Navibar = () => {
    const state = useSelector(state => state?.userinfo.mystatus)
    return (
        <>
            <NavHeader>
                <div className="naviHeader">
                    <div className="headerMain">
                        <div className="tabled full-width">
                            <ul>
                                <li><Link to="/mypage/myinfo">정보 수정</Link></li>
                                <li>{state?.username? state?.username :  "사용자님 " } 안녕하세요.</li>
                                <li><div>누적 구매금액: 0원</div></li>
                            </ul>
                        </div>
                    </div>
                    <div className="headerPoint">
                    <ul>
                        <li><Link to="/mypage/point">포인트</Link></li>
                        <li>누적 구매금액 : {state?.acculated ? state?.acculated :  "0" }원</li>
                    </ul>
                    </div>
                    <div className="headerCoupon">
                    <ul>
                        <li><Link to="/mypage/coupon">쿠폰</Link></li>
                        <li>쿠폰 : {state?.coupon ? state?.coupon :  "0" }개</li>
                    </ul>
                    </div>
                </div>
            </NavHeader>
            <NaviBar>
                <section className="shortInfo">
                    <div className="infoSummary">
                        <h2 className="infoSummaryTitle">{state?.username? state?.username : "사용자님"}의 정보</h2>
                        <ul className="infoSummeryContents">
                            <li><Link to="/mypage/cart">장바구니</Link></li>
                            <li></li>
                        </ul>
                    </div>
                </section>
                <section className="infoListContainer">
                    <h3 className="infoListTitle">나의 쇼핑정보</h3>
                    <ul className="infoListContents">
                        <li className="infoListItem"><Link to="/mypage/orderlist">주문내역조회</Link></li>
                        <li className="infoListItem"><Link to="/mypage/reviewlist">상품 리뷰</Link></li>
                    </ul>
                    <h3 className="infoListTitle">나의 계정설정</h3>
                    <ul className="infoListContents">
                        <li className="infoListItem"><Link to="/mypage/myinfo">회원정보수정</Link></li>
                        <li className="infoListItem"><Link to="/mypage/grade">회원등급</Link></li>
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
