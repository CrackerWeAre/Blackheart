import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MyInfoForm from 'components/mypage/MyInfoForm';
import { changeField, infoget, infoUpdate, reviewGet } from 'modules/userinfo';
import OrderListForm from 'components/mypage/OrderListForm';
import * as apis from 'lib/api/userinfo';
import { connect } from 'react-redux'

import Pagination from 'components/common/Pagination';
import OrderProcess from 'components/mypage/OrderProcess';

const UserOrderListForm = () => {
    const userInfo = useSelector(state => state?.userinfo?.mystatus?.uid)

    const [dataList, dataListstate] = useState([])

    const loadData = async(data) => {
        const itemList = await apis.userOrder({uID:data})
        console.log(itemList)
        if(itemList.status===200){
            if(itemList?.data?.result){
                dataListstate(itemList?.data?.result)
            }
        }else {
            alert('정보를 가져올 수 없습니다.')
        }
    }
    
    useEffect(() => {
        console.log(userInfo)
        if(userInfo)loadData(userInfo)
    }, [userInfo])


    return (
        <>
            <OrderListForm dataList={dataList}>
            </OrderListForm>
            
        </>
    )
}

export default UserOrderListForm
