import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_LIST } from '../../../constants/api';
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
        let url = API_LIST.SURVEY_EACH;
        Axios.get(url + `?sidx=${sidx}`)
        .then(response => {
            setSurveyDetail(response.data[0])
        })
        .catch(err => {
            console.log('getSurveyDetail error', err , err.response)
        })
    }

    const getQuestionList = () => {
        let url = API_LIST.SELECT_QUESTION;
        Axios.get(url + `?sidx=${sidx}`)
        .then(res => {
            getAnswerList(res.data)
        })
        .catch(err => {
            console.log('getQuestionList error', err, err.res);
        })
    }

    const getAnswerList = async (data) => {
        if(data.length <= 0) return;

        let url = API_LIST.SELECT_ANSWER;
        const result = [...data]

        for (let i = 0; i < data.length; i++) {
            await Axios.get(url + `?qidx=${data[i].QIDX}`)
            .then(res => {
                result[i].answerList = res.data
                getAgeCount(res.data);
            })
            .catch(err => {
                console.log('getAnswerList error', err, err.res);
            })
        }

        setTimeout(() => {
            
            setQuestionList(result);
        }, 1000);
    }

    const getAgeCount = async (data) => {
        let url = API_LIST.AGE_COUNT;
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