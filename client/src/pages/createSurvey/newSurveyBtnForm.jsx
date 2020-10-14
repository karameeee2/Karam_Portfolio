import React from 'react';
import '../../css/createSurvey/newSurveyBtnForm.css';

const NewSurveyBtnForm = () => {
    return (
        <div className='createNewSurveyBtnContainer'>
            <div className='newSurveyRow'>
                <div className="submitCancelBtn">
                    <button type='submit' className='submitNewSurvey'>등록하기</button>
                    <button className='cancelBtn'>취소</button>
                </div>
            </div>
        </div>
    );
}

export default NewSurveyBtnForm;