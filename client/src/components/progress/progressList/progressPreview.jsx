import React from 'react';
import { progressPreview } from '../../../constants/const';
import ProgressPreview from '../../../pages/progress/progressList/progressPreview';


const ProgressPreviewComponent = () => {

    return(
        <ProgressPreview progressPreview={progressPreview} />
    );
};

export default ProgressPreviewComponent;