import React from 'react';
import EndPreviewComponent from '../../components/end/endList/endPreview';
import NoticeBoardComponent from '../../components/notice/noticeList/noticeBoard';
import ProgressPreviewComponent from '../../components/progress/progressList/progressPreview';
import SearchComponent from '../../components/search/search';
import PageTitle from '../pageTitle/pageTitle';
import '../../css/search/searchResult.css';


const SearchResult = (props) => {
    // const searchWord = props.searchWord;
    const surveyList = props.surveyList;
    const endList = props.endList;
    const noticeList = props.noticeList;
    const searchTotal = props.searchTotal || 0;

    return (
        <div>
            <SearchComponent categoryChange={props.categoryChange} />
            <PageTitle pageTitle={`총 ${searchTotal}건이 검색되었습니다.`} />
            <section className="searchResultSection">
                <div className="searchResultContainer">
                    <p className='resultTitle bottom30'>진행중인 설문</p>
                    <ProgressPreviewComponent surveyList={surveyList || []} />
                    <p className='resultTitle bottom30'>종료된 설문</p>
                    <EndPreviewComponent endList={endList || []} />
                    <p className='resultTitle'>공지사항</p>
                    <NoticeBoardComponent noticeList={noticeList || []} />
                </div>
            </section>
        </div>
    );
}

export default SearchResult;