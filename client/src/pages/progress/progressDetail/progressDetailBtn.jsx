import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../../../css/common/detailBtn.css';

const ProgressDetailBtn = () => {
    return (
        <div className='progressDetailBtnBox'>
            <div className="submitCancelBox">
                <button className="surveySubmitBtn">제출</button>
                <button className="surveyCancelBtn">그만하기</button>
            </div>
            <div className="listBox">
                <Link to="/progressList">
                    <button className="goSurveyListBtn">목록</button>
                </Link>
            </div>
        </div>
    );
}

export default ProgressDetailBtn;