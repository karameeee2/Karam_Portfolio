import Axios from 'axios';
import React, { useEffect, useState } from 'react';
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
        const url = `http://localhost:8080/api/selectSurveyEach?sidx=${sidx}`;

        Axios.get(url)
        .then(response => {
            setSurveyDetail(response.data[0])
        })
        .catch(err => {
            console.log('getSurveyDetail', err , err.response)
        })
    }

    const getJoinSurveyCheck = () => {
        Axios.get(`http://localhost:8080/api/joinSurveyCheck?sidx=${sidx}`,{
            withCredentials: true
        })
        .then(res => {
            // 이 안에서 if~else로 배열이 있을때와 없을때를 구분해서 없을 때 데이터도 받아올수 있도록
            console.log('data: ', res.data);
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
                // console.log('answer response: ' + i, res.data)
                result[i].answerList = res.data
            })
            .catch(err => {
                console.log('getAnswerList', err, err.res);
            })
        }
        // console.log('result:', result)
        setQuestionList(result);
    }

    const _setCheckedList = (key, value) => {
        setCheckedList({...checkedList, [key] : value})
    }

    const joinSurveySubmit = () => {
        let arr = Object.values({...checkedList})
        Axios.post(`http://localhost:8080/api/insertJoinSurvey`, {
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