import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MyInfoForm from 'components/mypage/MyInfoForm';
import { changeField, infoget, infoUpdate, reviewGet } from 'modules/userinfo';
import ReviewListForm from 'components/mypage/ReviewListForm';

const UserReviewListForm = () => {

    const dispatch = useDispatch();
    const { form, auth } = useSelector(({ userinfo, auth }) => ({
        form: userinfo.mystatus,
        auth: auth.currentUser
    }));

    const {review} = useSelector(({userinfo}) => ({review: userinfo.review.list}))

    //추후에 수정 및 제거를 위한 버튼
    const onSubmit = e => {
        e.preventDefault();
        console.log("buttonon")
        
    }

    // 컴포넌트가 처음 렌더링될 때 form을 초기화함.
    useEffect(() => {
        console.log(form)
        if(form)dispatch(reviewGet({uID: form.uid, token: auth.uName}));
    }, [form]);

    return (
        <ReviewListForm dataList={review}>
        </ReviewListForm>
    )
}

export default UserReviewListForm
