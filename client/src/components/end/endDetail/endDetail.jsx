import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import EndDetail from '../../../pages/end/endDetail/endDetail';

const EndDetailComponent = (props) => {
    let sidx = props.match.params.sidx;

    const [surveyDetail, setSurveyDetail] = useState({});
    const [questionList, setQuestionList] = useState([]);

    useEffect(() => {
        getSurveyDetail();
    }, [])

    useEffect(() => {
        getQuestionList();
    }, [])

    const getSurveyDetail = () => {
        const url = `http://localhost:8080/selectSurveyEach?sidx=${sidx}`;

        Axios.get(url)
        .then(response => {
            setSurveyDetail(response.data[0])
        })
        .catch(err => {
            console.log('getSurveyDetail', err , err.response)
        })
    }

    const getQuestionList = () => {
        const url = `http://localhost:8080/selectQuestion?sidx=${sidx}`;
        Axios.get(url)
        .then(res => {
            setQuestionList(res.data);
        })
        .catch(err => {
            console.log('getQuestionList', err, err.res);
        })
    }

    return (
        <EndDetail pageTitle={ '종료된 설문' } sidx={ sidx } surveyDetail={ surveyDetail } questionList={questionList}  />
    )
}

export default EndDetailComponent;