import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import RegisterForm from '../../pages/register/registerForm';

const RegisterFormComponent = () => {
    useEffect(() => {
        getInsertMember();
    }, [])

    const [insertMember, setInsertMember] = useState({});
    const getInsertMember = () => {
        Axios.post('http://localhost:8080/insertMember')
        .then((res) => {
            setInsertMember(res.data);
        })
        .catch((err) => {
            console.log('에러낫음', err.res, err)
        })
    }

    return (
        <section className="registerFormSection">
            <RegisterForm insertMember={insertMember} />
        </section>
    );
}

export default RegisterFormComponent;