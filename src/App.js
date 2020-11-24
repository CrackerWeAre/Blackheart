import React from 'react';
import { Router, Route, Switch, withRouter } from 'react-router-dom';
import MainRouter from 'routers/MainRouter';
import AdminRouter from 'routers/AdminRouter';
import UserAuthRouter from 'routers/UserRouter';
import MyPageRouter from 'routers/MyPageRouter';
import GlobalStyle from 'GlobalStyle';
import HeaderContainer from 'containers/common/HeaderContainer';

const App = ({ history }) => {
  return (
    <>
      <Router history={history}>
        <Switch>
          <Route path={["/", "/main"]} exact component={MainRouter} />
          <Route path="/admin" exact component={AdminRouter} />
          <Route path="/member" exact component={UserAuthRouter} />
          <Route path="/mypage" exact component={MyPageRouter} />
        </Switch>
        <GlobalStyle />
      </Router>
    </>
  );
}

export default withRouter(App);