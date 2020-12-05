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
                <form name="frmjoin" id="frmjoin" method="post">
                    <input type="hidden" name="customertype" value=""/>
                    <input type="hidden" name="birthdate" id="birthdate" value="1991-02-03"/>
                    <input type="hidden" name="custtype" value="03"/>
                    <input type="hidden" name="cust_id" id="cust_id" value="000000000"/>
                    <input type="hidden" name="isChangePwd" id="isChangePwd" value="N"/>
                    <input type="hidden" name="isChangeHp" id="isChangeHp" value="N"/>
                    <input type="hidden" name="cno" id="cno" value="5350392"/>
                    <input type="hidden" name="cid" id="cid" value="truenorthj@naver.com"/>
                    <input type="hidden" name="gender" id="gender" value="01"/>
                    <input type="hidden" name="solarlunartype"/>
                    <input type="hidden" name="isHome"/>
                    <input type="hidden" name="recomID"/>
                    <input type="hidden" name="recomidcd"/>
                    <input type="hidden" name="CertNum" id="CertNum" value=""/>
                    <input type="hidden" name="CertCode" id="CertCode" value=""/>
                    <table className="tbl_modify">
                        <colgroup>
                            <col width="315">
                            </col>
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>이메일 아이디</th>
                                <td id="td_email_id">
                                    t********j@naver.com

                                </td>
                            </tr>
                            <tr>
                                <th>이름</th>
                                <td>
                                    <div className="info_name">
                                        <p className="txt_name" id="td_name">
                                            <input type="text" id="custname" name="custname" value="소셜유저" placeholder="" />
                                        </p>
                                        <div className="correct_wrap">
                                            <p id="validation_name" className="incorrect" >이름을 입력해주세요</p>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                                <tr>
                                    <th>생년월일</th>
                                    <td id="td_birth">****-**-**</td>
                                </tr>

                            <tr>
                                <th>성별</th>
                                <td>
                                    <div className="select_box_wrap">
                                        <div className="select_box gender_box">
                                            <span className="input_button">
                                                <input type="radio" name="gender" id="female" value="female" disabled=""/>
                                                <label for="female">여성</label>
                                            </span>
                                            <span className="input_button">
                                                <input type="radio" name="gender" id="male" value="male" checked=""/>
                                                <label for="male">남성</label>
                                            </span>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="member_info_phone">
                                <th>휴대폰번호</th>
                                <td>
                                    <div className="txt_phone_num" id="td_phone_num">
                                        <span className="phone_num">미인증</span>
                                        <button className="btn gray small w140 open-layer open-personal_certification" id="btn-certification" type="button" name="button">본인인증</button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>전화번호</th>
                                <td>
                                    <p className="phone">
                                        <select id="tel1" name="tel1" className="normal" >
                                            <option value="">선택</option>
                                                <option value="0002">02</option>
                                                <option value="0010">010</option>
                                                <option value="0011">011</option>
                                                <option value="0016">016</option>
                                                <option value="0017">017</option>
                                                <option value="0018">018</option>
                                                <option value="0019">019</option>
                                                <option value="0031">031</option>
                                                <option value="0032">032</option>
                                                <option value="0033">033</option>
                                                <option value="0041">041</option>
                                                <option value="0042">042</option>
                                                <option value="0043">043</option>
                                                <option value="0051">051</option>
                                                <option value="0052">052</option>
                                                <option value="0053">053</option>
                                                <option value="0054">054</option>
                                                <option value="0055">055</option>
                                                <option value="0061">061</option>
                                                <option value="0062">062</option>
                                                <option value="0063">063</option>
                                                <option value="0064">064</option>
                                                <option value="0070">070</option>
                                                <option value="0080">080</option>
                                                <option value="0503">0503</option>
                                                <option value="0505">0505</option>
                                                <option value="0507">0507</option>
                                        </select><div  className="select-list-box " wck="tel1" tabindex="0"><div tabindex="0" title=" " className="selected-headline" ><span>선택</span></div><ul className="select-list" ><li><a title="선택" href={"/"} className="select-list-link select-list-selected" >선택</a></li><li><a title="02" href={"/"} className="select-list-link" >02</a></li><li><a title="010" href={"/"} className="select-list-link" >010</a></li><li><a title="011" href={"/"} className="select-list-link" >011</a></li><li><a title="016" href={"/"} className="select-list-link" >016</a></li><li><a title="017" href={"/"} className="select-list-link" >017</a></li><li><a title="018" href={"/"} className="select-list-link" >018</a></li><li><a title="019" href={"/"} className="select-list-link" >019</a></li><li><a title="031" href={"/"} className="select-list-link" >031</a></li><li><a title="032" href={"/"} className="select-list-link" >032</a></li><li><a title="033" href={"/"} className="select-list-link" >033</a></li><li><a title="041" href={"/"} className="select-list-link" >041</a></li><li><a title="042" href={"/"} className="select-list-link" >042</a></li><li><a title="043" href={"/"} className="select-list-link" >043</a></li><li><a title="051" href={"/"} className="select-list-link" >051</a></li><li><a title="052" href={"/"} className="select-list-link" >052</a></li><li><a title="053" href={"/"} className="select-list-link" >053</a></li><li><a title="054" href={"/"} className="select-list-link" >054</a></li><li><a title="055" href={"/"} className="select-list-link" >055</a></li><li><a title="061" href={"/"} className="select-list-link" >061</a></li><li><a title="062" href={"/"} className="select-list-link" >062</a></li><li><a title="063" href={"/"} className="select-list-link" >063</a></li><li><a title="064" href={"/"} className="select-list-link" >064</a></li><li><a title="070" href={"/"} className="select-list-link" >070</a></li><li><a title="080" href={"/"} className="select-list-link" >080</a></li><li><a title="0503" href={"/"} className="select-list-link" >0503</a></li><li><a title="0505" href={"/"} className="select-list-link" >0505</a></li><li><a title="0507" href={"/"} className="select-list-link" >0507</a></li></ul></div>
                                        &nbsp;
                                        <input type="text" id="tel2" name="tel2" value="" placeholder=""  gubun="num" maxlength="4"/>
                                        <input type="text" id="tel3" name="tel3" value="" placeholder=""  gubun="num" maxlength="4"/>
                                    </p>
                                    <p className="correct"></p>
                                    <p></p>
                                </td>
                            </tr>
                            <tr>
                                <th>이메일 <span>*</span></th>
                                <td className="pb10 pt10">
                                    <p className="email">
                                        <input type="text" id="email1" name="email1" value="truenorthj" placeholder="truenorthj" />
                                        <span className="txt_email">@</span>
                                        <input type="text" id="email2" name="email2" value="naver.com" placeholder="naver.com" className="mail_domain" />
                                        <select className="normal mail_domain_select" >
                                            <option value="write">직접입력</option>
                                                <option value="01">naver.com</option>
                                                <option value="02">gmail.com</option>
                                                <option value="03">hanmail.net</option>
                                                <option value="04">nate.com</option>
                                                <option value="05">hotmail.com</option>
                                                <option value="08">yahoo.com</option>
                                                <option value="12">lycos.co.kr</option>
                                        </select><div  className="select-list-box " wck="undefined" tabindex="0"><div tabindex="0" title=" " className="selected-headline" ><span>직접입력</span></div><ul className="select-list" ><li><a title="직접입력" href={"/"} className="select-list-link select-list-selected" >직접입력</a></li><li><a title="naver.com" href={"/"} className="select-list-link" >naver.com</a></li><li><a title="gmail.com" href={"/"} className="select-list-link" >gmail.com</a></li><li><a title="hanmail.net" href={"/"} className="select-list-link" >hanmail.net</a></li><li><a title="nate.com" href={"/"} className="select-list-link" >nate.com</a></li><li><a title="hotmail.com" href={"/"} className="select-list-link" >hotmail.com</a></li><li><a title="yahoo.com" href={"/"} className="select-list-link" >yahoo.com</a></li><li><a title="lycos.co.kr" href={"/"} className="select-list-link" >lycos.co.kr</a></li></ul></div>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <th>이벤트 정보 <span>*</span></th>
                                <td className="multi_input_row">
                                    <span className="input_button radio agree-all_box"><input type="radio" id="agree-all" className="agree-all"/><label for="agree-all">수신</label></span>
                                    <span className="input_button radio disagree-all_box"><input type="radio" id="disagree-all" checked="" className="disagree-all"/><label for="disagree-all">비수신</label></span>
                                    <div className="bx_spam ">
                                        <span className="input_button checkbox"><input type="checkbox" id="isemail" name="isemail" value="01" className="agree-list"/><label for="isemail">이메일</label></span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>개인정보 유효기간 설정 <span>*</span></th>
                                <td className="pt10 pb10">
                                    <span className="input_button radio"><input type="radio" id="radioSet1year" name="SleepDelayReq" value="1" checked=""/><label for="radioSet1year">1년</label></span>
                                    <span className="input_button radio"><input type="radio" id="radioSet3year" name="SleepDelayReq" value="3"/><label for="radioSet3year">3년</label></span>
                                    <span className="input_button radio"><input type="radio" id="radioSet5year" name="SleepDelayReq" value="5"/><label for="radioSet5year">5년</label></span>
                                    <span className="input_button radio"><input type="radio" id="radioSetLast" name="SleepDelayReq" value="0"/><label for="radioSetLast">탈퇴시까지</label></span>
                                    <p className="txt_guide_info">※ 유효기간을 설정하시면 설정한 기간동안 로그인 등 이용기록이 없어도 휴면계정이 되는 것을 방지할 수 있습니다.<br/>설정하신 않으신 경우 자동으로 1년으로 유지됩니다.</p>
                                </td>
                            </tr>
                            <tr>
                                <th>개인정보 수집 및 이용안내 (선택)</th>
                                <td className="multi_input_row">
                                    <span className="input_button radio personal_info_input"><input type="radio" name="PersonalInformation" value="Y" className="personal_info_agree"/><label for="personal_info_agree">동의</label></span>
                                    <span className="input_button radio personal_info_input"><input type="radio" name="PersonalInformation" value="N" className="personal_info_disagree" checked=""/><label for="personal_info_disagree">비동의</label></span>
                                    <button type="button" className="micro_btn open-layer open-collect2">내용보기</button>
                                </td>
                            </tr>
                            <tr>
                                <th>가입수단</th>
                                <td>
                                    <span className="td_join_info">
                                        네이버
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <th>가입경로</th>
                                <td>
                                    <select id="knowpathcd" name="knowpathcd" className="normal" >
                                        <option value="">가입경로 선택</option>
                                            <option value="01">상품구매</option>
                                            <option value="02">이벤트참여</option>
                                            <option value="03">광고메일수신</option>
                                            <option value="99">기타</option>
                                    </select><div className="select-list-box " wck="knowpathcd" tabindex="0"><div tabindex="0" title=" " className="selected-headline" 
                                    ><span>가입경로 선택</span></div><ul className="select-list" ><li><a title="가입경로 선택" href={"/"} className="select-list-link select-list-selected" >가입경로 선택</a></li><li><a title="상품구매" href={"/"} className="select-list-link" >상품구매</a></li><li><a title="이벤트참여" href={"/"} className="select-list-link" >이벤트참여</a></li><li><a title="광고메일수신" href={"/"} className="select-list-link" >광고메일수신</a></li><li><a title="기타" href={"/"} >기타</a></li></ul></div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                <div className="bx_btn_center">
                    <button className="btn" type="button" name="button" onclick="location.href = '/Mypage';">취소</button>
                    <button className="btn black" type="button" name="button" onclick="WCKMyPageMember.EditSubmit();">수정</button>
                </div>
                <input name="__RequestVerificationToken" type="hidden" value="CfDJ8Kwm-N6mTIJKoRK0f9xD4Ue_ZJrGXX_vMH6ohH299zlrsJhNa37j5G0h-DMopXP8ScHxWZHMCud5Q8Pr00eS-ML97TjNIK4-ymJA5HHjsFtk2BVOuSSGqVqzyRp4f6SqTQXTewDpoBM7RifGOUow1kU3GNLjfC1iIgzOdyK4ImKbOb5ik-69VxARtxH0u9TsrQ" />
                </form>
            </InfoSection>
        </>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoEdit)
