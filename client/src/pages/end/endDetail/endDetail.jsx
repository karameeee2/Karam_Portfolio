import React from 'react';
import PageTitle from '../../pageTitle/pageTitle';
import DetailInfoComponent from '../../../components/detailInfo/detailInfo';
import EndDetailBtnComponent from '../../../components/end/endDetail/endDetailBtn';
import EndChartComponent from '../../../components/end/endDetail/endChart';
import '../../../css/end/endDetail/endDetail.css';

const EndDetail = () => {
    return (
        <div>
            <PageTitle pageTitle='종료된 설문' />
            {/* Detail */}
            <section className='infoQnASection'>
                <div className="infoQnAContainer">
                    <DetailInfoComponent />
                    <EndChartComponent />
                </div>
                <EndDetailBtnComponent />
            </section>
        </div>
    )
}

export default EndDetail;