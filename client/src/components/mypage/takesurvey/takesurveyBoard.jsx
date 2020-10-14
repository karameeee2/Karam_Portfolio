import React from 'react';
import { takesurveyList } from '../../../constants/const';
import TakesurveyBoard from '../../../pages/mypage/takesurvey/takesurveyBoard';

const TakesurveyBoardComponent = () => {
    return (
        <section className="takesurveyBoardSection">
            <TakesurveyBoard takesurveyList={ takesurveyList } />
        </section>
    );
}

export default TakesurveyBoardComponent;