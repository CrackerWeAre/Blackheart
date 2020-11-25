import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from 'GlobalStyle';
import HeaderContainer from 'containers/common/HeaderContainer';
import ShopPage from 'pages/user/product/ShopPage';

const ProductRouter = ({ history }) => {
    return (
        <>
            <GlobalStyle />
            <HeaderContainer dark />
            <Switch>
                <Route path="/product/shop" component={ShopPage} />
            </Switch>
        </>
    );
};

export default withRouter(ProductRouter);