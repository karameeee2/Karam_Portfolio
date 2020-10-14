import React from 'react';
import '../../css/login/loginForm.css';

const LoginForm = () => {
    return (
        <div className='loginFormContainer'>
            <div className="loginFormWrap">
                <div className="logoBox">
                    <img src='./survey_on_logo_1.svg' />
                </div>
                <div className="loginInputWrap">
                    <input type='text' className='idInput' placeholder='아이디' />
                    <input type='password' className='passwordInput' placeholder='비밀번호' />
                    <button type='submit' className='loginBtn'>로그인</button>
                </div>
                <div className="registerBtnWrap">
                    <button className='registerBtn'>회원가입</button>
                </div>
                <p className="findIdPw">
                    <a href="" className="findId">아이디찾기</a>
                    <span className="verLine">|</span>
                    <a href="" className="findPassword">비밀번호찾기</a>
                </p>
            </div>
        </div>
    );
}

export default LoginForm;