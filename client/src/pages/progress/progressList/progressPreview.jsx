import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../../../css/common/previewList.css';
import '../../../css/progress/progressList/progressPreview.css';
import { CommonUtils } from '../../../utils/common';
import thumbnail1 from '../../../assets/thumbnail1.jpg'
import termIcon from '../../../assets/icons/termIcon.svg';
import hashIcon from '../../../assets/icons/hashIcon.svg';

const ProgressPreview = (props) => {
    const progressPreview = props.progressPreview;
    return (
        <div className="previewContainer">
            <ul className="previewWrap">
                {progressPreview.map((item) => {
                    return (
                        <li className="prevBox" key={item.SIDX}>
                            <img className="prevThumbnail" src={item.SIMG || thumbnail1} alt='설문 썸네일 이미지' onError={e => e.target.src = thumbnail1} />
                            <div className="prevInfoBox">
                                <p className='prevNickname'>{item.NICKNAME}</p>
                                <Link to={`/progressDetail/${item.SIDX}`} ><h3 className='prevSubject'>{item.SSUBJECT}</h3></Link>
                                <p className='prevTerm'>
                                    <img src={termIcon} alt="기간"/>{CommonUtils.dateFormat(new Date(item.SDATE))} ~ {CommonUtils.dateFormat(new Date(item.EDATE))}
                                </p>
                                <p className="prevTag">
                                    <img src={hashIcon} alt="해시태그"/>{item.TAG}
                                </p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default ProgressPreview;