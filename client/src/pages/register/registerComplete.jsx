import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../../css/register/registerComplete.css';
import '../../css/common/pageTitle.css';

const RegisterComplete = () => {
    return (
        <div className='registerCompleteContainer'>
            <div className="completeWrap">
                {/* pageTitle */}
                <div className="pageTitleBox">
                    <div className="pageTitleWrap">
                        <h2 className='titleLeft'>회원가입</h2>
                    </div>
                </div>
                <div className="completeTextBox">
                    <p className="completeText">회원가입 완료~!</p>
                    <br />
                    <p className="completeText">
                    로그인 후 다양한 설문에 응답하고 내가 필요한 설문을 등록해 다양한 데이터를 얻어보세요!
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