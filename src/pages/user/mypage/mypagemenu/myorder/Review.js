import Pagination from 'components/common/Pagination';
import UserReviewListForm from 'containers/mypage/UserReviewListForm';
import MainWrapper from 'components/mypage/MainWrapper';
import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import styled, { css } from 'styled-components';

export const Review = () => {
    return (
        <MainWrapper>
            <UserReviewListForm>
            </UserReviewListForm>
        </MainWrapper>
    )
}

export default Review

