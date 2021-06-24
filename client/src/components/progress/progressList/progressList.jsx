import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Cookie from 'js-cookie';
import Progress from '../../../pages/progress/progressList/progressList';
import { API_LIST } from '../../../constants/api';

const ProgressListComponent = () => {
    const cookie = Cookie.get('connect.sid');

    // useEffect의 두번째 인수를 빈배열로 두면 컴포넌트가 렌더링될때만 useEffect 안의 구문이 실행된다.
    const [surveyList, setSurveyList] = useState([]);

    useEffect(() => {
        getProgressList();
    }, [])
    
    const getProgressList = () => {
        let url =  API_LIST.PROGRESS_LIST;
        Axios.get(url)
        .then((res) => {
            setSurveyList(res.data);
        })
        .catch((err)=>{
            console.log('getProgressList error', err.res, err)
        })
    }

    const [activeProgressList, setActiveProgressList] = useState([]); // 보여져야할 배열
    const item_per_page = 6; // 한페이지에 보여줘야할 개수

    // 처음엔 페이지네이션 처음 숫자를 클릭한것과 같은 효과를 주기 위함임.
    useEffect(() => {
        handlePageClick({selected: 0})
    }, [surveyList])

    const handlePageClick = (data) => {
        let selected = data.selected; // 페이지네이션 숫자 클릭 시 넘어오는 데이터 {selected: ~}
        let offset = Math.ceil(selected * item_per_page); // 건너뛸개수

        // progressPreview - data list
        let arr = [...surveyList]; // 1. 전체배열을 복사
        
        // 2. selected 값과 offset 을 활용해서 몇개씩 보여져야할 지 배열을 편집
        if(!selected) {
            arr = arr.splice(0, item_per_page)
        } else {
            arr = arr.splice(offset, selected * item_per_page); // 문제의 소지가 있을 수도..
        }

        // 3. 보여져야할 배열 state update
        setActiveProgressList(arr)
    };

    return (
        <Progress surveyList={surveyList} item_per_page={item_per_page} activeProgressList={activeProgressList} handlePageClick={handlePageClick}
        cookie={cookie} />
    )
}

export default ProgressListComponent;