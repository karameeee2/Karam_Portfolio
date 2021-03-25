import React from 'react';
import { CommonUtils } from '../../../utils/common';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import thumbnail1 from '../../../assets/thumbnail/thumbnail_basic.png';
import '../../../css/end/endDetail/endDetail.css';
import '../../../css/end/endDetail/endChart.css';
import '../../../css/common/pageTitle.css';
import '../../../css/common/detailInfo.css';
import '../../../css/common/detailBtn.css';

const EndDetail = (props) => {
    const { surveyDetail, questionList } = props;
    
    return (
        <>
            {/* pageTitle */}
            <div className="pageTitleBox">
                <div className="pageTitleWrap">
                    <h2 className='titleLeft'>종료된 설문</h2>
                </div>
            </div>

            {/* endDetailInfo */}
            <section className='infoQnASection'>
                <div className="infoQnAContainer">
                    <div className='detailInfoContainer'>
                        <div className="subTitleWrap">
                            <p className="subTitleLine">
                                <span className="subTitle">설문 정보</span>
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
                    
                    {/* endChart */}
                    <div className='endChartContainer'>
                        <div className="subTitleWrap">
                            <p className="subTitleLine">
                                <span className="subTitle">설문 결과</span>
                            </p>
                        </div>
                        <div className="categoryWrap">
                            <ul className="categoryBox">
                                <li className='category'>
                                    <span className="categoryColor color01" />
                                    <span className="categoryName">10대</span>
                                </li>
                                <li className='category'>
                                    <span className="categoryColor color02" />
                                    <span className="categoryName">20대</span>
                                </li>
                                <li className='category'>
                                    <span className="categoryColor color03" />
                                    <span className="categoryName">30대</span>
                                </li>
                                <li className='category'>
                                    <span className="categoryColor color04" />
                                    <span className="categoryName">40대</span>
                                </li>
                                <li className='category'>
                                    <span className="categoryColor color05" />
                                    <span className="categoryName">기타</span>
                                </li>
                            </ul>
                        </div>
                        {questionList.map((item, idx) => {
                            return(
                                <div className="chartWrap" key={item.QIDX}>
                                    <p className="qst" key={item.QIDX}>{idx+1}. {item.QUESTION}</p>
                                    <div className="endAswBox">
                                        {item.answerList.map((answer) => {
                                            console.log('answer::::::',answer);
                                            return (
                                                <div className="chartBox" key={answer.AIDX}>
                                                    <p className="labelPercent">
                                                        <span className="chartLabel">{answer.ANSWER}</span>
                                                        <span className="chartPercent">12%</span>
                                                    </p>
                                                    <div className="chartLine">
                                                        <ul className="chartBar">
                                                            <li className="answer01" style={
                                                                {width:(answer.TOTAL/answer['10s'] || 0) * 100}
                                                            }></li>
                                                            <li className="answer02"></li>
                                                            <li className="answer03"></li>
                                                            <li className="answer04"></li>
                                                            <li className="answer05"></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                {/* endDetailBtn */}
                <div className='endDetailBtnBox'>
                    <div className="listBox">
                        <Link to="/endList">
                            <button className="goSurveyListBtn">목록</button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default EndDetail;