import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from 'GlobalStyle';
import HeaderContainer from 'containers/common/HeaderContainer';
// User
import MainPage from 'pages/user/MainPage';
import UserJoinPage from 'pages/user/auth/UserJoinPage';
import UserLoginPage from 'pages/user/auth/UserLoginPage';
import BrandStoryPage from 'pages/user/company/BrandStoryPage';
import LocationPage from 'pages/user/company/LocationPage';
import PressPage from 'pages/user/company/PressPage';
import SchedulePage from 'pages/user/company/SchedulePage';
import WorksPage from 'pages/user/company/WorksPage';
import ShopPage from 'pages/user/product/ShopPage';
import NoticePage from 'pages/user/board/NoticePage';
import QnAPage from 'pages/user/board/QnAPage';
import ReviewPage from 'pages/user/board/ReviewPage';

const MainRouter = ({ history }) => {
    return (
        <>
            <GlobalStyle />
            <HeaderContainer />
            <Switch>
                <Route path={["/", "/main"]} component={MainPage} exact />
                {/* User_Page */}
                <Route component={BrandStoryPage} path="/company/about" />
                <Route component={LocationPage} path="/company/location" />
                <Route component={PressPage} path="/company/press" />
                <Route component={SchedulePage} path="/company/schedule" />
                <Route component={WorksPage} path="/company/works" />
                <Route component={ShopPage} path="/product/shop" />
                <Route component={NoticePage} path="/board/notice" />
                <Route component={QnAPage} path="/board/qna" />
                <Route component={ReviewPage} path="/board/review" />
            </Switch>
        </>
    );
};

export default withRouter(MainRouter);