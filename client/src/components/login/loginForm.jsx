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

    const [id, setID] = useState('');
    const [password, setPassword] = useState('');

    // useEffect(() => {
    //     getLogin();
    // }, [])

    // const getLogin = () => {
    //     //const url = `http://localhost:8080/login`;
    //     Axios.post('/login')
    //     .then(res => {
    //         setLogin(res.data);
    //     })
    //     .catch(err => {
    //         console.log('login error', err, err.res);
    //     })
    // }

    const loginSubmit = (e) => {
        e.preventDefault();
        setID('');
        setPassword('');
        Axios.post('/', {
            id:'admin1@surveyon.com', 
            password:'admin1'
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
            <LoginForm onSubmit={ loginSubmit } />
        </section>
    );
}

export default LoginFormComponent;