import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../../../css/common/detailBtn.css';

const NoticeDetailBtn = () => {
    return (
        <div className='noticeDetailBtnBox'>
            <div className="listBox">
                <Link to="/noticeList">
                    <button className="goSurveyListBtn">목록</button>
                </Link>
            </div>
        </div>
    );
}

export default NoticeDetailBtn;