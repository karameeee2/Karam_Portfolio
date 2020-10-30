import React from 'react';
import ProgressPreview from '../../../pages/progress/progressList/progressPreview';


const ProgressPreviewComponent = (props) => {

    return(
        <ProgressPreview progressPreview={props.surveyList}  />
    );
};

export default ProgressPreviewComponent;