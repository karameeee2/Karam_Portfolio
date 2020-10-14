import React from 'react';
import MypageInnerTitle from '../mypageInnerTitle';
import '../../../css/mypage/mypageSurveyList.css';
import TakesurveyBoardComponent from '../../../components/mypage/takesurvey/takesurveyBoard';


const TakesurveyList = () => {
    return (
        <div className="takesurveyListContainer">
            <MypageInnerTitle innerTitle='참여한 설문' />
            <TakesurveyBoardComponent />
        </div>
    );
}

export default TakesurveyList;