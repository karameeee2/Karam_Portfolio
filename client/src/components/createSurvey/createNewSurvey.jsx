import Axios from 'axios';
import React, { useState } from 'react';
import CreateNewSurvey from '../../pages/createSurvey/createNewSurvey';


const CreateNewSurveyComponent = () => {
    const [ssubject, setSsubject] = useState('');
    const [scontent, setScontent] = useState('');
    const [sdate, setSdate] = useState('');
    const [edate, setEdate] = useState('');
    const [tag, setTag] = useState('');
    const [img, setImg] = useState('');

    const insertSurveySubmit = () => {
        Axios.post('http://localhost:8080/insertSurvey', {
            ssubject: ssubject,
            scontent: scontent,
            
        })
    }

    return (
        <CreateNewSurvey />
    )
}

export default CreateNewSurveyComponent;