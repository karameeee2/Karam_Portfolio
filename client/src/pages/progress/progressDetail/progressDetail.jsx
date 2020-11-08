import React from 'react';
import DetailInfoComponent from '../../../components/detailInfo/detailInfo';
import ProgressQnAComponent from '../../../components/progress/progressDetail/progressQnA';
import ProgressDetailBtnComponent from '../../../components/progress/progressDetail/progressDetailBtn';
import PageTitle from '../../pageTitle/pageTitle';
import '../../../css/progress/progressDetail/progressDetail.css';


const ProgressDetail = (props) => {
    return (
        <div>
            <PageTitle pageTitle='진행중인 설문' />
            {/* Detail */}
            <section className='infoQnASection'>
                <div className="infoQnAContainer">
                    <DetailInfoComponent detailInfo={props.surveyDetail} />
                    <ProgressQnAComponent selectQnA={props.surveyDetail} />
                </div>
                <ProgressDetailBtnComponent />
            </section>
        </div>
    )
}

export default ProgressDetail;