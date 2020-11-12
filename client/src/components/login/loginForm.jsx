import Axios from 'axios';
import React, { useState } from 'react';
import LoginForm from '../../pages/login/loginForm';

const LoginFormComponent = () => {
    //const [users, setUsers] = useState(data);

    // const login = (login_info) => {
    //     console.log("App.js login()" + JSON.stringify(login_info));
    //     fetch('/login', {
    //         method: 'post',
    //         headers:{
    //             'Content-Type': 'application/json; charset=utf-8'
    //         },
    //         credentials: 'same-origin',
    //         body: JSON.stringify(login_info)
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log('App.js login .then ', data);
    //         if(data.ID === undefined) {
    //             alert('login fail!');
    //         }
    //         //setUsers();
    //     })
    // }

    Axios.post()

    const loginSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.id.value, e.target.password.value);
        this.props.login_progress({
            id: e.target.id.value,
            password: e.target.password.value
        })
    }


    return(
        <section className="loginFormSection">
            <LoginForm onSubmit={ loginSubmit } />
        </section>
    );
}

export default LoginFormComponent;