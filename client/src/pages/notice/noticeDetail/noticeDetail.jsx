import React from 'react';
import NoticeDetailBtnComponent from '../../../components/notice/noticeDetail/noticeDetailBtn';
import NoticeFullComponent from '../../../components/notice/noticeDetail/noticeFull';
import PageTitle from '../../pageTitle/pageTitle';
import '../../../css/notice/noticeDetail/noticeDetail.css';

const NoticeDetail = (props) => {
    return(
        <div>
            <PageTitle pageTitle='공지사항' />
            <section className="noticeDetailSection">
                <NoticeFullComponent  noticeDetail={props.noticeDetail}/>
            </section>
            <NoticeDetailBtnComponent />
        </div>
    );
}

export default NoticeDetail;