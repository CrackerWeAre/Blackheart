import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import { faTruck } from "@fortawesome/free-solid-svg-icons";

const DrawerWrapper = styled.aside`
    font-family: 'Nanum Gothic', sans-serif;
    position: fixed;
    height: 100%;
    width: 180px;
    border-right: 1px solid rgba(0, 0, 0, 0.1);

    h1 {
        color: #7F7F7F;
        font-size: 0.8rem;
        text-align: left;
        padding: 10px 10px 0px 20px;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
    }

    h1:first-child {
        border-top: none;
    }

    ul {
        padding: 10px 10px;
    }

    ul li {
        padding: 8px;
        margin: 5px 0;
        border-radius: 4px;
    }

    ul li:hover {
        cursor: pointer;
        background: rgba(0, 0, 0, 0.1);
    }

    ul li a {
        color: #130D14;
    }

    ul li a div {
        display: flex;
        align-items: center;
    }

    ul li a div svg {
        width: 1.125rem!important;
        color: #130D14;
        text-align: center;
    }

    ul li a div span {
        font-size: 0.8rem;
        padding-left: 20px;
        font-weight: 600;
    }

    ul:last-child {
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
`;

// Navigator Drawer
const Drawer = () => {
    return (
        <DrawerWrapper> 
            <h1>상품관리</h1>
            <ul>
                <li>    
                    <Link to="/admin/product/create">
                        <div>
                            <FontAwesomeIcon icon={faEdit} />
                            <span>상품 등록</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/admin/product/discover">
                        <div>
                            <FontAwesomeIcon icon={faSearch} />
                            <span>상품 조회</span>
                        </div>
                    </Link>                        
                </li>
            </ul>

            <h1>회원관리</h1>
            <ul>
                <li>    
                    <Link to="/admin/user/discover">
                        <div>
                            <FontAwesomeIcon icon={faEdit} />
                            <span>회원정보 조회</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/admin/user/orderDiscover">
                        <div>
                            <FontAwesomeIcon icon={faSearch} />
                            <span>주문회원 조회</span>
                        </div>
                    </Link>                        
                </li>
            </ul>

            <h1>주문관리</h1>
            <ul>
                <li>    
                    <Link to="/admin/order/discover">
                        <div>
                            <FontAwesomeIcon icon={faStore} />
                            <span>전체 주문 조회</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/admin/order/delivery">
                        <div>
                            <FontAwesomeIcon icon={faTruck} />
                            <span>배송 관리</span>
                        </div>
                    </Link>                        
                </li>
            </ul>

            <h1>게시판관리</h1>
            <ul>
                <li>    
                    <Link to="/admin/board/discover">
                        <div>
                            <FontAwesomeIcon icon={faStore} />
                            <span>게시판 관리</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/admin/board/discover">
                        <div>
                            <FontAwesomeIcon icon={faTruck} />
                            <span>게시물 관리</span>
                        </div>
                    </Link>                        
                </li>
            </ul>
        </DrawerWrapper>
    );
};

export default Drawer;