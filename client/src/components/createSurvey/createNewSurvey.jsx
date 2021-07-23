import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_LIST } from '../../constants/api';
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
    const [answer, setAnswer] = useState([]);
    const [loading, setLoading] = useState(false);

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

        // []
        // idx = question index
        // {0: ['qwer','asdf'], 1: ['1234'], 2: ['zxcv'] }
        
        let answerArr = Object.values({...answer});
        let url = API_LIST.NEW_SURVEY;
        setLoading(true);

        // 이미지가 있을때는 formData 로 모든 정보를 담아서 전송 
        // if(img && typeof img === 'object') {
        let formData = new FormData();
        
        questionArr = JSON.stringify(questionArr);
        answerArr = JSON.stringify(answerArr);
        
        formData.append("ssubject", ssubject);
        formData.append("scontent", scontent);
        formData.append("sdate", start);
        formData.append("edate", end);
        formData.append("tag", tag);
        formData.append("img", img);
        formData.append("question", questionArr);
        formData.append("answer", answerArr);
        
        Axios.post(url, formData, {
            headers: {
            'Content-Type': 'multipart/form-data'
            },
            withCredentials: true
        }).then(res => {
            // console.log('insert newSurvey success', res);
            window.location.href='/progressList';
        })
        .catch(err => {
            console.log('insert newSurvey error', err, err.res);
            setLoading(false);
        })

        // } else {
            // Axios.post(url, {
            //     ssubject: ssubject,
            //     scontent: scontent,
            //     sdate: start,
            //     edate: end,
            //     tag: tag,
            //     question: questionArr,
            //     answer: answerArr
            // },{withCredentials:true})
            // .then(res => {
            //     // console.log('insert newSurvey success', res);
            //     window.location.href='/progressList';
            // })
            // .catch(err => {
            //     console.log('insert newSurvey error', err, err.res);
            //     setLoading(false);
            // })
        // }
    }

    // useEffect(() => {
    //     console.log('입력된 제목 : ', ssubject)
    // }, [ssubject])

    return (
        <CreateNewSurvey insertSurveySubmit={insertSurveySubmit} setSsubject={setSsubject} setScontent={setScontent} 
        setSdate={setSdate} sdate={sdate} setEdate={setEdate} edate={edate} setTag={setTag} setImg={setImg} img={img}
        setQuestion={setQuestion} setAnswer={setAnswer} question={question} answer={answer} 
        loading={loading} />
    )
}

export default CreateNewSurveyComponent;