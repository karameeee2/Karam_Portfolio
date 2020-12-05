import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../../css/register/registerForm.css';

const RegisterForm = (props) => {
    const registerSubmit = props.onSubmit;

    const {setId, setPassword, setName, setNickName, setGender, setBirth, idCheck, isOverlap, errorText} = props;

    return(
        <div className='registerFormContainer'>
            <div className="registerFormWrap">
                <div className="titleBox">
                    <h3 className="registerTitle">회원가입</h3>
                </div>
                <form className="registerInputWrap" onSubmit= { e => {
                    e.stopPropagation();
                    e.preventDefault();
                    registerSubmit()}}>
                    <div className="idCheckBox">
                        {/* onBlur 이용해서 아이디 입력될때 사용가능여부 확인 */}
                        <input type="text" className='idInput' name='id' placeholder='아이디(이메일)' onChange={ e => { setId(e.target.value); }} onBlur={idCheck}/> 
                <span className={`idCheck ${errorText ? 'show' : ''} ${isOverlap ? 'red': ''}`}>{errorText}</span>
                    </div>
                    {/* <div className="certBox">
                        <input type="text" className="certNumber" placeholder='인증번호입력'/>
                        <button className='certNumSend'>인증번호전송</button>
                        <button className='certOk'>인증완료</button>
                    </div> */}
                    <input type="password" className="passwordInput" name='password' placeholder='비밀번호' onChange={ e => { setPassword(e.target.value) }}/>
                    <input type="password" className="passwordConfirm" name='passwordCheck' placeholder='비밀번호 확인' id='passwordConfirm' />
                    <div className="nameNickWrap">
                        <input type="text" className="nameInput" name='name' placeholder='이름' onChange={ e => { setName(e.target.value) }}/>
                        <input type="text" className="nicknameInput" name='nickName' placeholder='닉네임' onChange={ e => { setNickName(e.target.value) }}/>
                    </div>
                    <div className="genderBirthWrap">
                        <select name="gender" className='genderSelect' onChange={ e => { setGender(e.target.value) }} defaultValue='default' >
                            <option value="default" disabled >성별</option>
                            <option value="M" name='gender'>남자</option>
                            <option value="F" name='gender'>여자</option>
                        </select>
                        {/* 추후 캘린더로 바꿈 */}
                        <input type="text" className="birthInput" name='birth' placeholder='생년월일 ex)19930307' onChange={ e => { setBirth(e.target.value) }}/>
                    </div>
                    <div className="registerBtnWrap">
                        <button className='registerBtn' type='submit'>회원가입</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegisterForm;