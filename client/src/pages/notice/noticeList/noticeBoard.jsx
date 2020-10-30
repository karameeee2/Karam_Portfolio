import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../../../css/notice/noticeList/noticeBoard.css';
import { CommonUtils } from '../../../utils/common';

const NoticeBoard = (props) => {
    const noticeListContent = props.noticeListContent;

    return (
        <div className='noticeBoardContainer'>
            <table className="noticeBoardWrap">
                <thead>
                    <tr className="noticeRowWrap">
                        <th className='rowSmall'>번호</th>
                        <th className='rowLarge'>제목</th>
                        <th className='rowMidium'>등록일</th>
                        <th className='rowMidium'>조회수</th>
                    </tr>
                </thead>
                <tbody>
                {noticeListContent.map((item) => {
                    return (
                            <tr className="noticeContentWrap" key={item.NIDX}>
                                <td className='num rowSmall'>{item.NIDX}</td>
                                <td className='subject rowLarge'><Link to='/noticeDetail'>{item.NSUBJECT}</Link></td>
                                <td className='regdate rowMidium'>{CommonUtils.dateFormat(new Date(item.CREATEDATE))}</td>
                                <td className='hit rowMidium'>{item.HIT}</td>
                            </tr>
                    );
                })}
                        </tbody>
            </table>
        </div>
    );
}

export default NoticeBoard;