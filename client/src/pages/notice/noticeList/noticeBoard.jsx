import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../../../css/notice/noticeList/noticeBoard.css';

const NoticeBoard = (props) => {
    const noticeListContent = props.noticeListContent;

    return (
        <div className='noticeBoardContainer'>
            <table className="noticeBoardWrap">
                <tr className="noticeRowWrap">
                    <th className='rowSmall'>번호</th>
                    <th className='rowLarge'>제목</th>
                    <th className='rowMidium'>등록일</th>
                    <th className='rowMidium'>조회수</th>
                </tr>
                {noticeListContent.map((item, idx) => {
                    return (
                        <tr className="noticeContentWrap">
                            <td className='num rowSmall'>{idx+1}</td>
                            <Link to='/noticeDetail'><td className='subject rowLarge'>{item.subject}</td></Link>
                            <td className='regdate rowMidium'>{item.regdate}</td>
                            <td className='hit rowMidium'>{item.hit}</td>
                        </tr>
                    );
                })}
            </table>
        </div>
    );
}

export default NoticeBoard;