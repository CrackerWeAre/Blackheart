import React , { useState, useEffect } from 'react'
import styled from 'styled-components';
import Input from 'components/common/Input';
import Button from 'components/common/Button';

const InfoWrapper = styled.div`
    height : 100%;
    width: calc(100% - 250px);
    padding : 300px 0px 0px 0px;
    flex: none;
    margin-top : 100px;
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

    div button {
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
`;

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

`;
const MyInfoForm = ({ type, form, error, onChange, onSubmit, onClick }) => {
    
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
                    <FormInput>
                        <Input
                            type="text"
                            name="username"
                            id="username"
    
                            value={form.username}
                            onChange={onChange}
                        />
                    </FormInput>

                    <FormInput>
                        <Input
                            type="text"
                            name="email"
                            id="email"
                            value={form.email}
                            onChange={onChange}
                        />
                        @
                        <input name="emailsite" id="emailsite" value={form.emailsite} onChange={onChange} placeholder="이메일을 선택하세요." /> 
                        <select 
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
                            

                        </select>
                    </FormInput>
                    <div>
                        <select name="phonefirstnum" id="phonefirstnum" value={form.phonefirstnum} onChange={onChange}>
                                <option value="02">02</option>
                                <option value="010">010</option>
                                <option value="011">011</option>
                                <option value="016">016</option>
                                <option value="017">017</option>
                                <option value="019">019</option>
                                <option value="018">018</option>
                                <option value="031">031</option>
                                <option value="032">032</option>
                                <option value="033">033</option>
                                <option value="041">041</option>
                                <option value="042">042</option>
                                <option value="043">043</option>
                                <option value="051">051</option>
                                <option value="052">052</option>
                                <option value="053">053</option>
                                <option value="054">054</option>
                                <option value="055">055</option>
                                <option value="061">061</option>
                                <option value="062">062</option>
                                <option value="063">063</option>
                                <option value="064">064</option>
                                <option value="070">070</option>
                                <option value="080">080</option>
                                <option value="0503">0503</option>
                                <option value="0505">0505</option>
                                <option value="0507">0507</option>
                        </select>
                        <input type="text" name="phonemiddlenum" id="phonemiddlenum" value={form.phonemiddlenum} onChange={onChange} maxLength="4"/>
                        <input type="text" name="phonelastnum" id="phonelastnum" value={form.phonelastnum} onChange={onChange} maxLength="4"/>
                    </div>
                    <div>
                        <div>
                        <input type="text" name="address" id="address" value={form.address} onChange={onChange} maxLength="4"/>
                        </div>
                    </div>
                    <div>
                        <div className="form__input">
                            생년월일
                            <select name="birthyear" id="birthyear" value={form.birthyear? form.birthyear:"2000"} onChange={onChange}>
                                <option value="1900" >1900년</option>
                                <option value="1901" >1901년</option>
                                <option value="1902" >1902년</option>
                                <option value="1903" >1903년</option>
                                <option value="1904" >1904년</option>
                                <option value="1905" >1905년</option>
                                <option value="1906" >1906년</option>
                                <option value="1907" >1907년</option>
                                <option value="1908" >1908년</option>
                                <option value="1909" >1909년</option>
                                <option value="1910" >1910년</option>
                                <option value="1911" >1911년</option>
                                <option value="1912" >1912년</option>
                                <option value="1913" >1913년</option>
                                <option value="1914" >1914년</option>
                                <option value="1915" >1915년</option>
                                <option value="1916" >1916년</option>
                                <option value="1917" >1917년</option>
                                <option value="1918" >1918년</option>
                                <option value="1919" >1919년</option>
                                <option value="1920" >1920년</option>
                                <option value="1921" >1921년</option>
                                <option value="1922" >1922년</option>
                                <option value="1923" >1923년</option>
                                <option value="1924" >1924년</option>
                                <option value="1925" >1925년</option>
                                <option value="1926" >1926년</option>
                                <option value="1927" >1927년</option>
                                <option value="1928" >1928년</option>
                                <option value="1929" >1929년</option>
                                <option value="1930" >1930년</option>
                                <option value="1931" >1931년</option>
                                <option value="1932" >1932년</option>
                                <option value="1933" >1933년</option>
                                <option value="1934" >1934년</option>
                                <option value="1935" >1935년</option>
                                <option value="1936" >1936년</option>
                                <option value="1937" >1937년</option>
                                <option value="1938" >1938년</option>
                                <option value="1939" >1939년</option>
                                <option value="1941" >1941년</option>
                                <option value="1942" >1942년</option>
                                <option value="1943" >1943년</option>
                                <option value="1944" >1944년</option>
                                <option value="1945" >1945년</option>
                                <option value="1946" >1946년</option>
                                <option value="1947" >1947년</option>
                                <option value="1948" >1948년</option>
                                <option value="1949" >1949년</option>
                                <option value="1940" >1940년</option>
                                <option value="1940" >1940년</option>
                                <option value="1951" >1951년</option>
                                <option value="1952" >1952년</option>
                                <option value="1953" >1953년</option>
                                <option value="1954" >1954년</option>
                                <option value="1955" >1955년</option>
                                <option value="1956" >1956년</option>
                                <option value="1957" >1957년</option>
                                <option value="1958" >1958년</option>
                                <option value="1959" >1959년</option>
                                <option value="1960" >1960년</option>
                                <option value="1961" >1961년</option>
                                <option value="1962" >1962년</option>
                                <option value="1963" >1963년</option>
                                <option value="1964" >1964년</option>
                                <option value="1965" >1965년</option>
                                <option value="1966" >1966년</option>
                                <option value="1967" >1967년</option>
                                <option value="1968" >1968년</option>
                                <option value="1969" >1969년</option>
                                <option value="1970" >1970년</option>
                                <option value="1971" >1971년</option>
                                <option value="1972" >1972년</option>
                                <option value="1973" >1973년</option>
                                <option value="1974" >1974년</option>
                                <option value="1975" >1975년</option>
                                <option value="1976" >1976년</option>
                                <option value="1977" >1977년</option>
                                <option value="1978" >1978년</option>
                                <option value="1979" >1979년</option>
                                <option value="1980" >1980년</option>
                                <option value="1981" >1981년</option>
                                <option value="1982" >1982년</option>
                                <option value="1983" >1983년</option>
                                <option value="1984" >1984년</option>
                                <option value="1985" >1985년</option>
                                <option value="1986" >1986년</option>
                                <option value="1987" >1987년</option>
                                <option value="1988" >1988년</option>
                                <option value="1989" >1989년</option>
                                <option value="1990" >1990년</option>
                                <option value="1991" >1991년</option>
                                <option value="1992" >1992년</option>
                                <option value="1993" >1993년</option>
                                <option value="1994" >1994년</option>
                                <option value="1995" >1995년</option>
                                <option value="1996" >1996년</option>
                                <option value="1997" >1997년</option>
                                <option value="1998" >1998년</option>
                                <option value="1999" >1999년</option>
                                <option value="2000" >2000년</option>
                                <option value="2001" >2001년</option>
                                <option value="2002" >2002년</option>
                                <option value="2003" >2003년</option>
                                <option value="2004" >2004년</option>
                                <option value="2005" >2005년</option>
                                <option value="2006" >2006년</option>
                                <option value="2007" >2007년</option>
                                <option value="2008" >2008년</option>
                                <option value="2009" >2009년</option>
                                <option value="2010" >2010년</option>
                                <option value="2011" >2011년</option>
                                <option value="2012" >2012년</option>
                                <option value="2013" >2013년</option>
                                <option value="2014" >2014년</option>
                                <option value="2015" >2015년</option>
                                <option value="2016" >2016년</option>
                                <option value="2017" >2017년</option>
                                <option value="2018" >2018년</option>
                                <option value="2019" >2019년</option>
                                <option value="2020" >2020년</option>
                                <option value="2021" >2021년</option>
                            </select>
                            <select name="birthmonth" id="birthmonth" value={form.birthmonth? form.birthmonth:"01"} onChange={onChange}>
                                <option value="01">1월</option>
                                <option value="02">2월</option>
                                <option value="03">3월</option>
                                <option value="04">4월</option>
                                <option value="05">5월</option>
                                <option value="06">6월</option>
                                <option value="07">7월</option>
                                <option value="08">8월</option>
                                <option value="09">9월</option>
                                <option value="10">10월</option>
                                <option value="11">11월</option>
                                <option value="12">12월</option>
                            </select>
                            <select name="birthday" id="birthday" value={form.birthday? form.birthday:"01"} onChange={onChange}>
                                <option value="01">1일</option>
                                <option value="02">2일</option>
                                <option value="03">3일</option>
                                <option value="04">4일</option>
                                <option value="05">5일</option>
                                <option value="06">6일</option>
                                <option value="07">7일</option>
                                <option value="08">8일</option>
                                <option value="09">9일</option>
                                <option value="10">10일</option>
                                <option value="11">11일</option>
                                <option value="12">12일</option>
                                <option value="13">13일</option>
                                <option value="14">14일</option>
                                <option value="15">15일</option>
                                <option value="16">16일</option>
                                <option value="17">17일</option>
                                <option value="18">18일</option>
                                <option value="19">19일</option>
                                <option value="20">20일</option>
                                <option value="21">21일</option>
                                <option value="22">22일</option>
                                <option value="23">23일</option>
                                <option value="24">24일</option>
                                <option value="25">25일</option>
                                <option value="26">26일</option>
                                <option value="27">27일</option>
                                <option value="28">28일</option>
                                <option value="29">29일</option>
                                <option value="30">30일</option>
                                <option value="31">31일</option>
                            </select>
                        </div>
                    </div>
                    {error && <ErrorMessage><span>{error}</span></ErrorMessage>}
                    <BtnMt fullWidth>수정하기</BtnMt>
                </form>
                
            </InfoContents>
        </InfoWrapper>
    )
}

export default MyInfoForm
