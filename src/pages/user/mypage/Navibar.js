import React from 'react'
import styled, { css } from 'styled-components';
import { connect } from 'react-redux'

const NaviBar = styled.div`
    width : 250px;
    padding : 50px 50px 0px 0px;
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
export const Navibar = () => {
    return (
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
                    <li className="infoListItem"><a>주문내역조회</a></li>
                    <li className="infoListItem"><a>상품 리뷰</a></li>
                    <li className="infoListItem"><a>증빙서류 발급</a></li>
                </ul>
                <h3 className="infoListTitle">나의 계정설정</h3>
                <ul className="infoListContents">
                    <li className="infoListItem"><a>회원정보수정</a></li>
                    <li className="infoListItem"><a>회원등급</a></li>
                    <li className="infoListItem"><a>마일리지현황</a></li>
                    <li className="infoListItem"><a>쿠폰</a></li>
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
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Navibar)
