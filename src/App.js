import React from 'react';
import { Route } from 'react-router-dom';
import GlobalStyle from 'GlobalStyle';
// Admin
import AdminMainPage from 'pages/admin/AdminMainPage';
import AdminLoginPage from 'pages/admin/auth/AdminLoginPage';
import AdminJoinPage from 'pages/admin/auth/AdminJoinPage';
import AdminUserDiscover from 'pages/admin/user/Discover';
import AdminUserOrderDiscover from 'pages/admin/user/OrderDiscover';

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

const App = () => {
  return (
    <>
      <GlobalStyle />
      {/* Admin_Page */}
      <Route component={AdminMainPage} path="/admin/main" exact />
      <Route component={AdminLoginPage} path={["/admin", "/admin/login"]} exact />
      <Route component={AdminJoinPage} path="/admin/join" />
      {/* 상품 관리 */}
      {/* <Route component={AdminMainPage} path="/admin/product/create" exact />
      <Route component={AdminMainPage} path="/admin/product/discover" exact /> */}
      {/* 회원 관리 */}
      <Route component={AdminUserDiscover} path="/admin/user/discover" exact />
      <Route component={AdminUserOrderDiscover} path="/admin/user/orderDiscover" exact />
      {/* 주문 관리 */}
      {/* <Route component={AdminMainPage} path="/admin/order/discover" exact />
      <Route component={AdminMainPage} path="/admin/order/delivery" exact /> */}
      {/* 게시판 관리 */}
      {/* <Route component={AdminMainPage} path="/admin/board/discover" exact /> */}
      {/* Admin_Page End */}

      {/* User_Page */}
      <Route component={MainPage} path="/" exact />
      <Route component={UserLoginPage} path="/main/login" />
      <Route component={UserJoinPage} path="/main/join" />
      <Route component={BrandStoryPage} path="/company/about" />
      <Route component={LocationPage} path="/company/location" />
      <Route component={PressPage} path="/company/press" />
      <Route component={SchedulePage} path="/company/schedule" />
      <Route component={WorksPage} path="/company/works" />
      <Route component={ShopPage} path="/product/shop" />
      <Route component={NoticePage} path="/board/notice" />
      <Route component={QnAPage} path="/board/qna" />
      <Route component={ReviewPage} path="/board/review" />
    </>
  );
}

export default App;