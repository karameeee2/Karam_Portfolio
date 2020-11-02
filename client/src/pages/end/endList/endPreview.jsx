import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../../../css/common/previewList.css';
import '../../../css/end/endList/endPreview.css';
import thumbnail1 from '../../../assets/thumbnail1.jpg'
import { CommonUtils } from '../../../utils/common';

const EndPreview = (props) => {
    const endPreview = props.endList;
    return (
        <div className="previewContainer">
            <ul className="previewWrap">
                {endPreview.map((item) => {
                    return (
                        <li className="prevBox" key={item.SIDX}>
                            <img className="prevThumbnail" src={item.SIMG || thumbnail1} alt='설문 썸네일 이미지' onError={e => e.target.src = thumbnail1} />
                            <Link to="/endDetail"><h3 className='prevSubject'>{item.SSUBJECT}</h3></Link>
                            <p className='prevNickname'>{item.NICKNAME}</p>
                            <p className='prevTerm'>{CommonUtils.dateFormat(new Date(item.SDATE))} ~ {CommonUtils.dateFormat(new Date(item.EDATE))}</p>
                            <p className="prevTag">참여인원 {100}명</p>
                        </li>
                    );
                }).reverse()}
            </ul>
        </div>
    );
}

export default EndPreview;