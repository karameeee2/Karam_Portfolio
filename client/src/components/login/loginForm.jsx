import Axios from 'axios';
import React, { useState } from 'react';
import LoginForm from '../../pages/login/loginForm';

const LoginFormComponent = (props) => {
    let id = props.match.params.id;
    let password = props.match.params.password;

    const loginSubmit = (id, password) => {
        
        Axios.post('http://localhost:8080/login', {
            id: id, 
            password: password
        })
        .then(res => {
            res.send(id, password);
            console.log('login sucess');
        })
        .catch(err => {
            console.log('login error', err, err.res);
        })
    }


    return(
        <section className="loginFormSection">
            <LoginForm onSubmit={ loginSubmit } id={id} password={password} />
        </section>
    );
}

export default LoginFormComponent;