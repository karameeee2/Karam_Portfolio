import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import RegisterForm from '../../pages/register/registerForm';

const RegisterFormComponent = (props) => {
    // const [id, setId] = useState('');
    // const [password, setPassword] = useState('');
    // const [name, setName] = useState('');
    // const [nickName, setNickName] = useState('');
    // const [gender, setGender] = useState('M');
    // const [birth, setBirth] = useState('');
    
    const idCheck = (e) => {
        e.preventDefault();
        const usableId = false;

        Axios.post('http://localhost:8080/idCheck', {

        })
    }

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