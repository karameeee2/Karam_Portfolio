import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import EndDetail from '../../../pages/end/endDetail/endDetail';

const EndDetailComponent = (props) => {
    let sidx = props.match.params.sidx;
    
    const [surveyDetail, setSurveyDetail] = useState({});
    const [questionList, setQuestionList] = useState([]);
    // const [ageCount, setAgeCount] = useState([]);
        
    useEffect(() => {
        getSurveyDetail();
    }, [])
    
    useEffect(() => {
        getQuestionList(sidx);
    }, [])

    // useEffect(() => {
    //     getAgeCount();
    // }, [])
    
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
            console.log('questionRowCount', res.data.length);
            getAnswerList(res.data)
        })
        .catch(err => {
            // console.log('getQuestionList', err, err.res);
        })
    }

    const getAnswerList = async (data) => {
        if(data.length <= 0) return;

        const url = `http://localhost:8080/selectAnswer`;
        const result = [...data]

        for (let i = 0; i < data.length; i++) {
            await Axios.get(url + `?qidx=${data[i].QIDX}`)
            .then(res => {
                result[i].answerList = res.data
                getAgeCount(res.data);
                // console.log('ageCount::', res.data[i]);
            })
            .catch(err => {
                console.log('getAnswerList', err, err.res);
            })
        }
        setQuestionList(result);
    }

    const getAgeCount = (data) => {
        const url = `http://localhost:8080/selectAgeCount`;
        const result = [...data]

        for(let i = 0; i < data.length; i++) {
            Axios.get(url + `?aidx=${data[i].AIDX}`)
            .then(res => {
                result[i].ageCount = res.data;
                console.log('ageCountRowCount', res.data.length);
                // console.log('aidx::', res.data);
                // console.log('result[i].ageCount', result[i].ageCount);
            })
            .catch(err => {
    
            })
        }
    }

    return (
        <EndDetail sidx={ sidx } surveyDetail={ surveyDetail } questionList={questionList}  />
    )
}

export default EndDetailComponent;