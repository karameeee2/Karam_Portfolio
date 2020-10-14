import React from 'react';
import { endQ, endA } from '../../../constants/const';
import EndChart from '../../../pages/end/endDetail/endChart';

const EndChartComponent = () => {
    return (
        < EndChart endQ={endQ} endA={endA} />
    );
}

export default EndChartComponent;