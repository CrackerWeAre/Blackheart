import React, { Component } from 'react'

const initialState = {
    orderNum: 0,
    orderProductNum: 0,
    orderProductList: [],
    orderTotalPrice: 0,
    orderDate: "",
    orderState: 0
}

export const UserOrderListForm = ({dataList}) => {
    
    const filterList = (data) => {
        return data
    }

    if(Array.isArray(dataList)){
        dataList.map(data=>filterList(data))
    }


    return (
        <div>
            
        </div>
    )
}

export default UserOrderListForm
