import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from 'GlobalStyle';
import HeaderContainer from 'containers/common/HeaderContainer';
import UserLoginPage from 'pages/user/auth/UserLoginPage';
import UserJoinPage from 'pages/user/auth/UserJoinPage';


const UserRouter = ({ history }) => {
    return (
        <>
            <GlobalStyle />
            <HeaderContainer />
            <Switch>
                <Route path="/member/login" component={UserLoginPage} />
                <Route path="/member/join" component={UserJoinPage} />
            </Switch>
        </>
    );
};

export default withRouter(UserRouter);