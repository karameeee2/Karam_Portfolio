import React from 'react';
import { mysurveyList } from '../../../constants/const';
import MysurveyBoard from '../../../pages/mypage/mysurvey/mysurveyBoard';

const MysurveyBoardComponent = () => {
    return (
        <section className="mysurveyBoardSection">
            <MysurveyBoard mysurveyList={ mysurveyList } />
        </section>
    );
}

export default MysurveyBoardComponent;