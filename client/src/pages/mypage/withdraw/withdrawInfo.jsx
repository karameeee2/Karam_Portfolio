import React from 'react';
import '../../../css/mypage/withdraw/withdrawInfo.css';

const WithdrawInfo = () => {
    return (
        <div className="withdrawInfoContainer">
            <div className="withdrawWrap">
                <div className="infoTextBox">
                <p className="withdrawInfoText">
                    회원탈퇴에 앞서 아래의 사항을 반드시 확인하시기 바랍니다.
                </p>
                <br />
                <p className="withdrawInfoText">
                    1. 회원 탈퇴를 하더라도 회원님의 개인정보(이름, 휴대폰번호)는 즉시 삭제가 되나, 그외의
                    설문에 이용된 정보는 삭제처리 되지 않습니다.
                </p>
                <br />
                <p className="withdrawInfoText">
                    2. 탈퇴하신 아이디(이메일)는 재사용이 불가합니다.
                </p>
                </div>
                <div className="withdrawInputBox">
                    <input type="password" className="passwordInput" placeholder='비밀번호 입력'/>
                    <button type='submit' className='withdrawSubmit'>탈퇴하기</button>
                </div>
            </div>              
        </div>
    );
}

export default WithdrawInfo;