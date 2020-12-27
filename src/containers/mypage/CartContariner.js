import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MyInfoForm from 'components/mypage/MyInfoForm';
import { cart } from 'modules/userinfo';
import CartListForm from 'components/mypage/CartListForm';

const UserReviewListForm = () => {
    console.log("form")
    const dispatch = useDispatch();
    const { form, auth, cartlist } = useSelector(({ userinfo, auth }) => ({
        form: userinfo.mystatus,
        auth: auth.currentUser,
        cartlist: userinfo.cart.list
    }),[]);

    const sendData = (itemsToPay) => {
        console.log(itemsToPay)
    }
    useEffect(() => {

    }, [cartlist])

    // 컴포넌트가 처음 렌더링될 때 form을 초기화함.
    useEffect(() => {
        if(form)dispatch(cart({uID: form.uid, token: auth.uName}));
    }, [form]);

    return (
        <CartListForm dataList={cartlist} sendData={sendData}>
        </CartListForm>
        // <CartListForm>
        // </CartListForm>
    )
    
}

export default UserReviewListForm
