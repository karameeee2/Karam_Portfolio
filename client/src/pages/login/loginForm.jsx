import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../../css/login/loginForm.css';

const LoginForm = (props) => {
    const loginSubmit = props.onSubmit;
    
    return (
        <div className='loginFormContainer'>
            <div className="loginFormWrap">
                <div className="logoBox">
                    <img src='./survey_on_logo_1.svg' alt='써베이온 로고' />
                </div>
                <form className="loginInputWrap" onSubmit={ () => loginSubmit() }>
                    <input type='text' className='idInput' name='id' placeholder='아이디' />
                    <input type='password' className='passwordInput' name='password' placeholder='비밀번호' />
                    <button type='submit' className='loginBtn'>로그인</button>
                </form>
                <div className="registerBtnWrap">
                    <Link to='/register'><button className='registerBtn'>회원가입</button></Link>
                    
                </div>
                <p className="findIdPw">
                    <a href="#!" className="findId">아이디찾기</a>
                    <span className="verLine">|</span>
                    <a href="#!" className="findPassword">비밀번호찾기</a>
                </p>
            </div>
        </div>
    );
}

export default LoginForm;