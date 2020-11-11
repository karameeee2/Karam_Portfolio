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
    }, [])
    
    // 1. sidx 를 가지고 qidx(문제)들을 구한다. 
    // 2. qidx 배열을 가지고 aidx(답변)를 구한다.

    const getQuestionList = (sidx) => {
        const url = `http://localhost:8080/selectQuestion?sidx=${sidx}`;
        Axios.get(url)
        .then(res => {
            // setQuestionList(res.data);
            getAnswerList(res.data)
        })
        .catch(err => {
            console.log('getQuestionList', err, err.res);
        })
    }

    const getAnswerList = async (data) => {
        if(data.length <= 0) return;

        const url = `http://localhost:8080/selectAnswer`;
        const result = [...data]
        console.log(result)
        // question 1  question2, .. 
        // ans 1 ans2  ans1 ans2
        /*
            queiston1 = [
                QIDX: 1,
                SIDX: 1, 
                question: 'aslkdjflaksdjflkjasfd',
                answerList: [

                ]
            ]
        */
        for (let i = 0; i < data.length; i++) {
            await Axios.get(url + `?qidx=${data[i].QIDX}`)
            .then(res => {
                console.log('answer response: ' + i, res.data)
                result[i].answerList = res.data
            })
            .catch(err => {
                console.log('getAnswerList', err, err.res);
            })
        }
        console.log('result:', result)
        setQuestionList(result);
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