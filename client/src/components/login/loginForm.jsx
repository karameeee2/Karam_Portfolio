import Axios from 'axios';
import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import LoginForm from '../../pages/login/loginForm';

const LoginFormComponent = (props) => {
    let id = props.match.params.id;
    let password = props.match.params.password;

    const [cookies] = useCookies(['connect.sid']); // 쿠키를 클라이언트에서 찾아쓰기 위함
    const loginSubmit = (id, password) => {
        
        Axios.post('http://localhost:8080/login', {
            id: id, 
            password: password
        }, {
            withCredentials: true
        }) 
        .then(res => {
            // res.send(id, password);
            console.log('login success', res);
            
        })
        .catch(err => {
            console.log('login error', err, err.res);
        })
    }

    // deserializeUser가 호출되나
    useEffect(() => {
        if(cookies) {
            console.log('쿠키있음');
            Axios.get('http://localhost:8080/ex', {
                withCredentials: true
            }).then(res => {
                console.log('res', res);
            }).catch(err => {
                console.log(err.response);
            })
        } else {
            console.log('쿠키없음');
        }
    }, [cookies])

    // 로그아웃시에는 /logout으로 post요청 (withCredentials 필수)

    return(
        <section className="loginFormSection">
            <LoginForm onSubmit={ loginSubmit } id={id} password={password} />
        </section>
    );
}

export default LoginFormComponent;