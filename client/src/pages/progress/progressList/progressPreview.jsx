import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../../../css/common/previewList.css';
import '../../../css/progress/progressList/progressPreview.css';
import { CommonUtils } from '../../../utils/common';
import thumbnail1 from '../../../assets/thumbnail1.jpg'

const ProgressPreview = (props) => {
    const progressPreview = props.progressPreview;
    return (
        <div className="previewContainer">
            <ul className="previewWrap">
                {progressPreview.map((item) => {
                    return (
                        <li className="prevBox" key={item.SIDX}>
                            <img className="prevThumbnail" src={item.SIMG || thumbnail1} alt='설문 썸네일 이미지' onError={e => e.target.src = thumbnail1} />
                            <Link to={`/progressDetail/${item.SIDX}`} ><h3 className='prevSubject'>{item.SSUBJECT}</h3></Link>
                            <p className='prevNickname'>{item.NICKNAME}</p>
                            <p className='prevTerm'>{CommonUtils.dateFormat(new Date(item.SDATE))} ~ {CommonUtils.dateFormat(new Date(item.EDATE))}</p>
                            <p className="prevTag">{item.TAG}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default ProgressPreview;