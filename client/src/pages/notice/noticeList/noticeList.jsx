import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../../../css/notice/noticeList/noticeBoard.css';
import { CommonUtils } from '../../../utils/common';

const NoticeList = (props) => {
    const noticeList = props.noticeList;
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
            </section>
        </>
    );
}

export default NoticeList;