import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProgressQnA from '../../../pages/progress/progressDetail/progressQnA';

const ProgressQnAComponent = (props) => {
    const [questionList, setQuestionList] = useState([]);

    useEffect(() => {
        getQuestionList(props.sidx);
    }, [])
    
    // 1. sidx 를 가지고 qidx(문제)들을 구한다. 
    // 2. qidx 배열을 가지고 aidx(답변)를 구한다.

    const getQuestionList = (sidx) => {
        const url = `http://localhost:8080/api/selectQuestion?sidx=${sidx}`;
        Axios.get(url)
        .then(res => {
            getAnswerList(res.data)
        })
        .catch(err => {
            console.log('getQuestionList', err, err.res);
        })
    }

    const getAnswerList = async (data) => {
        if(data.length <= 0) return;

        const url = `http://localhost:8080/api/selectAnswer`;
        const result = [...data]
        for (let i = 0; i < data.length; i++) {
            await Axios.get(url + `?qidx=${data[i].QIDX}`)
            .then(res => {
                result[i].answerList = res.data
            })
            .catch(err => {
                console.log('getAnswerList error', err, err.res);
            })
        }
        setQuestionList(result);
    }
    return (
        <ProgressQnA questionList={ questionList } sidx={props.sidx} isJoin={props.isJoin}
        mySurveyAnswer={props.mySurveyAnswer}
        />
    );
}

export default ProgressQnAComponent;