import React from 'react';
import '../../css/common/detailInfo.css';
import thumbnail1 from '../../assets/thumbnail1.jpg';
import { CommonUtils } from '../../utils/common';

const DetailInfo = (props) => {
    const surveyDetail = props.surveyDetail;

    return (
        <div className='detailInfoContainer'>
            <div className="infoTitleWrap">
                <p className="infoTitleLine">
                    <span></span>
                    <span className="infoTitle">설문 정보</span>
                </p>
            </div>
            <div className="detailInfoBox">
                <img className="infoThumbnail" src={surveyDetail.SIMG || thumbnail1} alt='설문조사 대표이미지' onError={e => e.target.src = thumbnail1} />
                <div className="detailInfoWrap">
                    <h3 className="infoSubject">{surveyDetail.SSUBJECT}</h3>
                    <p className="infoContent">{surveyDetail.SCONTENT}</p>
                    <p className="infoSpanWrap">
                        <span className="infoNickname">{surveyDetail.NICKNAME}</span>
                        <span className='verLine'>|</span>
                        <span className="infoTerm">{CommonUtils.dateFormat(new Date(surveyDetail.SDATE))} ~ {CommonUtils.dateFormat(new Date(surveyDetail.EDATE))}</span>
                        <span className='verLine'>|</span>
                        <span className="infoTag">{surveyDetail.TAG}</span>
                    </p>
                </div>
            </div>

        </div>
    );
}

export default DetailInfo;