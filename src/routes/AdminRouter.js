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
                {/* 회원관리 */}
                <Route path="/admin/user/discover" render={() => <AdminUserDiscover />} />
                <Route path="/admin/user/orderDiscover" render={() => <AdminUserOrderDiscover />} />
                {/* 게시판관리 */}
            </Switch>
        </>
    );
};

export default withRouter(AdminRouter);