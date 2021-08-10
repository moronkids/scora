import React, { useEffect } from 'react';
import Logins from 'components/login/index'
import { useSelector, useDispatch, connect } from "react-redux"; //hooks
import { Redirect } from 'react-router';
import { store } from 'redux/index';
const Login = () => {
    // const { auth } = useSelector(
    //     (state: store) => ({
    //         auth: state.auth
    //     })
    // );

    // useEffect(() => {
    //     alert("cuk")

    // }, [auth])
    return (
        <>
            <Logins />
        </>
    );
};

export default Login;