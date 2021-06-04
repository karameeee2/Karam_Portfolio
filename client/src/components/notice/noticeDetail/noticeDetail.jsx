import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_LIST } from '../../../constants/api';
import NoticeDetail from '../../../pages/notice/noticeDetail/noticeDetail';

const NoticeDetailComponent = (props) => {
    const [noticeDetail, setNoticeDetail] = useState({});
    
    useEffect(() => {
        let nidx = props.match.params.nidx;
        getNoticeDetail(nidx);
    }, []);
    
    const getNoticeDetail = (nidx) => {
        let url = API_LIST.NOTICE_DETAIL;
        Axios.get(url + `?nidx=${nidx}`)
        .then((response) => {
            // console.log(response.data)
            setNoticeDetail(response.data[0])
            // console.log(response.data)
        })
        .catch((err) => {
            console.log('noticeDetail error', err.response, err)
        })
    }
    return(
        <NoticeDetail pageTitle={ '공지사항' } noticeDetail={ noticeDetail } />
    );
}

export default NoticeDetailComponent;