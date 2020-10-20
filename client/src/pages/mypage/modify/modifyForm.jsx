import React from 'react';
import '../../../css/mypage/modify/modifyForm.css';

const ModifyForm = () => {
    return (
        <div className="modifyFormContainer">
            <div className="modifyInputWrap">
                <input type="text" className="idInput" value='asdf1234@naver.com' readOnly/>
                <input type="password" className="passwordInput" placeholder='현재 비밀번호'/>
                <input type="password" className="newPasswordInput" placeholder='새 비밀번호'/>
                <input type="password" className="passwordConfirmInput" placeholder='새 비밀번호 확인'/>
                <p className="halfRowWrap">
                    <input type="text" className="nameInput" value='유가람' readOnly />
                    <input type="text" className="nickNameInput" placeholder='닉네임' defaultValue='karameeee' />
                </p>
                <p className="halfRowWrap">
                    <input type="text" className="genderInput" value='여' readOnly />
                    <input type="text" className="birthInput" value='1993/03/07' readOnly />
                </p>
            </div>
            <div className="modifyBtnWrap">
                <button type='submit' className="modifySubmitBtn" >수정하기</button>
            </div>
        </div>
    );
}

export default ModifyForm;