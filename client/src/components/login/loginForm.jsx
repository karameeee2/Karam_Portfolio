import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Cookie from 'js-cookie';
import LoginForm from '../../pages/login/loginForm';
import { API_LIST } from '../../constants/api';

const LoginFormComponent = (props) => {
    let id = props.match.params.id;
    let password = props.match.params.password;

    const cookies = Cookie.get('connect.sid'); // 쿠키를 클라이언트에서 찾아쓰기 위함

    const [idInput, setIdInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    const resetInput = () => {
        setIdInput('');
        setPasswordInput('');
    }

    const loginSubmit = () => {
        let url = API_LIST.LOGIN;
        Axios.post(url, {
            id: idInput, 
            password: passwordInput
        }, {
            withCredentials: true
        }) 
        .then(res => {
            if(res.status === 200) {
                window.location.href= '/';
            }
        })
        .catch(err => {
            alert('아이디 또는 비밀번호가 일치하지 않습니다.');
            resetInput();
            document.getElementById('loginId').focus();
            console.log('login error', err, err.res);
        })
    }

    const passwordInputOnEnter = (e) => {
        if(e.keyCode === 13) {
            loginSubmit();
        }
    }

    // deserializeUser가 호출되나
    useEffect(() => {
        if(cookies) {
            let url = API_LIST.EX;
            Axios.get(url, {
                withCredentials: true
            }).then(res => {
            }).catch(err => {
                console.log(err.response);
            })
        } else {
            
        }
    }, [cookies])

    // 로그아웃시에는 /logout으로 post요청 (withCredentials 필수)

    return(
        <section className="loginFormSection">
            <LoginForm onSubmit={ loginSubmit } idInput={idInput} passwordInput={passwordInput} setIdInput={setIdInput} setPasswordInput={setPasswordInput} 
            passwordInputOnEnter={passwordInputOnEnter}
            id={id} password={password} />
        </section>
    );
}

export default LoginFormComponent;