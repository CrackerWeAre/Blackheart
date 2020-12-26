import React from 'react'
import styled from 'styled-components';
import Select from '../common/Select'
import Input from 'components/common/Input';

function PhoneSelectForm({phonefirstnum, phonemiddlenum, phonelastnum, onChange}) {
    
    const InfoSelect = styled(Select)`
        margin-top: 0rem!important;
    `
    
    const InfoInput = styled(Input)`
        margin-top: 0rem!important;
    `
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

    return (
            <FormInput>
                <InfoSelect name="phonefirstnum" id="phonefirstnum" value={phonefirstnum? phonefirstnum : "010"} onChange={onChange}>
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
                    value={phonemiddlenum} 
                    onChange={onChange} 
                    maxLength="4"
                />
                <InfoInput type="text" name="phonelastnum" id="phonelastnum" value={phonelastnum} onChange={onChange} maxLength="4"/>
        </FormInput>
    )
}

export default PhoneSelectForm
