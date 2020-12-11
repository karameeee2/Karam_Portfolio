import React from 'react';
import ProgressDetailBtn from '../../../pages/progress/progressDetail/progressDetailBtn';

const ProgressDetailBtnComponent = (props) => {

    const {sidx, isJoin} = props;

    const joinSurveySubmit = () => {

    }

    return(
        <ProgressDetailBtn onSubmit={ joinSurveySubmit } sidx={sidx} isJoin={isJoin} />
    );
}

export default ProgressDetailBtnComponent;