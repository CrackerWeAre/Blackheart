import Pagination from 'components/common/Pagination';
import MainWrapper from 'components/mypage/MainWrapper';
import OrderProcess from 'components/mypage/OrderProcess';
import UserOrderListForm from 'containers/mypage/UserOrderListForm'
import * as apis from 'lib/api/userinfo';
import React, { Component, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import styled, { css } from 'styled-components';

export const OrderList = ({data}) => {
    return (
        <MainWrapper>
            <UserOrderListForm>
            </UserOrderListForm>
            <OrderProcess>
            </OrderProcess>
        </MainWrapper>
    )
    
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderList)
