import React from 'react';
import NoticeFull from '../../../pages/notice/noticeDetail/noticeFull';

const NoticeFullComponent = (props) => {
    return(
        <NoticeFull noticeDetail={props.noticeDetail} />
    );
}

export default NoticeFullComponent;