import React from 'react';
import EndPreviewComponent from '../../components/end/endList/endPreview';
import NoticeBoardComponent from '../../components/notice/noticeList/noticeBoard';
import ProgressPreviewComponent from '../../components/progress/progressList/progressPreview';
import SearchComponent from '../../components/search/search';
import PageTitle from '../pageTitle/pageTitle';
import '../../css/search/searchResult.css';


const SearchResult = (props) => {
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
                    {surveyList.length > 0 &&
                        <p className='resultTitle bottom30'>진행중인 설문</p>
                    }
                    {surveyList.length > 0 &&
                        <ProgressPreviewComponent surveyList={surveyList || []} />
                    }
                    {endList.length > 0 &&
                        <p className='resultTitle bottom30'>종료된 설문</p>
                    }
                    {endList.length > 0 &&
                        <EndPreviewComponent endList={endList || []} />
                    }
                    {noticeList.length > 0 &&
                        <p className='resultTitle'>공지사항</p>
                    }
                    {noticeList.length > 0 &&
                        <NoticeBoardComponent noticeList={noticeList || []} />
                    }
                </div>
            </section>
        </div>
    );
}

export default SearchResult;