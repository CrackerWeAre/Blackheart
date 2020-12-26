import React, { useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import { infoget, reviewGet } from 'modules/userinfo';
import OrderList from 'pages/user/mypage/mypagemenu/myorder/OrderList'
import Review from 'pages/user/mypage/mypagemenu/myorder/Review'
import UserReviewListForm from './UserReviewListForm';
import UserOrderListForm from './UserOrderListForm'

export const UserMainForm = (props) => {
    const dispatch = useDispatch();
    const { auth } = useSelector(({ userinfo, auth }) => ({
        auth: auth.currentUser,
  
    }));

    useEffect(() => {
        if(auth)dispatch(infoget({email: auth.uEmail, token: auth.uName}));
    }, [auth]);


    return (
        <>
            <UserOrderListForm></UserOrderListForm>
            <UserReviewListForm></UserReviewListForm>
        </>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMainForm)
