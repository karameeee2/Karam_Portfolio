import React from 'react';
import { noticeListContent } from '../../../constants/const';
import NoticeBoard from '../../../pages/notice/noticeList/noticeBoard';

const NoticeBoardComponent = () => {
    return(
        <NoticeBoard noticeListContent={noticeListContent} />
    );
}

export default NoticeBoardComponent;