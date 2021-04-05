import React from 'react';
import EndPreviewComponent from '../../components/end/endList/endPreview';
import NoticeBoardComponent from '../../components/notice/noticeList/noticeBoard';
import ProgressPreviewComponent from '../../components/progress/progressList/progressPreview';
import '../../css/search/searchResult.css';
import { CommonUtils } from '../../utils/common';
import thumbnail1 from '../../assets/thumbnail/thumbnail_basic.png';
import termIcon from '../../assets/icons/termIcon.svg';
import hashIcon from '../../assets/icons/hashIcon.svg';
import joinedIcon from '../../assets/icons/joinedIcon.svg';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const SearchResult = (props) => {
    const surveyList = props.surveyList;
    const endList = props.endList;
    const noticeList = props.noticeList;
    const searchTotal = props.searchTotal || 0;

    return (
        <div>
            {/* <SearchComponent categoryChange={props.categoryChange} /> */}
            {/* pageTitle */}
            <div className="pageTitleBox">
                <div className="pageTitleWrap">
                    <h2 className='titleLeft'>총 {searchTotal}건이 검색되었습니다.</h2>
                </div>
            </div>
            <section className="searchResultSection">
                <div className="searchResultContainer">
                    {surveyList.length > 0 &&
                        <div className="subTitleWrap bottom24">
                            <p className="subTitleLine">
                                <span className="subTitle">진행중인 설문</span>
                            </p>
                        </div>
                    }
                    {surveyList.length > 0 &&
                        <div className="previewContainer" surveylist={surveyList || []}>
                            <ul className="previewWrap">
                                {surveyList.map((item) => {
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
                    }
                    {endList.length > 0 &&
                        <div className="subTitleWrap bottom24">
                            <p className="subTitleLine">
                                <span className="subTitle">종료된 설문</span>
                            </p>
                        </div>
                    }
                    {endList.length > 0 &&
                        <div className="previewContainer" endlist={endList || []}>
                            <ul className="previewWrap">
                                {endList.map((item) => {
                                    return (
                                        <li className="prevBox" key={item.SIDX}>
                                            <img className="prevThumbnail" src={item.SIMG || thumbnail1} alt='설문 썸네일 이미지' onError={e => e.target.src = thumbnail1} />
                                            <div className="prevInfoBox">
                                                <p className='prevNickname'>{item.NICKNAME}</p>
                                                <Link to={`/endDetail/${item.SIDX}`}><h3 className='prevSubject'>{item.SSUBJECT}</h3></Link>
                                                <p className='prevTerm'>
                                                    <img src={termIcon} alt="기간"/>{CommonUtils.dateFormat(new Date(item.SDATE))} ~ {CommonUtils.dateFormat(new Date(item.EDATE))}
                                                </p>
                                                <p className="prevTag">
                                                    <img src={hashIcon} alt="해시태그"/>{item.TAG}
                                                </p>
                                                <p className="prevJoin">
                                                    <img src={joinedIcon} alt="참여인원"/>참여인원 {100}명
                                                </p>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    }
                    {noticeList.length > 0 &&
                        <div className="subTitleWrap bottom24">
                            <p className="subTitleLine">
                                <span className="subTitle">공지사항</span>
                            </p>
                        </div>
                    }
                    {noticeList.length > 0 &&
                        <div className='noticeBoardContainer' noticelist={noticeList || []}>
                            <table className="noticeBoardWrap">
                                <tbody>
                                    <tr className="noticeRowWrap">
                                        <th className='rowSmall'>번호</th>
                                        <th className='rowLarge'>제목</th>
                                        <th className='rowMidium'>등록일</th>
                                        <th className='rowMidium'>조회수</th>
                                    </tr>
                                    {noticeList.map((item) => {
                                        return (
                                            <tr className="noticeContentWrap" key={item.NIDX}>
                                                <td className='num rowSmall'>{item.NIDX}</td>
                                                <td className='subject rowLarge'><Link to={`/noticeDetail/${item.NIDX}`}>{item.NSUBJECT}</Link></td>
                                                <td className='regdate rowMidium'>{CommonUtils.dateFormat(new Date(item.CREATEDATE))}</td>
                                                <td className='hit rowMidium'>{item.HIT}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    }
                </div>
            </section>
        </div>
    );
}

export default SearchResult;