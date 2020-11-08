import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProgressQnA from '../../../pages/progress/progressDetail/progressQnA';

const ProgressQnAComponent = (props) => {

    return (
        <ProgressQnA surveyDetail={ props.surveyDetail } />
    );
}

export default ProgressQnAComponent;