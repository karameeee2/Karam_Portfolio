import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_LIST } from '../../../constants/api';
import NoticeDetail from '../../../pages/notice/noticeDetail/noticeDetail';

const NoticeDetailComponent = (props) => {
    const [noticeDetail, setNoticeDetail] = useState({});
    const [updateHit, setUpdateHit] = useState({});
    
    useEffect(() => {
        let nidx = props.match.params.nidx;
        getNoticeDetail(nidx);
        getUpdateHit(nidx);
    }, []);
    
    const getNoticeDetail = (nidx) => {
        let url = API_LIST.NOTICE_DETAIL;
        Axios.get(url + `?nidx=${nidx}`)
        .then((response) => {
            setNoticeDetail(response.data[0])
        })
        .catch((err) => {
            console.log('noticeDetail error', err.response, err)
        })
    }
    const getUpdateHit = (nidx) => {
        let url = API_LIST.UPDATE_HIT;
        Axios.get(url + `?nidx=${nidx}`)
        .then(res => {
            setUpdateHit(res.data[0])
        })
        .catch(err => {
            console.log('updateHit error', err.res, err);
        })
    }
    return(
        <NoticeDetail pageTitle={ '공지사항' } noticeDetail={ noticeDetail } />
    );
}

export default NoticeDetailComponent;