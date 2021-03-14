import React from 'react';
import { CommonUtils } from '../../../utils/common';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../../../css/end/endDetail/endDetail.css';
import '../../../css/end/endDetail/endChart.css';
import '../../../css/common/pageTitle.css';
import '../../../css/common/detailInfo.css';
import '../../../css/common/detailBtn.css';
import thumbnail1 from '../../../assets/thumbnail/thumbnail_basic.png';

const EndDetail = (props) => {
    const surveyDetail = props.surveyDetail;
    const questionList = props.questionList;
    
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
                                <div className="chartWrap">
                                    <p className="qst" key={item.QIDX}>{idx+1}. {item.QUESTION}</p>
                                    <div className="endAswBox">
                                        <div className="chartBox">
                                            <p className="labelPercent">
                                                <span className="chartLabel">answer01</span>
                                                <span className="chartPercent">12%</span>
                                            </p>
                                            <p className="chartLine">
                                                <ul className="chartBar">
                                                    <li className="answer01"></li>
                                                    <li className="answer02"></li>
                                                    <li className="answer03"></li>
                                                    <li className="answer04"></li>
                                                    <li className="answer05"></li>
                                                </ul>
                                            </p>
                                        </div>
                                        <div className="chartBox">
                                            <p className="labelPercent">
                                                <span className="chartLabel">answer02</span>
                                                <span className="chartPercent">5%</span>
                                            </p>
                                            <p className="chartLine">
                                                <ul className="chartBar">
                                                    <li className="answer01"></li>
                                                    <li className="answer02"></li>
                                                    <li className="answer03"></li>
                                                    <li className="answer04"></li>
                                                    <li className="answer05"></li>
                                                </ul>
                                            </p>
                                        </div>
                                        <div className="chartBox">
                                            <p className="labelPercent">
                                                <span className="chartLabel">answer03</span>
                                                <span className="chartPercent">21%</span>
                                            </p>
                                            <p className="chartLine">
                                                <ul className="chartBar">
                                                    <li className="answer01"></li>
                                                    <li className="answer02"></li>
                                                    <li className="answer03"></li>
                                                    <li className="answer04"></li>
                                                    <li className="answer05"></li>
                                                </ul>
                                            </p>
                                        </div>
                                        <div className="chartBox">
                                            <p className="labelPercent">
                                                <span className="chartLabel">answer04</span>
                                                <span className="chartPercent">8%</span>
                                            </p>
                                            <p className="chartLine">
                                                <ul className="chartBar">
                                                    <li className="answer01"></li>
                                                    <li className="answer02"></li>
                                                    <li className="answer03"></li>
                                                    <li className="answer04"></li>
                                                    <li className="answer05"></li>
                                                </ul>
                                            </p>
                                        </div>
                                        <div className="chartBox">
                                            <p className="labelPercent">
                                                <span className="chartLabel">answer05</span>
                                                <span className="chartPercent">14%</span>
                                            </p>
                                            <p className="chartLine">
                                                <ul className="chartBar">
                                                    <li className="answer01"></li>
                                                    <li className="answer02"></li>
                                                    <li className="answer03"></li>
                                                    <li className="answer04"></li>
                                                    <li className="answer05"></li>
                                                </ul>
                                            </p>
                                        </div>
                                    </div>
                                    {/* {endA.map((item, idx) => {
                                        return(
                                            <p className="aswBox" key={idx}>
                                                <div className="chartBox">
                                                    <span className="age">{item.asw}</span>
                                                    <ul className="chartBar">
                                                        <li className='answer01' style={{width: '33%'}}></li>
                                                        <li className='answer02' style={{width: '24%'}}></li>
                                                        <li className='answer03' style={{width: '19%'}}></li>
                                                        <li className='answer04' style={{width: '15%'}}></li>
                                                        <li className='answer05' style={{width: '9%'}}></li>
                                                    </ul>
                                                </div>
                                                
                                            </p>
                                        );
                                    })} */}
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