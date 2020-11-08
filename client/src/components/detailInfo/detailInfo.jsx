import React from 'react';
import DetailInfo from '../../pages/detailInfo/detailInfo';

const DetailInfoComponent = (props) => {
    return (
        <DetailInfo surveyDetail={props.surveyDetail} />
    );
}

export default DetailInfoComponent;