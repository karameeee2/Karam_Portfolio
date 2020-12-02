import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../../css/register/registerForm.css';

const RegisterForm = (props) => {
    const registerSubmit = props.onSubmit;

    return(
        <div className='registerFormContainer'>
            <div className="registerFormWrap">
                <div className="titleBox">
                    <h3 className="registerTitle">회원가입</h3>
                </div>
                <form className="registerInputWrap" onSubmit= { e => {
                    e.stopPropagation();
                    e.preventDefault();
                    registerSubmit(e.target.id.value, e.target.password.value, e.target.name.value, 
                        e.target.nickName.value, e.target.gender.value, e.target.birth.value)}}>
                    <div className="idCheckBox">
                        <input type="text" className='idInput' name='id' placeholder='아이디(이메일)'/> {/* onBlur 이용해서 아이디 입력될때 사용가능여부 확인 */}
                        <span className='idCheck'>사용 가능한 아이디입니다.</span>
                    </div>
                    {/* <div className="certBox">
                        <input type="text" className="certNumber" placeholder='인증번호입력'/>
                        <button className='certNumSend'>인증번호전송</button>
                        <button className='certOk'>인증완료</button>
                    </div> */}
                    <input type="password" className="passwordInput" name='password' placeholder='비밀번호'/>
                    <input type="password" className="passwordConfirm" name='passwordCheck' placeholder='비밀번호 확인'/>
                    <div className="nameNickWrap">
                        <input type="text" className="nameInput" name='name' placeholder='이름'/>
                        <input type="text" className="nicknameInput" name='nickName' placeholder='닉네임'/>
                    </div>
                    <div className="genderBirthWrap">
                        <select name="gender" className='genderSelect' >
                            <option defaultValue="">성별</option>
                            <option value="남자" name='gender'>남자</option>
                            <option value="여자" name='gender'>여자</option>
                        </select>
                        <input type="text" className="birthInput" name='birth' placeholder='생년월일' readOnly/>
                    </div>
                    <div className="registerBtnWrap">
                        <Link to='/registerComplete'>
                            <button className='registerBtn' type='submit'>회원가입</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegisterForm;