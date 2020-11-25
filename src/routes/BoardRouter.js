import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from 'GlobalStyle';
import HeaderContainer from 'containers/common/HeaderContainer';
import NoticePage from 'pages/user/board/NoticePage';
import QnAPage from 'pages/user/board/QnAPage';
import ReviewPage from 'pages/user/board/ReviewPage';

const BoardRouter = ({ history }) => {
    return (
        <>
            <GlobalStyle />
            <HeaderContainer dark />
            <Switch>
                <Route path="/board/notice" component={NoticePage} />
                <Route path="/board/qna" component={QnAPage} />
                <Route path="/board/review" component={ReviewPage} />
            </Switch>
        </>
    );
};

export default withRouter(BoardRouter);