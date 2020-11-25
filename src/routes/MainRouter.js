import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from 'GlobalStyle';
import HeaderContainer from 'containers/common/HeaderContainer';
import MainPage from 'pages/user/MainPage';

const MainRouter = ({ history }) => {
    return (
        <>
            <GlobalStyle />
            <HeaderContainer />
            <Switch>
                <Route path="/" component={MainPage} exact />
                <Route path="/main" component={MainPage} exact />
            </Switch>
        </>
    );
};

export default withRouter(MainRouter);