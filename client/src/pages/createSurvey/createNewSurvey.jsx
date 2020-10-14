import React from 'react';
import NewSurveyBtnFormComponent from '../../components/createSurvey/newSurveyBtnForm';
import NewSurveyInfoFormComponent from '../../components/createSurvey/newSurveyInfoForm';
import NewSurveyQnaFormComponent from '../../components/createSurvey/newSurveyQnaForm';
import PageTitle from '../pageTitle/pageTitle';


const CreateNewSurvey = (props) => {
    const pageTitle = props.pageTitle;

    return (
        <div>
            <PageTitle pageTitle='새 설문 등록' />
            {/* createForm */}
            <section className="createSurveyFormSection">
                <NewSurveyInfoFormComponent />
                <NewSurveyQnaFormComponent />
                <NewSurveyBtnFormComponent />
            </section>
        </div>
    )
}

export default CreateNewSurvey;