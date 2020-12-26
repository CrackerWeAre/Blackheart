import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MyInfoForm from 'components/mypage/MyInfoForm';
import { changeField, infoget, infoUpdate } from 'modules/userinfo';

const UserEditForm = ({ history }) => {

    const dispatch = useDispatch();
    const { form, auth } = useSelector(({ userinfo, auth }) => ({
        form: userinfo.mystatus,
        auth: auth.currentUser
    }));
    
    const onChange = e => {
        const { name, value, type, checked } = e.target;
        dispatch(changeField({
            form: 'mystatus',
            key: name,
            value: type === 'checkbox' ? + checked : value
        }));
    }

    const onSubmit = e => {
        e.preventDefault();
        console.log("buttonon")
        dispatch(infoUpdate({
            userid:form.uid,
            email:`${form.email}@${form.emailsite}`, 
            token:auth.uName, 
            address:form.address, 
            phone: `${form.phonefirstnum}${form.phonemiddlenum}${form.phonelastnum}`, 
            birth: `${form.birthyear}-${form.birthmonth}-${form.birthday}`
       }))
    }

    // 컴포넌트가 처음 렌더링될 때 form을 초기화함.
    useEffect(() => {
        dispatch(infoget({email: auth.uEmail, token: auth.uName}));
    }, []);

    // 회원가입 성공/실패 처리


 

    return (
        <MyInfoForm
            type="mystatus"
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
        />
    );
}

export default withRouter(UserEditForm);