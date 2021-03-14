import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { CommonUtils } from '../../../utils/common';
import '../../../css/notice/noticeDetail/noticeFull.css';
import '../../../css/notice/noticeDetail/noticeDetail.css';
import '../../../css/common/detailBtn.css';

const NoticeDetail = (props) => {
    const noticeDetail = props.noticeDetail;
    return(
        <>
            {/* pageTitle */}
            <div className="pageTitleBox">
                <div className="pageTitleWrap">
                    <h2 className='titleLeft'>공지사항</h2>
                </div>
            </div>
            <section className="noticeDetailSection">
                <div className='noticeFullContainer'>
                    <table className="noticeFullWrap">
                        <tbody>
                            <tr className="noticeFullRowWrap">
                                <th className='rowSmall'>{noticeDetail.NIDX}</th>
                                <th className='rowLarge'>{noticeDetail.NSUBJECT}</th>
                                <th className='rowMedium'>{CommonUtils.dateFormat(new Date(noticeDetail.CREATEDATE))}</th>
                                <th className='rowMedium'>{noticeDetail.HIT}</th>
                            </tr>
                            <tr className='noticeFullContentWrap'>
                                {/* <div> */}
                                    <td className="noticeContent" colSpan='4'><div>{noticeDetail.NCONTENT}</div></td>
                                {/* </div> */}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <div className='noticeDetailBtnBox'>
            <div className="listBox">
                <Link to="/noticeList">
                    <button className="goSurveyListBtn">목록</button>
                </Link>
            </div>
        </div>
        </>
    );
}

export default NoticeDetail;