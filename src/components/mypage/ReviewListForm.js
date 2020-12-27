import React, {useState, useEffect} from 'react'
import Pagination from 'components/common/Pagination';
import styled, { css } from 'styled-components';
import Item from '../../../node_modules/semantic-ui-react/dist/commonjs/views/Item/Item';

const ReviewListForm = ({dataList}) => {
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
        console.log(dataList)
        setItemList(dataList)
        setTempList(dataList)
    }, [dataList])


    const makeStart = (number) => {
        let star = "";
        for (number; number>0; number--) {
            star = star + "★"
        }
        if(star.length<5){
            var num = 5-star.length
            for (num; num>0; num--){
                star = star + "☆"
            }
        }
        return star

    } 
    const tableList = ({loading, data}) => {
        if(loading){
            return  <div> 로딩중 입니다. </div>
        } else {
            return data?.map((item)=>{
                return (
                    <tr className="reviewTableRow">
                        <td>
                            <div className="productDetail">
                            <a className="imgBox">
                            <img src={item.product.pListImage} alt="상품이미지"/>
                            </a>
                                <ul className="productDetailist">
                                    <li className="name">{item.product.pName}</li>
                                    <li className="option">옵션 : {item.product.pOption}</li>
                                </ul>
                            </div>
                        </td>
                        <td>
                            <div className="reviewContent">
                                <ul>
                                    <li className="title">{item.rTitle}</li>
                                    <li className="content">{item.rContent}</li>
                                </ul>
                            </div>
                        </td>
                        <td>
                            <div>
                                {item.rCreateDate.split(" ")[0]}
                            </div>
                        </td>
                        <td>
                            <div>
                                {item.rFile!==" "? <img src={item.rFile} alt="리뷰이미지"/> : "이미지가 없습니다."}
                            </div>
                        </td>
                        <td>
                            <div>
                                {makeStart(item.rRate)}
                            </div>
                        </td>
                    </tr>
                )
            })
        }
        
    };

    const ReviewList = styled.section`

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
            margin-right: 16px;        }

        ul {
            margin-bottom: 28px;
        }

        ul, li {
            list-style: none;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            table-layout: fixed;
            cell-padding: 0px;

            colgroup {
                    col {
                        width: 15%;
                    }
                    col:nth-child(1){
                        width: 25%;
                    }
                    col:nth-child(2) {
                        width: 30%;
                    }
            }   


            th {
                height: 52px;
                border-bottom: 1px solid #000000;
                vertical-align: middle;
                font-weight: normal;
            }
            
            td {

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

                .reviewContent {
                    display: table-cell;
                    padding-left: 10px;
                    height: 96px;
                    text-align: left;
                    line-height: 1.5;
                    width: 100%;
                    margin-bottom: auto;
                    .content {
                        font-size: 12px;
                        padding-top: 5px;
                    }
                }
            }
        }

    ` 

    return (
        <ReviewList>
            <header className="reviewListHeader">
                <h2 className="headerTitle">
                    나의 리뷰내역
                </h2>
                <ul className="headerList">
                    <li>작성 가능한 리뷰</li>
                    <li>내 리뷰</li>
                </ul>
            </header>
            <table className="reviewListTable">
                <colgroup className="reviewListColGroup">
                    <col className="reviewListCol"></col>
                    <col className="reviewListCol"></col>
                    <col className="reviewListCol"></col>
                    <col className="reviewListCol"></col>
                    <col className="reviewListCol"></col>
                </colgroup>
                <thead className="reviewListTableHead">
                    <tr className="reviewListTableRow">
                        <th scope="col">
                            <div className="tableDiv">
                                제품 디테일
                            </div>
                        </th>
                        <th scope="col">
                            <div className="tableDiv">
                                리뷰 등록 날짜
                            </div>
                        </th>
                        <th scope="col">
                            <div  className="tableDiv">
                                리뷰 내용
                            </div>
                        </th>
                        <th scope="col">
                            <div className="tableDiv">
                                리뷰 이미지
                            </div>
                        </th>
                        <th scope="col">
                            <div className="tableDiv">
                                리뷰 별점
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody className="reviewListTableBody">
                    {tableList({loading, data:currentPosts})}
                </tbody>
            </table>
            <Pagination  nowPage={itemListNum} postsPerPage={postsPerPage} totalPosts={totalPosts} paginate={paginate}></Pagination>
        </ReviewList>
    )
}

export default ReviewListForm
