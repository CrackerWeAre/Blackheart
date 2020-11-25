import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from 'GlobalStyle';
import HeaderContainer from 'containers/common/HeaderContainer';
import BrandStoryPage from 'pages/user/company/BrandStoryPage';
import LocationPage from 'pages/user/company/LocationPage';
import PressPage from 'pages/user/company/PressPage';
import SchedulePage from 'pages/user/company/SchedulePage';
import WorksPage from 'pages/user/company/WorksPage';

const CompanyRouter = ({ history }) => {
    return (
        <>
            <GlobalStyle />
            <HeaderContainer dark />
            <Switch>
                <Route path="/company/about" component={BrandStoryPage} />
                <Route path="/company/location" component={LocationPage} />
                <Route path="/company/press" component={PressPage} />
                <Route path="/company/schedule" component={SchedulePage} />
                <Route path="/company/works" component={WorksPage} />
            </Switch>
        </>
    );
};

export default withRouter(CompanyRouter);