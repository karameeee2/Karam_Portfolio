import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API, API_LIST, HOST } from '../../../constants/api';
import NoticeList from '../../../pages/notice/noticeList/noticeList';

const NoticeListComponent = () => {
    const [noticeList, setNoticeList] = useState([]);

    useEffect(() => {
        getNoticeList();
    }, []);

    const getNoticeList = () => {
        let url = API_LIST.NOTICE_LIST;
        Axios.get(url)
        .then((res) => {
            setNoticeList(res.data);
        })
        .catch((err) => {
            console.log('noticeList error', err.res, err);
        })
    }

    const [activeNoticeList, setActiveNoticeList] = useState([]);
    const item_per_page = 30;

    useEffect(() => {
        handlePageClick({selected :0})
    }, [noticeList]);

    const handlePageClick = (data) => {
        let selected = data.selected;
        let offset = Math.ceil(selected * item_per_page);

        let arr = [...noticeList];

        arr = arr.slice(offset, offset + item_per_page);

        setActiveNoticeList(arr);
    }

    return (
        <NoticeList noticeList={ noticeList } item_per_page={item_per_page} activeNoticeList={activeNoticeList} handlePageClick={handlePageClick} />
        // <NoticeList pageTitle={ '공지사항' } noticeList={ noticeList } />
    );
}

export default NoticeListComponent;
