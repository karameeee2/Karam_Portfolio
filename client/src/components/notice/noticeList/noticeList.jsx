import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import NoticeList from '../../../pages/notice/noticeList/noticeList';

const NoticeListComponent = () => {
    useEffect(() => {
        getNoticeList();
    }, []);

    const [noticeList, setNoticeList] = useState([]);

    const getNoticeList = () => {
        Axios.get('http://localhost:8080/api/noticeList')
        .then((res) => {
            setNoticeList(res.data);
        })
        .catch((err) => {
            console.log('noticeList error', err.res, err);
        })
    }
    return (
        <NoticeList pageTitle={ '공지사항' } noticeList={ noticeList } />
    );
}

export default NoticeListComponent;
