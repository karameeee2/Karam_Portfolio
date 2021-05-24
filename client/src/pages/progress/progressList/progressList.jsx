import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { CommonUtils } from '../../../utils/common';
import ReactPaginate from 'react-paginate';
import '../../../css/common/pageTitle.css';
import '../../../css/common/previewList.css';
import '../../../css/progress/progressList/progressPreview.css';
import '../../../css/progress/progressList/progressPreview.css';
import thumbnail1 from '../../../assets/thumbnail/thumbnail_basic.png';
import termIcon from '../../../assets/icons/termIcon.svg';
import hashIcon from '../../../assets/icons/hashIcon.svg';
import plus16 from '../../../assets/icons/plus16.svg';
import arrowNext from '../../../assets/icons/arrowNext.svg';
import arrowPrev from '../../../assets/icons/arrowPrev.svg';

const ProgressList = (props) => {
    const progressPreview = props.surveyList;
    return (
        <>
            {/* pageTitle */}
            <div className="pageTitleBox">
                <div className="pageTitleWrap">
                    <h2 className='titleLeft'>진행중인 설문</h2>
                    <Link to='/createSurvey'>
                        <button className='createSurveyBtn'>새 설문 <img src={plus16} alt="새 설문 등록"/></button>
                    </Link>
                </div>
            </div>
            
            {/* progressPrev */}
            <section className="progressPreviewSection">
                <div className="progressPrevWrap">
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
                </div>
            </section>

            {/* pagination */}
            {/* <ReactPaginate 
                // pageCount={Math.ceil(totalRecords / 6)}
                pageRangeDisplayed={6}
                breakLabel={''}
                previousLabel={arrowPrev+'이전'}
                nextLabel={arrowNext+'다음'}
                // onPageChange={changePage}
                containerClassName={'paginationWrap'}
                activeClassName={'currentPage'}
                previousClassName={'prevPage'}
                nextClassName={'nextPage'}
            /> */}
            
        </>
        // <div>
        //     {/* <SearchComponent /> */}
        //     <PageTitle pageTitle='진행중인 설문' />
        //     {/* <CreateBtnComponent /> */}
        //     {/* List */}
        //     <section className="progressPreviewSection">
        //         <div className="progressPrevWrap">
        //             <ProgressPreviewComponent surveyList={props.surveyList} />
        //         </div>
        //     </section>
        // </div>
    )
}

export default ProgressList;