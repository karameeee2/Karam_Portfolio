import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { CommonUtils } from '../../../utils/common';
import ReactPaginate from 'react-paginate';
import '../../../css/end/endList/endList.css';
import '../../../css/end/endList/endPreview.css';
import '../../../css/common/previewList.css';
import '../../../css/common/pagination.css';
import thumbnail1 from '../../../assets/thumbnail/thumbnail_basic.png';
import termIcon from '../../../assets/icons/termIcon.svg';
import hashIcon from '../../../assets/icons/hashIcon.svg';
import joinedIcon from '../../../assets/icons/joinedIcon.svg';

const EndList = (props) => {
    const activeEndList = props.activeEndList;
    const handlePageClick = props.handlePageClick;
    const endCount = props.endList.length;
    const item_per_page = props.item_per_page;

    return (
        <>
            {/* pageTitle */}
            <div className="pageTitleBox">
                <div className="pageTitleWrap">
                    <h2 className='titleLeft'>종료된 설문</h2>
                </div>
            </div>

            {/* endPreview */}
            <section className="endPreviewSection">
                <div className="previewContainer">
                    <ul className="previewWrap">
                        {activeEndList.map((item) => {
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
                {/* pagination */}
                <div className="paginationBox">
                    <ReactPaginate 
                        previousLabel={'이전'}
                        nextLabel={'다음'}
                        breakLabel={'...'}
                        pageCount={Math.ceil(endCount / item_per_page)}
                        pageRangeDisplayed={item_per_page}
                        containerClassName={'paginationWrap'}
                        activeClassName={'currentPage'}
                        previousClassName={'prevPage'}
                        nextClassName={'nextPage'}
                        onPageChange={handlePageClick}
                        />
                </div>
            </section>
        </>
        
    );
}

export default EndList;