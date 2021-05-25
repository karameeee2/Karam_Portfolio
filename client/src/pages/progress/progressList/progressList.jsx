import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { CommonUtils } from '../../../utils/common';
import ReactPaginate from 'react-paginate';
import '../../../css/common/pageTitle.css';
import '../../../css/common/previewList.css';
import '../../../css/progress/progressList/progressPreview.css';
import '../../../css/common/pagination.css';
import thumbnail1 from '../../../assets/thumbnail/thumbnail_basic.png';
import termIcon from '../../../assets/icons/termIcon.svg';
import hashIcon from '../../../assets/icons/hashIcon.svg';
import plus16 from '../../../assets/icons/plus16.svg';
import arrowNext from '../../../assets/icons/arrowNext.svg';
import arrowPrev from '../../../assets/icons/arrowPrev.svg';

const ProgressList = (props) => {
    const progressPreview = props.surveyList; // 전달받은 전체배열
    const progressCount = props.surveyList.length;
    console.log('progressCount>>>>>>>>>', progressCount);
    const item_per_page = 6; // 한페이지에 보여줘야할 개수
    
    const [activeProgressList, setActiveProgressList] = useState([]); // 보여져야할 배열

    // 처음엔 페이지네이션 처음 숫자를 클릭한것과 같은 효과를 주기 위함임.
    useEffect(() => {
        console.log('몇번실행?');
        handlePageClick({selected: 0})
    }, [progressPreview])

    const handlePageClick = (data) => {
        let selected = data.selected; // 페이지네이션 숫자 클릭 시 넘어오는 데이터 {selected: ~}
        let offset = Math.ceil(selected * item_per_page); // 건너뛸개수

        // this.setState({ offset: offset }, () => {
        //     this.loadCommentsFromServer();
        //     //currentPage (현재페이지), offset (건너뛸 개수), item_per_page (페이지당 보여져야할 개수),total
        //     // 1, 0, 10, 
        // });

        // progressPreview - data list
        let arr = [...progressPreview]; // 1. 전체배열을 복사
        
        // 2. selected 값과 offset 을 활용해서 몇개씩 보여져야할 지 배열을 편집
        if(!selected) {
            arr = arr.splice(0, item_per_page)
        } else {
            arr = arr.splice(offset, selected * item_per_page); // 문제의 소지가 있을 수도..
        }

        // 3. 보여져야할 배열 state update
        setActiveProgressList(arr)
    };

    return (
        <>
            {/* pageTitle */}
            <div className="pageTitleBox">
                <div className="pageTitleWrap">
                    <h2 className='titleLeft'>진행중인 설문</h2>
                    <Link to='/createSurvey'>
                        <button className='createSurveyBtn'>새 설문 <img src={plus16} alt="새 설문 등록"/></button>
                    </Link>
                </div>
            </div>
            
            {/* progressPrev */}
            <section className="progressPreviewSection">
                <div className="progressPrevWrap">
                    <div className="previewContainer">
                        <ul className="previewWrap">
                            {activeProgressList.map((item) => {
                                return (
                                    <li className="prevBox" key={item.SIDX}>
                                        <img className="prevThumbnail" src={item.SIMG || thumbnail1} alt='설문 썸네일 이미지' onError={e => e.target.src = thumbnail1} />
                                        <div className="prevInfoBox">
                                            <p className='prevNickname'>{item.NICKNAME}</p>
                                            <Link to={`/progressDetail/${item.SIDX}`} ><h3 className='prevSubject'>{item.SSUBJECT}</h3></Link>
                                            <p className='prevTerm'>
                                                <img src={termIcon} alt="기간"/>{CommonUtils.dateFormat(new Date(item.SDATE))} ~ {CommonUtils.dateFormat(new Date(item.EDATE))}
                                            </p>
                                            <p className="prevTag">
                                                <img src={hashIcon} alt="해시태그"/>{item.TAG}
                                            </p>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </section>

            {/* pagination */}
            <ReactPaginate 
                previousLabel={'이전'}
                nextLabel={'다음'}
                breakLabel={'...'}
                pageCount={Math.ceil(progressCount / item_per_page)}
                pageRangeDisplayed={item_per_page}
                containerClassName={'paginationWrap'}
                activeClassName={'currentPage'}
                previousClassName={'prevPage'}
                nextClassName={'nextPage'}
                onPageChange={handlePageClick}
            />
            
        </>
        // <div>
        //     {/* <SearchComponent /> */}
        //     <PageTitle pageTitle='진행중인 설문' />
        //     {/* <CreateBtnComponent /> */}
        //     {/* List */}
        //     <section className="progressPreviewSection">
        //         <div className="progressPrevWrap">
        //             <ProgressPreviewComponent surveyList={props.surveyList} />
        //         </div>
        //     </section>
        // </div>
    )
}

export default ProgressList;