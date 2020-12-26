import React , { useState, useEffect } from 'react'
import styled from 'styled-components';
import Input from 'components/common/Input';
import Button from 'components/common/Button';
import { BirthSelectForm } from './BirthSelectForm';
import Select from '../common/Select'

const InfoWrapper = styled.div`
    height : 100%;
    width: calc(100% - 250px);
    flex: none;
    margin-top : 100px;
`;

const InfoSelect = styled(Select)`
    margin-top: 0rem!important;
`;


const ErrorMessage = styled.div`
    display: flex;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    color: #ff4949;
    text-align: start;
    font-size: 0.75rem;
    font-weight: 400;
    margin-top: .3125rem;
`;

const BtnMt = styled(Button)`
    margin-top: 1.5rem;
`;

const FormInput = styled.div`
    position: relative;

    div {
        
        padding: .53125rem .75rem;
        font-family: 'Poppins',sans-serif;
        font-size: 1rem;

        button {
            position: absolute;
            right: 8px;
            top: 50%;
            transform: translateY(-20%);
            outline: none;
            background-color: #130D14;
            border-color: #130D14;
            border-radius: 3px;
            cursor: pointer;

            span {
                font-size: .75rem;
                line-height: 1.714286;
                color: #fff;
                font-family: 'Poppins', sans-serif;
            }
        }
    }
`;

const InfoInput = styled(Input)`
    margin-top: 0rem!important;
`

const Header = styled.header`
   
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
`;

const InfoContents = styled.div`

        table {
            width: 100%;
            border-collapse: collapse;
            table-layout: fixed;
            
        }

        table colgroup col:1th {
            width: 20%;
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

            div {
                display: flex;
            }

        }
`;
const MyInfoForm = ({ type, form, onChange, onSubmit, onClick }) => {
    
    return (
        <InfoWrapper>
            <Header>
                <h2 className="headerTitle">
                    마이페이지
                </h2>
                <ul className="headerList">
                    <li>내 정보 관리</li>
                    <li>주소록 관리</li>
                </ul>
            </Header>
            <InfoContents>
                <form onSubmit={onSubmit}>
                    <table className="myInfoListTable">
                        <colgroup className="myInfoListColGroup">
                            <col className="myInfoListCol"></col>
                            <col className="myInfoListCol"></col>
                            <col className="myInfoListCol"></col>
                            <col className="myInfoListCol"></col>
                            <col className="myInfoListCol"></col>
                        </colgroup>
                        <tbody className="myInfoListTableBody">
                            <tr className="myInfoTableRow">
                                <td>
                                    <div>
                                        사용자명
                                    </div>
                                </td>
                                <td colSpan="3">
                                    <FormInput>
                                        <InfoInput
                                            type="text"
                                            name="username"
                                            id="username"
                                            value={form.username}
                                            onChange={onChange}
                                        />
                                    </FormInput>
                                </td>
                                <td>
                                    <div>
                                        
                                    </div>
                                </td>
                            </tr>
                            <tr className="myInfoTableRow">
                                <td>
                                    <div>
                                        유저 이메일
                                    </div>
                                </td>
                                <td colSpan="3">
                                    <FormInput>
                                        <InfoInput
                                            type="text"
                                            name="email"
                                            id="email"
                                            value={form.email}
                                            onChange={onChange}
                                        />
                                        <div>@</div>
                                        <InfoInput 
                                            type="text"
                                            name="emailsite"
                                            id="emailsite" 
                                            value={form.emailsite} 
                                            onChange={onChange} 
                                            placeholder="이메일을 선택하세요." 
                                        /> 
                                        <InfoSelect 
                                            name="emailsite"
                                            id="emailsite"
                                            value={form.emailsite}
                                            onChange={onChange}
                                        >
                                            <option value="">직접 입력하기</option>
                                            <option value="gmail.com">gmail.com</option>
                                            <option value="naver.com">naver.com</option>
                                            <option value="icloud.com">icloud.com</option>
                                            <option value="hanmail.net">hanmail.net</option>
                                            <option value="nate.com">nate.com</option>
                                        </InfoSelect>
                                    </FormInput>
                                </td>
                                <td>
                                    <div>
                                        
                                    </div>
                                </td>
                            </tr>
                            <tr className="myInfoTableRow">
                                <td>
                                    <div>
                                        전화번호
                                    </div>
                                </td>
                                <td colSpan="3">
                                    <FormInput>
                                        <InfoSelect name="phonefirstnum" id="phonefirstnum" value={form.phonefirstnum? form.phonefirstnum : "010"} onChange={onChange}>
                                                <option value="02" >02</option>
                                                <option value="010" >010</option>
                                                <option value="011" >011</option>
                                                <option value="016" >016</option>
                                                <option value="017" >017</option>
                                                <option value="019" >019</option>
                                                <option value="018" >018</option>
                                                <option value="031" >031</option>
                                                <option value="032" >032</option>
                                                <option value="033" >033</option>
                                                <option value="041" >041</option>
                                                <option value="042" >042</option>
                                                <option value="043" >043</option>
                                                <option value="051" >051</option>
                                                <option value="052" >052</option>
                                                <option value="053" >053</option>
                                                <option value="054" >054</option>
                                                <option value="055" >055</option>
                                                <option value="061" >061</option>
                                                <option value="062" >062</option>
                                                <option value="063" >063</option>
                                                <option value="064" >064</option>
                                                <option value="070" >070</option>
                                                <option value="080" >080</option>
                                                <option value="0503" >0503</option>
                                                <option value="0505" >0505</option>
                                                <option value="0507" >0507</option>
                                        </InfoSelect>
                                        <InfoInput 
                                            type="text" 
                                            name="phonemiddlenum" 
                                            id="phonemiddlenum" 
                                            value={form.phonemiddlenum} 
                                            onChange={onChange} 
                                            maxLength="4"
                                        />
                                        <InfoInput 
                                            type="text" 
                                            name="phonelastnum" 
                                            id="phonelastnum" 
                                            value={form.phonelastnum} 
                                            onChange={onChange}
                                            maxLength="4"
                                        />
                                    </FormInput>
                                </td>
                                <td>
                                    <div>
                                        
                                    </div>
                                </td>
                            </tr>
                            <tr className="myInfoTableRow">
                                <td>
                                    <div>
                                        주소
                                    </div>
                                </td>
                                <td colSpan="3">
                                    <FormInput>
                                        <InfoInput
                                            type="text"
                                            name="address"
                                            id="address"
                    
                                            value={form.address}
                                            onChange={onChange}
                                        />
                                    </FormInput>
                                </td>
                                <td>
                                    <div>
                                        
                                    </div>
                                </td>
                            </tr>
                            <tr className="myInfoTableRow">
                                <td>
                                    <div>
                                        생년월일
                                    </div>
                                </td>
                                <td colSpan="3">
                                    <BirthSelectForm birthyear={form.birthyear} birthmonth={form.birthmonth} birthday={form.birthday} onChange={onChange}></BirthSelectForm>
                                </td>
                                <td>
                                    <div>
                                        
                                    </div>
                                </td>
                            </tr>
                            <tr className="myInfoTableRow">
                                <td>
                                    <div>
                                        
                                    </div>
                                </td>
                                <td colSpan="3">
                                    <BtnMt fullWidth>수정하기</BtnMt>
                                </td>
                                <td>
                                    <div>
                                        
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    
                </form>
                
            </InfoContents>
        </InfoWrapper>
    )
}

export default MyInfoForm
