import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../../css/mypage/mypageCategory.css';

const MypageCategory = () => {
    return (
        <div className='mypageCategoryContainer'>
            <ul className="categoryWrap">
                <Link to='/mypage'><li className='categories'><a href='#!'>회원 정보 수정</a></li></Link>
                <Link to='/mypage/mysurvey'><li className='categories'><a href='#!'>내가 등록한 설문</a></li></Link>
                <Link to='/mypage/takesurvey'><li className='categories'><a href='#!'>참여한 설문</a></li></Link>
                <Link to='/mypage/withdraw'><li className='categories'><a href='#!'>회원 탈퇴</a></li></Link>
            </ul>
        </div>
    );
}

export default MypageCategory;