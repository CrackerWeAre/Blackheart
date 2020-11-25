import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from 'GlobalStyle';
import HeaderContainer from 'containers/common/HeaderContainer';
import MyPageMain from 'pages/user/mypage/MyPageMain';

const MyPageRouter = ({ history }) => {
    return (
        <>
            <GlobalStyle />
            <HeaderContainer dark />
            <Switch>
                <Route path="/mypage" component={MyPageMain} />
            </Switch>
        </>
    );
};

export default withRouter(MyPageRouter);