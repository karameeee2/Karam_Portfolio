import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProgressDetail from '../../../pages/progress/progressDetail/progressDetail';

const ProgressDetailComponent = (props) => {
    const [detailInfo, setDetailInfo] = useState({});

    useEffect(() => {
        let sidx = props.match.params.sidx;
        getDetailInfo(sidx);
    }, [])

    const getDetailInfo = (sidx) => {
        const url = `http://localhost:8080/selectSurveyEach?sidx=${sidx}`;

        Axios.get(url)
        .then(response => {
            setDetailInfo(response.data[0])
        })
        .catch(err => {
            console.log('getDetailInfo', err , err.response)
        })
    }
    return (
        <ProgressDetail pageTitle={ '진행중인 설문' } detailInfo = {detailInfo} />
    )
}

export default ProgressDetailComponent;