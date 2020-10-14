import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../../../css/common/previewList.css';
import '../../../css/progress/progressList/progressPreview.css';

const CreateBtn = (props) => {
    const progressPreview = props.progressPreview;
    return (
        <div className="buttonWrap">
            <Link to='/createSurvey'>
                <button>새 설문 등록</button>
            </Link>
        </div>

    );
}

export default CreateBtn;