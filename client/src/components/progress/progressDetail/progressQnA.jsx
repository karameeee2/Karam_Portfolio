import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProgressQnA from '../../../pages/progress/progressDetail/progressQnA';
import { CommonUtils } from '../../../utils/common';

const ProgressQnAComponent = (props) => {
    const [questionList, setQuestionList] = useState([]);
    const [answerList, setAnswerList] = useState([]);

    useEffect(() => {
        // let sidx = props.match.params.sidx;
        // console.log('sidx',sidx, props.match);
        getQuestionList(props.sidx);
        getAnswerList();
    }, [])

    const getQuestionList = (sidx) => {
        const url = `http://localhost:8080/selectQuestion?sidx=${sidx}`;
        Axios.get(url)
        .then(res => {
            setQuestionList(res.data);
            console.log('question response: ', res.data)
            console.log('question response: ', res.data.qidx)
        })
        .catch(err => {
            console.log('getQuestionList', err, err.res);
        })
    }

    const getAnswerList = () => {
        const url = `http://localhost:8080/selectAnswer`;
        Axios.get(url)
        .then(res => {
            setAnswerList(res.data);
            console.log('answer response: ', res.data)
        })
        .catch(err => {
            console.log('getAnswerList', err, err.res);
        })
    }
    return (
        <ProgressQnA questionList={ questionList } answerList={answerList} />
    );
}

// const ProgressQnAComponent = (props) => {
//     const [qnaList, setQnaList] = useState([{}]);

//     useEffect(() => {
//         // let sidx = props.match.params.sidx;
//         // console.log('sidx',sidx, props.match);
//         getQnaList(props.sidx);
//     }, [])

//     const getQnaList = (sidx) => {
//         const url = `http://localhost:8080/selectQna?sidx=${sidx}`;
//         Axios.get(url)
//         .then(res => {
//             setQnaList(res.data);
//             console.log('qna response: ', res.data)
//             console.log('qidx response: ', res.data.qidx)
//         })
//         .catch(err => {
//             console.log('getQnaList', err, err.res);
//         })
//     }
//     return (
//         <ProgressQnA qnaList={ qnaList } />
//     );
// }

export default ProgressQnAComponent;