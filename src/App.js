import React from 'react';
import GlobalStyle from 'GlobalStyle';
import { Router, Route, Switch, withRouter } from 'react-router-dom';
import MainRouter from 'routes/MainRouter';
import AdminRouter from 'routes/AdminRouter';
import UserRouter from 'routes/UserRouter';
import MyPageRouter from 'routes/MyPageRouter';
import ProductRouter from 'routes/ProductRouter';
import CompanyRouter from 'routes/CompanyRouter';
import BoardRouter from 'routes/BoardRouter';

const App = ({ history }) => {
  return (
    <>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={MainRouter} />
          <Route path="/main" component={MainRouter} />
          <Route path="/admin" component={AdminRouter} />
          <Route path="/member" component={UserRouter} />
          <Route path="/mypage" component={MyPageRouter} />
          <Route path="/product" component={ProductRouter} />
          <Route path="/company" component={CompanyRouter} />
          <Route path="/board" component={BoardRouter} />
        </Switch>
        <GlobalStyle />
      </Router>
    </>
  );
}

export default withRouter(App);