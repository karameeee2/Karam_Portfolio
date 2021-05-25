import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Progress from '../../../pages/progress/progressList/progressList';

const ProgressListComponent = () => {
    // useEffect의 두번째 인수를 빈배열로 두면 컴포넌트가 렌더링될때만 useEffect 안의 구문이 실행된다.
    const [surveyList, setSurveyList] = useState([]);
    // const [offset, setOffset] = useState(0);

    useEffect(() => {
        getProgressList();
    }, [])
    
    const getProgressList = () => {
        Axios.get('http://localhost:8080/api/selectSurveyList')
        .then((res) => {
            setSurveyList(res.data);
            console.log('surveyTotal', res.data.length);
        })
        .catch((err)=>{
            console.log('에러낫음', err.res, err)
        })
    }

    return (
        <Progress pageTitle={ '진행중인 설문' } surveyList={surveyList}  />
    )
}

export default ProgressListComponent;