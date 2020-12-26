import React, { Children, Component } from 'react'
import { connect } from 'react-redux'

import UserMainForm from 'containers/mypage/UserMainForm';
import MainWrapper from 'components/mypage/MainWrapper';

export const MainView = () => {
    return (

        <MainWrapper> 
            <UserMainForm></UserMainForm>
        </MainWrapper>

    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(MainView)
