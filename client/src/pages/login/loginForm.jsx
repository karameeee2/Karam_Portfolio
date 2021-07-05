import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../../css/login/loginForm.css';
import '../../css/common/pageTitle.css';

const LoginForm = (props) => {
    const loginSubmit = props.onSubmit;

    const noService = () => {
        alert('서비스 준비중입니다.');
    }
    
    return (
        <>
            
            <div className='loginFormContainer'>
                {/* pageTitle */}
                <div className="pageTitleBox">
                    <div className="pageTitleWrap">
                        <h2 className='titleLeft'>로그인</h2>
                    </div>
                </div>
                <div className="loginFormWrap">
                    <form className="loginInputWrap" method='post' onSubmit={ e => {
                        e.stopPropagation();
                        e.preventDefault();
                        loginSubmit(e.target.id.value, e.target.password.value)}}>
                        <input type='text' className='idInput' name='id' placeholder='아이디' />
                        <input type='password' className='passwordInput' name='password' placeholder='비밀번호' />
                        <button type='submit' className='loginBtn'>로그인</button>
                    </form>
                    <div className="registerBtnWrap">
                        <Link to='/register'>
                            <button className='registerBtn'>회원가입</button>
                        </Link>
                    </div>
                    <p className="findIdPw">
                        <a href="#!" className="findId" onClick={noService}>아이디찾기</a>
                        {/* <span className="verLine">|</span> */}
                        <a href="#!" className="findPassword" onClick={noService}>비밀번호찾기</a>
                    </p>
                </div>
            </div>
        </>
    );
}

export default LoginForm;