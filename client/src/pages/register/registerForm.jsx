import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../../css/register/registerForm.css';

const RegisterForm = () => {
    return(
        <div className='registerFormContainer'>
            <div className="registerFormWrap">
                <div className="titleBox">
                    <h3 className="registerTitle">회원가입</h3>
                </div>
                <div className="registerInputWrap">
                    <input type="text" className='idInput' placeholder='아이디(이메일)'/>
                    <div className="certBox">
                        <input type="text" className="certNumber" placeholder='인증번호입력'/>
                        <button className='certNumSend'>인증번호전송</button>
                        <button className='certOk'>인증완료</button>
                    </div>
                    <input type="password" className="passwordInput" placeholder='비밀번호'/>
                    <input type="password" className="passwordConfirm" placeholder='비밀번호 확인'/>
                    <div className="nameNickWrap">
                        <input type="text" className="nameInput" placeholder='이름'/>
                        <input type="text" className="nicknameInput" placeholder='닉네임'/>
                    </div>
                    <div className="genderBirthWrap">
                        <select name="gender" className='genderSelect' >
                            <option selected value="">성별</option>
                            <option value="남자" name='gender'>남자</option>
                            <option value="여자" name='gender'>여자</option>
                        </select>
                        <input type="text" className="birthInput" placeholder='생년월일' readOnly/>
                    </div>
                </div>
                <div className="registerBtnWrap">
                    <Link to='/registerComplete'>
                        <button className='registerBtn' type='submit'>회원가입</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default RegisterForm;