import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProgressQnA from '../../../pages/progress/progressDetail/progressQnA';
import { CommonUtils } from '../../../utils/common';

const ProgressQnAComponent = (props) => {
    const [qnaList, setQnaList] = useState([]);

    useEffect(() => {
        // let sidx = props.match.params.sidx;
        // console.log('sidx',sidx, props.match);
        getQnaList(props.sidx, props.qidx);
    }, [])

    const getQnaList = (sidx, qidx) => {
        const url = `http://localhost:8080/selectQna?sidx=${sidx}`;
        Axios.get(url)
        .then(res => {
            setQnaList(res.data);
            console.log('qna response: ', res.data)
        })
        .catch(err => {
            console.log('getQnaList', err, err.res);
        })
    }
    return (
        <ProgressQnA qnaList={ qnaList } />
    );
}

export default ProgressQnAComponent;