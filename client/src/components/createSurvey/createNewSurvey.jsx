import Axios from 'axios';
import React, { useState } from 'react';
import CreateNewSurvey from '../../pages/createSurvey/createNewSurvey';


const CreateNewSurveyComponent = () => {
    const [ssubject, setSsubject] = useState('');
    const [scontent, setScontent] = useState('');
    const [sdate, setSdate] = useState('');
    const [edate, setEdate] = useState('');
    const [tag, setTag] = useState('');
    const [img, setImg] = useState('');

    const insertSurveySubmit = () => {
        // null check
        if(!ssubject) {
            return alert('설문 제목을 입력해주세요.');
        }
        if(!scontent) {
            return alert('설문 설명을 입력해주세요.');
        }
        if(!sdate) {
            return alert('시작 날짜를 설정해주세요.')
        }
        if(!edate) {
            return alert('종료 날짜를 설정해주세요.')
        }
        if(!sdate && !edate) {
            return alert('기간을 설정해주세요.')
        }

        Axios.post('http://localhost:8080/insertSurvey', {
            ssubject: ssubject,
            scontent: scontent,
            sdate: sdate,
            edate: edate,
            tag: tag,
            img: img
        })
        .then(res => {
            console.log('insert newSurvey success', res);
            window.location.href='/progress';
        })
        .catch(err => {
            console.log('insert newSurvey error', err, err.res);
        })
    }

    return (
        <CreateNewSurvey onSubmit={insertSurveySubmit} setSsubject={setSsubject} setScontent={setScontent} 
        setSdate={setSdate} setEdate={setEdate} setTag={setTag} setImg={setImg} />
    )
}

export default CreateNewSurveyComponent;