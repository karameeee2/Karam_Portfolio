import React from 'react';
import '../../../css/common/detailInfo.css';
import thumbnail1 from '../../../assets/thumbnail1.jpg';
import { CommonUtils } from '../../../utils/common';
import ProgressQnAComponent from '../../../components/progress/progressDetail/progressQnA';
import '../../../css/progress/progressDetail/progressDetail.css';


const ProgressDetail = (props) => {
    const {surveyDetail, qnaList, sidx, isJoin, mySurveyAnswer} = props;

    return (
        <>
            {/* pageTitle */}
            <div className="pageTitleBox">
                <div className="pageTitleWrap">
                    <h2 className='titleLeft'>진행중인 설문</h2>
                </div>
            </div>

            {/* progressDetail */}
            <section className='infoQnASection'>
                <div className="infoQnAContainer">
                    {/* detailInfo */}
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
                    
                    <ProgressQnAComponent qnaList={qnaList} sidx={sidx} isJoin={isJoin} mySurveyAnswer={mySurveyAnswer} />
                </div>
            </section> 

            {/* <PageTitle pageTitle='진행중인 설문' />
            <section className='infoQnASection'>
                <div className="infoQnAContainer">
                    <DetailInfoComponent surveyDetail={surveyDetail} sidx={sidx} />
                    <ProgressQnAComponent qnaList={qnaList} sidx={sidx} isJoin={isJoin} mySurveyAnswer={mySurveyAnswer} />
                </div>
            </section> */}
        </>
    )
}

export default ProgressDetail;