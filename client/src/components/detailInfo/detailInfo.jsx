import React from 'react';
import DetailInfo from '../../pages/detailInfo/detailInfo';

const DetailInfoComponent = (props) => {
    return (
        <DetailInfo detailInfo={props.detailInfo} />
    );
}

export default DetailInfoComponent;