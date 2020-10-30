import React from 'react';
import '../../css/common/detailInfo.css';
import thumbnail1 from '../../assets/thumbnail1.jpg';
import { CommonUtils } from '../../utils/common';

const DetailInfo = (props) => {
    const detailInfo = props.detailInfo;

    return (
        <div className='detailInfoContainer'>
            <div className="detailInfoBox">
                <img className="infoThumbnail" src={detailInfo.SIMG || thumbnail1} alt='설문조사 대표이미지' onError={e => e.target.src = thumbnail1} />
                <div className="detailInfoWrap">
                    <h3 className="infoSubject">{detailInfo.SSUBJECT}</h3>
                    <p className="infoContent">{detailInfo.SCONTENT}</p>
                    <p className="infoSpanWrap">
                        <span className="infoNickname">{detailInfo.NICKNAME}</span>
                        <span className='verLine'>|</span>
                        <span className="infoTerm">{CommonUtils.dateFormat(new Date(detailInfo.SDATE))} ~ {CommonUtils.dateFormat(new Date(detailInfo.EDATE))}</span>
                        <span className='verLine'>|</span>
                        <span className="infoTag">{detailInfo.TAG}</span>
                    </p>
                </div>
            </div>

        </div>
    );
}

export default DetailInfo;