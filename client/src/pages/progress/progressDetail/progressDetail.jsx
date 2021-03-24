import React from 'react';
import '../../../css/common/pageTitle.css';
import '../../../css/common/detailInfo.css';
import '../../../css/progress/progressDetail/progressDetail.css';
import '../../../css/progress/progressDetail/progressQnA.css';
import '../../../css/common/detailBtn.css';
import thumbnail1 from '../../../assets/thumbnail/thumbnail_basic.png';
import { CommonUtils } from '../../../utils/common';
import { Link } from 'react-router-dom';


const ProgressDetail = (props) => {
    const { surveyDetail, questionList, _setCheckedList, isJoin, mySurveyAnswer, checkedList } = props;
    const joinSurveySubmit = props.onSubmit;

    console.log('checkedList', checkedList)
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
                        {/* subTitle */}
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
                    <div className='qnaContainer'>
                        {/* progressQnA */}
                        <div className="subTitleWrap">
                            <p className="subTitleLine">
                                <span className="subTitle">설문</span>
                            </p>
                        </div>
                        {/* subTitle */}
                        {questionList.map((item, idx) => {
                            return (
                                <div className="qnaWrap" key={item.QIDX}>
                                    <p className="qst">{idx + 1}. {item.QUESTION}</p>
                                    {item.answerList.map((answer, answerIndex) => {
                                        // console.log(answer,);
                                        // mySurveyAnswer[idx].AIDX === answer.AIDX
                                        return (
                                            <div className={`aswBox ${mySurveyAnswer[idx] && mySurveyAnswer[idx].AIDX === answer.AIDX ? 'checked' : ''}
                                            ${checkedList[idx] && checkedList[idx].aidx === answer.AIDX ? 'checked' : ''}
                                            `}
                                                key={answer.AIDX} onClick={() => { _setCheckedList(idx, { aidx: answer.AIDX, qidx: item.QIDX }) }} >
                                                <div className={`asw ${checkedList[idx] && checkedList[idx].aidx === answer.AIDX ? 'active' : ''}
                                                ${mySurveyAnswer[idx] && mySurveyAnswer[idx].AIDX === answer.AIDX ? 'active' : ''}
                                                `}
                                                >{answerIndex+1}</div>
                                                {answer.ANSWER}
                                            </div>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* progressDetailBtn */}
            <div className='progressDetailBtnBox'>
                {/*  */}
                {isJoin ?
                    <div className="listBox">
                        <Link to="/progressList">
                            <button type='button' className="goSurveyListBtn">목록</button>
                        </Link>
                    </div>
                    :
                    <div className="submitCancelBox">
                        <button type='submit' className="surveySubmitBtn" onClick={e => {
                            console.log('click');
                            e.stopPropagation();
                            e.preventDefault();
                            joinSurveySubmit()
                        }}>제출</button>
                        <Link to="/progressList">
                            <button type='button' className="surveyCancelBtn">그만하기</button>
                        </Link>
                    </div>
                }
            </div>

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