import React from 'react';
import MypageInnerTitle from '../mypageInnerTitle';
import ModifyFormComponent from './modifyForm';
import '../../../css/mypage/modify/modifyUserInfo.css';


const ModifyUserInfo = () => {
    return (
        <div className="modifyInfoContainer">
            <MypageInnerTitle innerTitle='회원정보수정' />
            <ModifyFormComponent />
        </div>
    );
}

export default ModifyUserInfo;