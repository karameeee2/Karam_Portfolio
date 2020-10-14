import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../../../css/common/previewList.css';
import '../../../css/progress/progressList/progressPreview.css';

const ProgressPreview = (props) => {
    const progressPreview = props.progressPreview;
    return (
        //  <div className="progressPrevWrap">
        //     <div className="buttonWrap">
        //         <Link to='/createSurvey'>
        //         <button>새 설문 등록</button>
        //         </Link>
        //     </div>

            <div className="previewContainer">
                <ul className="previewWrap">
                    {progressPreview.map((item) => {
                        return (
                            <li className="prevBox">
                                <img className="prevThumbnail" src={item.thumbnail} />
                                <Link to="/progressDetail"><h3 className='prevSubject'>{item.subject}</h3></Link>
                                <p className='prevNickname'>{item.nickname}</p>
                                <p className='prevTerm'>{item.term}</p>
                                <p className="prevTag">{item.tag}</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        // </div>

    );
}

export default ProgressPreview;