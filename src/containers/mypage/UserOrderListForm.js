import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import OrderListForm from 'components/mypage/OrderListForm';
import * as apis from 'lib/api/userinfo';

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
