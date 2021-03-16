import React from 'react';
import EndPreviewComponent from '../../components/end/endList/endPreview';
import NoticeBoardComponent from '../../components/notice/noticeList/noticeBoard';
import ProgressPreviewComponent from '../../components/progress/progressList/progressPreview';
import '../../css/search/searchResult.css';

const SearchResult = (props) => {
    const surveyList = props.surveyList;
    const endList = props.endList;
    const noticeList = props.noticeList;
    const searchTotal = props.searchTotal || 0;

    return (
        <div>
            {/* <SearchComponent categoryChange={props.categoryChange} /> */}
            {/* pageTitle */}
            <div className="pageTitleBox">
                <div className="pageTitleWrap">
                    <h2 className='titleLeft'>총 {searchTotal}건이 검색되었습니다.</h2>
                </div>
            </div>
            <section className="searchResultSection">
                <div className="searchResultContainer">
                    {surveyList.length > 0 &&
                        <div className="subTitleWrap bottom24">
                            <p className="subTitleLine">
                                <span className="subTitle">진행중인 설문</span>
                            </p>
                        </div>
                    }
                    {surveyList.length > 0 &&
                        <ProgressPreviewComponent surveyList={surveyList || []} />
                    }
                    {endList.length > 0 &&
                        <div className="subTitleWrap bottom24">
                            <p className="subTitleLine">
                                <span className="subTitle">종료된 설문</span>
                            </p>
                        </div>
                    }
                    {endList.length > 0 &&
                        <EndPreviewComponent endList={endList || []} />
                    }
                    {noticeList.length > 0 &&
                        <div className="subTitleWrap bottom24">
                            <p className="subTitleLine">
                                <span className="subTitle">공지사항</span>
                            </p>
                        </div>
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