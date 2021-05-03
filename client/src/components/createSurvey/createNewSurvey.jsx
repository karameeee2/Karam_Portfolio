import Axios from 'axios';
import React, { useState } from 'react';
import CreateNewSurvey from '../../pages/createSurvey/createNewSurvey';
import { CommonUtils } from '../../utils/common';

const CreateNewSurveyComponent = () => {
    const [ssubject, setSsubject] = useState('');
    const [scontent, setScontent] = useState('');
    const [sdate, setSdate] = useState(new Date());
    const [edate, setEdate] = useState('');
    const [tag, setTag] = useState('');
    const [img, setImg] = useState('');
    const [question, setQuestion] = useState({});
    const [answer, setAnswer] = useState({});

    // const [questionList, setQuestionList] = useState({});
    // const [answerList, setAnswerList] = useState({});

    // const _setQuestionList = (key, value) => {
    //     setQuestion({...question, [key] : value})
    // }

    // const _setAnswerList = (key, value) => {
    //     setAnswer({...answer, [key] : value});
    // }

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

        let start = CommonUtils.dateFormat(sdate)
        let end = CommonUtils.dateFormat(edate)

        let questionArr = Object.values({...question});
        let answerArr = Object.values({...answer});

        Axios.post(`http://localhost:8080/insertSurvey`, {
            ssubject: ssubject,
            scontent: scontent,
            sdate: start,
            edate: end,
            tag: tag,
            img: img,
            question: questionArr,
            answer: answerArr
        },{withCredentials:true})
        .then(res => {
            console.log('insert newSurvey success', res);
            window.location.href='/progressList';
        })
        .catch(err => {
            console.log('insert newSurvey error', err, err.res);
        })
    }

    return (
        <CreateNewSurvey insertSurveySubmit={insertSurveySubmit} setSsubject={setSsubject} setScontent={setScontent} 
        setSdate={setSdate} sdate={sdate} setEdate={setEdate} edate={edate} setTag={setTag} setImg={setImg}
        setQuestion={setQuestion} setAnswer={setAnswer} />
    )
}

export default CreateNewSurveyComponent;