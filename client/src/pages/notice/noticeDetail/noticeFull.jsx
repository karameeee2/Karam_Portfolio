import React from 'react';
import '../../../css/notice/noticeDetail/noticeFull.css';
import { CommonUtils } from '../../../utils/common';

const NoticeFull = (props) => {
    const noticeDetail = props.noticeDetail;
    return (
        <div className='noticeFullContainer'>
            <table className="noticeFullWrap">
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
            </table>
        </div>
    );
}

export default NoticeFull;