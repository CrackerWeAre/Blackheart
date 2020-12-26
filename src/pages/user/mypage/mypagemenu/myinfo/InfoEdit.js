import React, { Component, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import * as apis from 'lib/api/userinfo';
import styled, { css } from 'styled-components';
import UserEditForm from 'containers/mypage/UserEditForm';
import MainWrapper from 'components/mypage/MainWrapper';

export const InfoEdit = () => {


    return (
        <MainWrapper>
            <UserEditForm>
            </UserEditForm>
        </MainWrapper>
    )
}


export default InfoEdit
