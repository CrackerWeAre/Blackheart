import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import MainPage from '../MainPage'
import { FaqList } from './mypagemenu/csmenu/FaqList'
import { NoticeList } from './mypagemenu/csmenu/NoticeList'
import { QnaMantomanList } from './mypagemenu/csmenu/QnaMantomanList'
import { QnaProductList } from './mypagemenu/csmenu/QnaProductList'
import { Voc } from './mypagemenu/csmenu/Voc'
import { Coupon } from './mypagemenu/myinfo/Coupon'
import { Grade } from './mypagemenu/myinfo/Grade'
import { InfoEdit } from './mypagemenu/myinfo/InfoEdit'
import { Mileage } from './mypagemenu/myinfo/Mileage'
import { CancleList } from './mypagemenu/myorder/CancleList'
import { OrderList } from './mypagemenu/myorder/OrderList'
import { Review } from './mypagemenu/myorder/Review'

export const Mypage = () => {
    return (
        <>
            <Navibar></Navibar>
            <Switch>
                <Route path="/mypage" component={MainPage}></Route>
                <Route path="/mypage/myorder/orderlist" component={OrderList}></Route>
                <Route path="/mypage/myorder/canclelist" component={CancleList}></Route>
                <Route path="/mypage/myorder/review" component={Review}></Route>
                <Route path="/mypage/myinfo/infoEdit" component={InfoEdit}></Route>
                <Route path="/mypage/myinfo/grade" component={Grade}></Route>
                <Route path="/mypage/myinfo/coupon" component={Coupon}></Route>
                <Route path="/mypage/myinfo/mileage" component={Mileage}></Route>
                <Route path="/mypage/csmenu/qnamentomen" component={QnaMantomanList}></Route>
                <Route path="/mypage/csmenu/qnaproduct" component={QnaProductList}></Route>
                <Route path="/mypage/csmenu/noticelist" component={NoticeList}></Route>
                <Route path="/mypage/csmenu/faqlist" component={FaqList}></Route>
                <Route path="/mypage/csmenu/voc" component={Voc}></Route>
            </Switch>
        </>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Mypage)
