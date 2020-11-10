//import Axios from 'axios';
import React from 'react';
import ProgressDetail from '../../../pages/progress/progressDetail/progressDetail';

const ProgressDetailComponent = (props) => {
    let sidx = props.match.params.sidx;

    return (
        <ProgressDetail pageTitle={ '진행중인 설문' } sidx={sidx} />
    )
}

export default ProgressDetailComponent;