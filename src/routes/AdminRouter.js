import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from 'GlobalStyle';
import HeaderContainer from 'containers/common/HeaderContainer';
import Drawer from 'components/common/Drawer';
import AdminMainPage from 'pages/admin/AdminMainPage';
import AdminUserDiscover from 'pages/admin/user/Discover';
import AdminUserOrderDiscover from 'pages/admin/user/OrderDiscover';

const AdminRouter = ({ history }) => {
    return (
        <>
            <GlobalStyle />
            <HeaderContainer adminheader dark />
            <Drawer />
            <Switch>
                <Route path="/admin" component={AdminMainPage} exact />
                {/* Admin_Page */}
                <Route component={AdminMainPage} path="/admin/main" exact />
                <Route component={AdminLoginPage} path={["/admin", "/admin/login"]} exact />
                <Route component={AdminJoinPage} path="/admin/join" />
                {/* 상품 관리 */}
                <Route component={AdminProductCreate} path="/admin/product/create" exact />
                <Route component={AdminProductDiscover} path="/admin/product/discover" exact />
                {/* 회원 관리 */}
                <Route component={AdminUserDiscover} path="/admin/user/discover" exact />
                <Route component={AdminUserOrderDiscover} path="/admin/user/orderDiscover" exact />
                {/* 주문 관리 */}
                <Route component={AdminOrderDiscover} path="/admin/order/discover" exact />
                <Route component={AdminOrderDelivery} path="/admin/order/delivery" exact />
                {/* 게시판 관리 */}
                <Route component={AdminBoardDiscover} path="/admin/board/discover" exact />
                {/* Admin_Page End */}
            </Switch>
        </>
    );
};

export default withRouter(AdminRouter);

