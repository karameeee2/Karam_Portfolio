import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { progressQ, progressA } from '../../../constants/const';
import ProgressQnA from '../../../pages/progress/progressDetail/progressQnA';

const ProgressQnAComponent = (props) => {
    const [selectQnA, setSelectQnA] = useState([]);

    useEffect(() => {
        let sidx = props.match.params.sidx;
        getSelectQnA(sidx);
    })

    const getSelectQnA = (sidx) => {
        const url = `http://localhost:8080/selectQnA?sidx=${sidx}`;
        Axios.get(url)
        .then(res => {
            setSelectQnA(res.data[0]);
        })
        .catch(err => {
            console.log('getSelectQnA', err, err.res);
        })
    }

    return (
        <ProgressQnA selectQnA={ selectQnA } />
    );
}

export default ProgressQnAComponent;