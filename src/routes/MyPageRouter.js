import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from 'GlobalStyle';
import styled, { css } from 'styled-components';
import HeaderContainer from 'containers/common/HeaderContainer';
import MyPageMain from 'pages/user/mypage/MyPageMain';
import { OrderList } from 'pages/user/mypage/mypagemenu/myorder/OrderList';
import { InfoEdit } from 'pages/user/mypage/mypagemenu/myinfo/InfoEdit';
import { Review } from 'pages/user/mypage/mypagemenu/myorder/Review';
import { Navibar } from 'pages/user/mypage/Navibar';
import { Coupon } from 'pages/user/mypage/mypagemenu/myinfo/Coupon';
import { Grade } from 'pages/user/mypage/mypagemenu/myinfo/Grade';


const MyPageRouter = ({ history }) => {

    const MyPageDiv = styled.div`
        display: flex;
        padding-top: 100px;
        margin-left: 50px;
        margin-right: 50px;
    `
    return (
        <>
            <GlobalStyle />
            <HeaderContainer dark />
            <MyPageDiv>
                <Navibar></Navibar>
                <Switch>
                    <Route path="/mypage" exact component={MyPageMain} />
                    <Route path="/mypage/myinfo" component={InfoEdit} />
                    <Route path="/mypage/orderlist" component={OrderList}/>
                    <Route path="/mypage/reviewlist" component={Review} />
                    <Route path="/mypage/coupon" component={Coupon} />
                    <Route path="/mypage/grade" component={Grade} />
                </Switch>
            </MyPageDiv>
        </>
    );
};

export default withRouter(MyPageRouter);