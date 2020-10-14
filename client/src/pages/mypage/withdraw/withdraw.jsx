import React from 'react';
import MypageInnerTitle from '../mypageInnerTitle';
import '../../../css/mypage/withdraw/withdraw.css';
import WithdrawInfoComponent from '../../../components/mypage/withdraw/withdrawInfo';

const Withdraw = () => {
    return (
        <div className="withdrawContainer">
            <MypageInnerTitle innerTitle='회원탈퇴' />
            <WithdrawInfoComponent />
        </div>
    );
}

export default Withdraw;