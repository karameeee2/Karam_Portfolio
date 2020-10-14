import React from 'react';
import MypageInnerTitle from '../mypageInnerTitle';
import '../../../css/mypage/mypageSurveyList.css';
import MysurveyBoardComponent from '../../../components/mypage/mysurvey/mysurveyBoard';


const MysurveyList = () => {
    return (
        <div className="mysurveyListContainer">
            <MypageInnerTitle innerTitle='내가 등록한 설문' />
            <MysurveyBoardComponent />
        </div>
    );
}

export default MysurveyList;