import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { changeField, initializeForm, join } from 'modules/auth';
import AuthForm from 'components/auth/AuthForm';

const AdminJoinForm = ({ history }) => {
    const dispatch = useDispatch();
    const { form } = useSelector(({ auth }) => ({
        form: auth.join,
    }));

    const onChange = e => {
        const { name, value } = e.target;
        dispatch(changeField({
            form: 'join',
            key: name,
            value
        }));
    }
    const onSubmit = e => {
        e.preventDefault();
        const { email, password, username, gender, phone, birth, agree, address } = form;

        dispatch(join({ email, password, username, gender, phone, birth, agree, address }));
    }

    useEffect(() => {
        dispatch(initializeForm('join'));
    }, [dispatch]);

    return (
        <AuthForm 
            type="join"
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
        />
    );
};

export default withRouter(AdminJoinForm);