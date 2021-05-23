import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import EndChart from '../../../pages/end/endDetail/endChart';

const EndChartComponent = (props) => {
    const [questionList, setQuestionList] = useState([]);
    
    useEffect(() => {
        getQuestionList(props.sidx);
    }, [])

    const getQuestionList = (sidx) => {
        const url = `http://localhost:8080/api/selectQuestion?sidx=${sidx}`;
        Axios.get(url)
        .then(res => {
            setQuestionList(res.data);
        })
        .catch(err => {
            console.log('getQuestionList', err, err.res);
        })
    }

    return (
        <EndChart questionList={questionList} />
    );
}

export default EndChartComponent;