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
        getQuestionList(sidx);
    }, [])
    
    
    const getSurveyDetail = () => {
        const url = `http://localhost:8080/api/selectSurveyEach?sidx=${sidx}`;

        Axios.get(url)
        .then(response => {
            setSurveyDetail(response.data[0])
        })
        .catch(err => {
            console.log('getSurveyDetail', err , err.response)
        })
    }

    const getQuestionList = () => {
        const url = `http://localhost:8080/api/selectQuestion?sidx=${sidx}`;
        Axios.get(url)
        .then(res => {
            getAnswerList(res.data)
        })
        .catch(err => {
            // console.log('getQuestionList', err, err.res);
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
                getAgeCount(res.data);
            })
            .catch(err => {
                console.log('getAnswerList', err, err.res);
            })
        }

        setTimeout(() => {
            
            setQuestionList(result);
        }, 1000);
    }

    const getAgeCount = async (data) => {
        const url = `http://localhost:8080/api/selectAgeCount`;
        const result = [...data]

        for(let i = 0; i < data.length; i++) {
            await Axios.get(url + `?aidx=${data[i].AIDX}&qidx=${data[i].QIDX}`)
            .then(res => {
                result[i].ageCount = res.data;
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