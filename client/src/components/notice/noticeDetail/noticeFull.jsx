import React from 'react';
//import { noticeDetail } from '../../../constants/const';
import NoticeFull from '../../../pages/notice/noticeDetail/noticeFull';

const NoticeFullComponent = (props) => {
    return(
        <NoticeFull noticeDetail={props.noticeDetail} />
    );
}

export default NoticeFullComponent;