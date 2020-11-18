import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import RegisterForm from '../../pages/register/registerForm';

const RegisterFormComponent = (props) => {
    // let id = props.match.params.id;
    // let password = props.match.params.password;
    // let name = props.match.params.name;
    // let nickName = props.match.params.nickName;
    // let gender = props.match.params.gender;
    // let birth = props.match.params.birth;

    const registerSubmit = (id, password, name, nickName, gender, birth) => {
        Axios.post('http://localhost:8080/register', {
            id: id,
            password: password,
            name: name,
            nickName: nickName,
            gender: gender,
            birth: birth
        }, {
            withCredentials: true
        })
        .then(res => {
            console.log('register success', res);
        })
        .catch(err => {
            console.log('register error', err, err.res);
        })
    }

    return (
        <section className="registerFormSection">
            <RegisterForm onSubmit={ registerSubmit } />
        </section>
    );
}

export default RegisterFormComponent;