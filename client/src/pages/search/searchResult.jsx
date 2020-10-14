import React from 'react';
import EndPreviewComponent from '../../components/end/endList/endPreview';
import NoticeBoardComponent from '../../components/notice/noticeList/noticeBoard';
import ProgressPreviewComponent from '../../components/progress/progressList/progressPreview';
import SearchComponent from '../../components/search/search';
import PageTitle from '../pageTitle/pageTitle';
import '../../css/search/searchResult.css';


const SearchResult = () => {
    return (
        <div>
            <SearchComponent />
            <PageTitle pageTitle='총 37건이 검색되었습니다.' />
            <section className="searchResultSection">
                <div className="searchResultContainer">
                    <p className='resultTitle bottom30'>진행중인 설문</p>
                    <ProgressPreviewComponent />
                    <p className='resultTitle bottom30'>종료된 설문</p>
                    <EndPreviewComponent />
                    <p className='resultTitle'>공지사항</p>
                    <NoticeBoardComponent />
                </div>
            </section>
        </div>
    );
}

export default SearchResult;