import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_LIST } from '../../../constants/api';
import ProgressDetail from '../../../pages/progress/progressDetail/progressDetail';

const ProgressDetailComponent = (props) => {
    let sidx = props.match.params.sidx;
    
    const [surveyDetail, setSurveyDetail] = useState({});
    const [joinSurveyCheck, setJoinSurveyCheck] = useState({});
    const [isJoin, setIsJoin] = useState(false);
    const [mySurveyAnswer, setMySurveyAnswer] = useState([]);
    const [questionList, setQuestionList] = useState([]);
    const [checkedList, setCheckedList] = useState({});

    useEffect(() => {
        getSurveyDetail();
    }, [])

    useEffect(() => {
        getJoinSurveyCheck();
    },[])

    useEffect(() => {
        getQuestionList(sidx);
    }, [])

    const getSurveyDetail = () => {
        const url = API_LIST.SURVEY_EACH;

        Axios.get(url + `?sidx=${sidx}`)
        .then(response => {
            setSurveyDetail(response.data[0])
        })
        .catch(err => {
            console.log('getSurveyDetail error', err , err.response)
        })
    }

    const getJoinSurveyCheck = () => {
        let url = API_LIST.PROGRESS_JOIN_CHECK;
        Axios.get(url + `?sidx=${sidx}`,{
            withCredentials: true
        })
        .then(res => {
            // 이 안에서 if~else로 배열이 있을때와 없을때를 구분해서 없을 때 데이터도 받아올수 있도록
            if(res.data.length <= 0) {
                setJoinSurveyCheck();
                setIsJoin(false);
            } else {
                setJoinSurveyCheck();
                setIsJoin(true);
                setMySurveyAnswer(res.data);
            }
        })
        .catch(err => {
            console.log('joinSurveyCheck error', err, err.res);
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
            })
            .catch(err => {
                console.log('getAnswerList error', err, err.res);
            })
        }
        setQuestionList(result);
    }

    const _setCheckedList = (key, value) => {
        setCheckedList({...checkedList, [key] : value})
    }

    const joinSurveySubmit = () => {
        let arr = Object.values({...checkedList})
        let url = API_LIST.JOIN_SURVEY;
        Axios.post(url, {
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

    return (
        <ProgressDetail pageTitle={ '진행중인 설문' } sidx={sidx} surveyDetail={surveyDetail} joinSurveyCheck={joinSurveyCheck} isJoin={isJoin} mySurveyAnswer={mySurveyAnswer}
        questionList={questionList} checkedList={checkedList} _setCheckedList={_setCheckedList} onSubmit={joinSurveySubmit} />
    )
}

export default ProgressDetailComponent;