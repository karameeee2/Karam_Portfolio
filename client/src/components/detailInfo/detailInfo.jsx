import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import DetailInfo from '../../pages/detailInfo/detailInfo';

const DetailInfoComponent = (props) => {
    const [surveyDetail, setSurveyDetail] = useState({});

    useEffect(() => {
        //let sidx = props.match.params.sidx;
        // console.log('sidx',sidx, props.match);
        getSurveyDetail(props.sidx);
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
        <DetailInfo surveyDetail={ surveyDetail } />
    );
}

export default DetailInfoComponent;