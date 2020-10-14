import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../../css/register/registerComplete.css';

const RegisterComplete = () => {
    return (
        <div className='registerCompleteContainer'>
            <div className="completeWrap">
                <div className="titleBox">
                    <h3 className="completeTitle">회원가입</h3>
                </div>
                <div className="completeTextBox">
                    <p className="completeText">회원가입을 축하드립니다.</p>
                    <p className="completeText">
                        아이디로 입력하신 메일로 인증메일을 발송하였으니, 
                        인증메일의 링크를 클릭해 인증을 완료하시기 바랍니다.
                    </p>
                    <br />
                    <p className="completeText">
                        이메일 인증이 완료되지 않으면 로그인 및 사이트 이용이 불가합니다.
                    </p>
                    <br />
                    <p className="completeText">감사합니다.</p>
                </div>
                <div className="completeBtnWrap">
                    <div className="completeBtnBox">
                        <Link to='/login'>
                            <button type='submit' className="loginBtn">로그인</button>
                        </Link>
                        <Link to='/'>
                            <button type='button' className="homeBtn">홈</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterComplete;