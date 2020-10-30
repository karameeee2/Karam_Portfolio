import React from 'react';
import NoticeBoardComponent from '../../../components/notice/noticeList/noticeBoard';
import SearchComponent from '../../../components/search/search';
import PageTitle from '../../pageTitle/pageTitle';

const NoticeList = (props) => {
    return (
        <div>
            <SearchComponent />
            <PageTitle pageTitle='공지사항' />
            {/* List */}
            <section className="noticeListSection">
                <NoticeBoardComponent noticeList={props.noticeList} />
            </section>
        </div>
    );
}

export default NoticeList;