import React from 'react';
import NoticeBoard from '../../../pages/notice/noticeList/noticeBoard';

const NoticeBoardComponent = (props) => {
    return(
        <NoticeBoard noticeListContent={props.noticeList} />
    );
}

export default NoticeBoardComponent;