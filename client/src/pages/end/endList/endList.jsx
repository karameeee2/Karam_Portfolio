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
    const cookie = props.cookie;

    const isLoginCheck = (e) => {
        if(!cookie) {
            alert('로그인 후 이용 가능한 서비스입니다.');
            window.location.href = '/login'
        } else {
            window.location.href = `/endDetail/` + e.target.id;
        }
    }

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
                                    <div className='thumbnailCover'>
                                        <img className="prevThumbnail" src={item.IMG || thumbnail1} alt='설문 썸네일 이미지'onError={e => {e.target.src = thumbnail1; e.target.onError = null;}} />
                                    </div>
                                    <div className="prevInfoBox">
                                        <p className='prevNickname'>{item.NICKNAME}</p>
                                        <h3 className='prevSubject' id={item.SIDX} onClick={isLoginCheck}>{item.SSUBJECT}</h3>
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