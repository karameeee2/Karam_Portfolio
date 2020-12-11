import React from 'react';
import DetailInfoComponent from '../../../components/detailInfo/detailInfo';
import ProgressQnAComponent from '../../../components/progress/progressDetail/progressQnA';
import ProgressDetailBtnComponent from '../../../components/progress/progressDetail/progressDetailBtn';
import PageTitle from '../../pageTitle/pageTitle';
import '../../../css/progress/progressDetail/progressDetail.css';


const ProgressDetail = (props) => {
    const {surveyDetail, qnaList, sidx, isJoin} = props;

    return (
        <>
            <PageTitle pageTitle='진행중인 설문' />
            {/* Detail */}
            <section className='infoQnASection'>
                <div className="infoQnAContainer">
                    <DetailInfoComponent surveyDetail={surveyDetail} sidx={sidx} />
                    <ProgressQnAComponent qnaList={qnaList} sidx={sidx} />
                </div>
                <ProgressDetailBtnComponent sidx={sidx} isJoin={isJoin}/>
            </section>
        </>
    )
}

export default ProgressDetail;