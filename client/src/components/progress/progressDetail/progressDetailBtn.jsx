import Axios from 'axios';
import React, { useState } from 'react';
import ProgressDetailBtn from '../../../pages/progress/progressDetail/progressDetailBtn';

const ProgressDetailBtnComponent = (props) => {
    // const [sidx, setSidx] = useState();
    // const [qidx, setQidx] = useState();
    // const [aidx, setAidx] = useState();
    // const [midx, setMidx] = useState();
    // const [gender, sestGender] = useState('');
    // const [birth, setBirth] = useState('');
    
    const {sidx, qidx, aidx, midx, gender, birth, isJoin} = props;

    const joinSurveySubmit = () => {
        Axios.post(`http://localhost:8080/insertJoinSurvey`, {
            sidx: sidx,
            qidx: qidx,
            aidx: aidx,
            midx: midx,
            gender: gender,
            birth: birth
        })
        .then(res => {
            console.log('value 다 넘어가나?', res);
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