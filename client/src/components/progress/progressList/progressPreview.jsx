import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_LIST } from '../../../constants/api';
import ProgressPreview from '../../../pages/progress/progressList/progressPreview';


const ProgressPreviewComponent = () => {
    // useEffect의 두번째 인수를 빈배열로 두면 컴포넌트가 렌더링될때만 useEffect 안의 구문이 실행된다.
    useEffect(() => {
        getProgressList();
    }, [])
    
    const [surveyList, setSurveyList] = useState([]);
    const getProgressList = () => {
        let url = API_LIST.PROGRESS_LIST;
        Axios.get(url)
        .then((res) => {
            setSurveyList(res.data);
        })
        .catch((err)=>{
            console.log('getProgressList error', err.res, err)
        })
    }
    return(
        <ProgressPreview progressPreview={surveyList}  />
    );
};

export default ProgressPreviewComponent;