import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from 'GlobalStyle';
import HeaderContainer from 'containers/common/HeaderContainer';
import AdminMainPage from 'pages/admin/AdminMainPage';
import AdminLoginPage from 'pages/admin/auth/AdminLoginPage';
import AdminJoinPage from 'pages/admin/auth/AdminJoinPage';
import AdminUserDiscover from 'pages/admin/user/Discover';
import AdminUserOrderDiscover from 'pages/admin/user/OrderDiscover';

const AdminRouter = ({ history }) => {
    return (
        <>
            <GlobalStyle />
            <HeaderContainer />
            <Switch>
                <Route component={AdminMainPage} path="/admin" exact />
                {/* 회원 관리 */}
                <Route component={AdminUserDiscover} path="/admin/user/discover" exact />
                <Route component={AdminUserOrderDiscover} path="/admin/user/orderDiscover" exact />
                {/* 주문 관리 */}
                {/* <Route component={AdminMainPage} path="/admin/order/discover" exact />
                <Route component={AdminMainPage} path="/admin/order/delivery" exact /> */}
                {/* 게시판 관리 */}
                {/* <Route component={AdminMainPage} path="/admin/board/discover" exact /> */}
                {/* Admin_Page End */}
            </Switch>
        </>
    );
};

export default withRouter(AdminRouter);