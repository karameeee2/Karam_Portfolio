import React from 'react';
import { detailInfo } from '../../constants/const';
import DetailInfo from '../../pages/detailInfo/detailInfo';

const DetailInfoComponent = () => {
    return (
        <DetailInfo detailInfo={detailInfo} />
    );
}

export default DetailInfoComponent;