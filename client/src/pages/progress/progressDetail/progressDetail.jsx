import React from 'react';
import DetailInfoComponent from '../../../components/detailInfo/detailInfo';
import ProgressQnAComponent from '../../../components/progress/progressDetail/progressQnA';
import PageTitle from '../../pageTitle/pageTitle';
import '../../../css/progress/progressDetail/progressDetail.css';


const ProgressDetail = (props) => {
    const {surveyDetail, qnaList, sidx, isJoin, mySurveyAnswer} = props;

    return (
        <>
            <PageTitle pageTitle='진행중인 설문' />
            {/* Detail */}
            <section className='infoQnASection'>
                <div className="infoQnAContainer">
                    <DetailInfoComponent surveyDetail={surveyDetail} sidx={sidx} />
                    <ProgressQnAComponent qnaList={qnaList} sidx={sidx} isJoin={isJoin} mySurveyAnswer={mySurveyAnswer} />
                </div>
                {/* <ProgressDetailBtnComponent sidx={sidx} isJoin={isJoin}/> */}
            </section>
        </>
    )
}

export default ProgressDetail;