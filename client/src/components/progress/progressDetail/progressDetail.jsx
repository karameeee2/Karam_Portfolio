import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProgressDetail from '../../../pages/progress/progressDetail/progressDetail';

const ProgressDetailComponent = (props) => {
    const [surveyDetail, setSurveyDetail] = useState([]);

    useEffect(() => {
        let sidx = props.match.params.sidx;
        // console.log('sidx',sidx, props.match);
        getSurveyDetail(sidx);
    }, [])

    const getSurveyDetail = (sidx) => {
        const url = `http://localhost:8080/selectSurveyEach?sidx=${sidx}`;

        Axios.get(url)
        .then(response => {
            setSurveyDetail(response.data[0])
        })
        .catch(err => {
            console.log('getSurveyDetail', err , err.response)
        })
    }
    return (
        <ProgressDetail pageTitle={ '진행중인 설문' } surveyDetail={ surveyDetail } />
    )
}

export default ProgressDetailComponent;