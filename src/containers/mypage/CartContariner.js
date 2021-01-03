import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MyInfoForm from 'components/mypage/MyInfoForm';
import { cart, cartCheck, cartChange } from 'modules/userinfo';
import CartListForm from 'components/mypage/CartListForm';

const CartContariner = () => {
    console.log("form")
    const dispatch = useDispatch();
    const { form, auth, cartlist } = useSelector(({ userinfo, auth }) => ({
        form: userinfo.mystatus,
        auth: auth.currentUser,
        cartlist: userinfo.cart.list
    }),[]);

    const checkData = (item) => {
        console.log(item)
        dispatch(cartCheck({cID: item, token: auth.uName}))
    }

    const changeNum = (cID, num) => {
        console.log(cID, num)
        dispatch(cartChange({cID: cID, number: num, token: auth.uName}))
    }
    useEffect(() => {

    }, [cartlist])

    // 컴포넌트가 처음 렌더링될 때 form을 초기화함.
    useEffect(() => {
        if(form)dispatch(cart({uID: form.uid, token: auth.uName}));
    }, [form]);

    return (
        <CartListForm dataList={cartlist} checkData={checkData} changeNum={changeNum}>
        </CartListForm>
        // <CartListForm>
        // </CartListForm>
    )
    
}

export default CartContariner
