import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProgressDetail from '../../../pages/progress/progressDetail/progressDetail';

const ProgressDetailComponent = (props) => {
    let sidx = props.match.params.sidx;

    useEffect(() => {
        getSurveyDetail();
    }, [])

    useEffect(() => {
        getJoinSurveyCheck();
    },[])

    const [surveyDetail, setSurveyDetail] = useState({});
    const [joinSurveyCheck, setJoinSurveyCheck] = useState({});
    const [isJoin, setIsJoin] = useState(false);
    const [mySurveyAnswer, setMySurveyAnswer] = useState([]);

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

    const getJoinSurveyCheck = () => {
        Axios.get(`http://localhost:8080/joinSurveyCheck?sidx=${sidx}`,{
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

    return (
        <ProgressDetail pageTitle={ '진행중인 설문' } sidx={sidx} joinSurveyCheck={joinSurveyCheck} isJoin={isJoin} mySurveyAnswer={mySurveyAnswer}/>
    )
}

export default ProgressDetailComponent;