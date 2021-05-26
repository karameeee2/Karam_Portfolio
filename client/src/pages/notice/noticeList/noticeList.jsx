import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { CommonUtils } from '../../../utils/common';
import ReactPaginate from 'react-paginate';
import '../../../css/notice/noticeList/noticeBoard.css';
import '../../../css/common/pagination.css';

const NoticeList = (props) => {
    const activeNoticeList = props.activeNoticeList;
    const handlePageClick = props.handlePageClick;
    const noticeCount = props.noticeList.length;
    const item_per_page = props.item_per_page;

    return (
        <>
            {/* <SearchComponent /> */}
            {/* pageTitle */}
            <div className="pageTitleBox">
                <div className="pageTitleWrap">
                    <h2 className='titleLeft'>공지사항</h2>
                </div>
            </div>
            {/* List */}
            <section className="noticeListSection">
                <div className='noticeBoardContainer'>
                    <table className="noticeBoardWrap">
                        <tbody>
                            <tr className="noticeRowWrap">
                                <th className='rowSmall'>번호</th>
                                <th className='rowLarge'>제목</th>
                                <th className='rowMidium'>등록일</th>
                                <th className='rowMidium'>조회수</th>
                            </tr>
                            {activeNoticeList.map((item) => {
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
                {/* pagination */}
                <div className="paginationBox">
                    <ReactPaginate 
                        previousLabel={'이전'}
                        nextLabel={'다음'}
                        breakLabel={'...'}
                        pageCount={Math.ceil(noticeCount / item_per_page)}
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

export default NoticeList;