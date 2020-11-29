import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled, { css } from 'styled-components';

export const InfoEdit = () => {
    const InfoSection = styled.section`
        height : 100%;
        width: calc(100% - 250px);
        padding : 300px 0px 0px 0px;
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
            broder-bottom: 1px solid #f5f5f5;
            text-align: center;
            vertical-align: middle;
            word-break: break-all;
        }
    `

    return (
        <>
            <InfoSection>
                <header className="infoHeader">
                    <h2 className="headerTitle">
                        마이페이지
                    </h2>
                    <ul className="headerList">
                        <li>내 정보 관리</li>
                        <li>주소록 관리</li>
                    </ul>
                </header>
                <table className="myInfoTable">
                    <colgroup className="myInfoColGroup">
                        <col className="myInfoCol"></col>
                        <col className="myInfoCol"></col>
                        <col className="myInfoCol"></col>
                    </colgroup>
                    <tbody className="myInfoTableBody">
                        <tr className="myInfoTableRow">
                            <td>
                                
                            </td>
                        </tr>
                    </tbody>
                </table>
            </InfoSection>
        </>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoEdit)
