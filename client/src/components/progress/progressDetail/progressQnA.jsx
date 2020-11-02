import React from 'react';
import { progressQ, progressA } from '../../../constants/const';
import ProgressQnA from '../../../pages/progress/progressDetail/progressQnA';

const ProgressQnAComponent = () => {


    return (
        <ProgressQnA progressQ={progressQ} progressA={progressA} />
    );
}

export default ProgressQnAComponent;