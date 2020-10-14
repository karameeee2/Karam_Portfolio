import React from 'react';
import '../../../css/notice/noticeDetail/noticeFull.css';

const NoticeFull = (props) => {
    const noticeFull = props.noticeFull;
    return (
        <div className='noticeFullContainer'>
            {noticeFull.map((item, idx) => {
                return (
                    <table className="noticeFullWrap">
                        <tr className="noticeFullRowWrap">
                            <th className='rowSmall'>{idx}</th>
                            <th className='rowLarge'>{item.subject}</th>
                            <th className='rowMedium'>{item.regdate}</th>
                            <th className='rowMedium'>{item.hit}</th>
                        </tr>
                        <tr className='noticeFullContentWrap'>
                            <td className="noticeContent" colSpan='4'>{item.content}</td>
                        </tr>
                    </table>
                );
            })}
        </div>
    );
}

export default NoticeFull;