import React from 'react';
import DetailInfoComponent from '../../../components/detailInfo/detailInfo';
import EndChartComponent from '../../../components/end/endDetail/endChart';
import EndDetailBtnComponent from '../../../components/end/endDetail/endDetailBtn';
import PageTitle from '../../pageTitle/pageTitle';
import '../../../css/end/endDetail/endDetail.css';

const EndDetail = (props) => {
    return (
        <>
            <PageTitle pageTitle='종료된 설문' />
            {/* Detail */}
            <section className='infoQnASection'>
                <div className="infoQnAContainer">
                    <DetailInfoComponent surveyDetail={props.surveyDetail} sidx={props.sidx} />
                    <EndChartComponent sidx={props.sidx} />
                </div>
                <EndDetailBtnComponent />
            </section>
        </>
    )
}

export default EndDetail;