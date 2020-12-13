//import Axios from 'axios';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProgressDetail from '../../../pages/progress/progressDetail/progressDetail';

const ProgressDetailComponent = (props) => {
    let sidx = props.match.params.sidx;
    let midx;

    useEffect(() => {
        getJoinSurveyCheck();
    },[])

    const [joinSurveyCheck, setJoinSurveyCheck] = useState({});

    const [isJoin, setIsJoin] = useState(false);

    const getJoinSurveyCheck = (e) => {
        // e.preventDefault();
        Axios.get(`http://localhost:8080/joinSurveyCheck?sidx=${sidx}`,{
            withCredentials: true
        })
        .then(res => {
            if(res.status === 200) {
                setJoinSurveyCheck();
                setIsJoin(false);
            }
        })
        .catch(err => {
            console.log(err.response);
            if(err.response.status === 409) {
                setJoinSurveyCheck();
                setIsJoin(true);
            }
        })
    }

    return (
        <ProgressDetail pageTitle={ '진행중인 설문' } sidx={sidx} joinSurveyCheck={joinSurveyCheck} isJoin={isJoin} />
    )
}

export default ProgressDetailComponent;