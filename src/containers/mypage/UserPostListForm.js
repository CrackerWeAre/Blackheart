import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MyInfoForm from 'components/mypage/MyInfoForm';
import { changeField, infoget, infoUpdate, reviewGet } from 'modules/userinfo';
import PostListForm from 'components/mypage/PostListForm';

const UserPostListForm = () => {

    const dispatch = useDispatch();
    const { form, auth } = useSelector(({ userinfo, auth }) => ({
        form: userinfo.mystatus,
        auth: auth.currentUser
    }));

    //추후에 수정 및 제거를 위한 버튼
    const onSubmit = e => {
        e.preventDefault();
        console.log("buttonon")
        
    }

    // 컴포넌트가 처음 렌더링될 때 form을 초기화함.
    useEffect(() => {
        dispatch(reviewGet({email: auth.uEmail, token: auth.uName}));
    }, []);

    return (
        <PostListForm>
        </PostListForm>
    )
}

export default UserPostListForm
