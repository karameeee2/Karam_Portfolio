import React, { useState } from 'react';
import { css } from '@emotion/react'
import '../../css/register/registerForm.css';
import '../../css/common/pageTitle.css';
import ScaleLoader from 'react-spinners/ScaleLoader';

const RegisterForm = (props) => {
    const registerSubmit = props.onSubmit;

    const {setId, setPassword, setName, setNickName, setGender, setBirth, idCheck, isOverlap, errorText, loading} = props;

    // loading-spinner
    const [color, setColor] = useState('#5E00FF');

    const override = css`
        display: block,
        margin: 0 auto,
    `;

    return(
        <>
            <div className="registerFormWrap">
                {/* pageTitle */}
                <div className="pageTitleBox">
                    <div className="pageTitleWrap">
                        <h2 className='titleLeft'>회원가입</h2>
                    </div>
                </div>
                <form className="registerInputWrap" onSubmit= { e => {
                    e.stopPropagation();
                    e.preventDefault();
                    registerSubmit()}}>
                    <div className="idCheckBox">
                        {/* onBlur 이용해서 아이디 입력될때 사용가능여부 확인 */}
                        <input type="text" className='idInput' name='id' placeholder='아이디(이메일)' 
                        onChange={ e => { setId(e.target.value); }} onBlur={idCheck}/> 
                        <span className={`idCheck ${errorText ? 'show' : ''} ${isOverlap ? 'red': ''}`}>{errorText}</span>
                    </div>
                    {/* <div className="certBox">
                        <input type="text" className="certNumber" placeholder='인증번호입력'/>
                        <button className='certNumSend'>인증번호전송</button>
                        <button className='certOk'>인증완료</button>
                    </div> */}
                    <input type="password" className="passwordInput" name='password' placeholder='비밀번호' onChange={ e => { setPassword(e.target.value) }} />
                    <input type="password" className="passwordConfirm" name='passwordCheck' placeholder='비밀번호 확인' id='passwordConfirm' />
                    <div className="nameNickWrap">
                        <input type="text" className="nameInput" name='name' placeholder='이름' onChange={ e => { setName(e.target.value) }} />
                        <input type="text" className="nicknameInput" name='nickName' placeholder='닉네임'  onChange={ e => { setNickName(e.target.value) }} />
                    </div>
                    <div className="genderBirthWrap">
                        <select name="gender" className='genderSelect' defaultValue='default' onChange={ e => { setGender(e.target.value) }} >
                            <option value="default" disabled >성별</option>
                            <option value="M" name='gender'>남자</option>
                            <option value="F" name='gender'>여자</option>
                        </select>
                        <input type="text" className="birthInput" name='birth' placeholder='출생년도 4자리' onChange={ e => { setBirth(e.target.value) }} />
                    </div>
                    <div className="registerBtnWrap">
                        <button className='registerSubmitBtn' type='submit'>회원가입</button>
                    </div>
                </form>
            </div>
            {loading ?
                <div className="spinnerContainer">
                    <ScaleLoader color={color} loading={true} css={override} size={150} />
                </div>
                :
                false
            }
        </>
    );
}

export default RegisterForm;