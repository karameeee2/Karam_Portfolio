import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../../../css/common/detailBtn.css';

const EndDetailBtn = () => {
    return (
        <div className='endDetailBtnBox'>
            <div className="listBox">
                <Link to="/endList">
                    <button className="goSurveyListBtn">목록</button>
                </Link>
            </div>
        </div>
    );
}

export default EndDetailBtn;