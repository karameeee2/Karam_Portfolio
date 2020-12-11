import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../../../css/common/detailBtn.css';

const ProgressDetailBtn = (props) => {
    const joinSurveySubmit = props.onSubmit;

    const {isJoin} = props;

    return (
        <div className='progressDetailBtnBox'>
            {/*  */}
            {isJoin ?
            <div className="listBox">
                <Link to="/progressList">
                    <button type='button' className="goSurveyListBtn">목록</button>
                </Link>
            </div>
            :
            <div className="submitCancelBox">
                <button type='submit' className="surveySubmitBtn" onSubmit = {e => {
                    e.stopPropagation();
                    e.preventDefault();
                    joinSurveySubmit()}}>제출</button>
                <Link to="/progressList">
                    <button type='button' className="surveyCancelBtn">그만하기</button>
                </Link>
            </div>
            }
        </div>
    );
}

export default ProgressDetailBtn;