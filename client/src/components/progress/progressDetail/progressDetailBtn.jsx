import Axios from 'axios';
import React, { useState } from 'react';
import ProgressDetailBtn from '../../../pages/progress/progressDetail/progressDetailBtn';

const ProgressDetailBtnComponent = (props) => {
    
    const {sidx, isJoin, checkedList} = props;

    const joinSurveySubmit = () => {
        let arr = Object.values({...checkedList})
        Axios.post(`http://localhost:8080/api/insertJoinSurvey`, {
            sidx: sidx,
            checkedList: arr
        }, {withCredentials: true})
        .then(res => {
            window.location.reload()
        })
        .catch(err => {
            console.log('joinSurveySubmit error', err, err.res);
        })
    }

    return(
        <ProgressDetailBtn onSubmit={ joinSurveySubmit } sidx={sidx} isJoin={isJoin} />
    );
}

export default ProgressDetailBtnComponent;