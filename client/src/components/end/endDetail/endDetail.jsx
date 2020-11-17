import React from 'react';
import EndDetail from '../../../pages/end/endDetail/endDetail';

const EndDetailComponent = (props) => {
    let sidx = props.match.params.sidx;

    return (
        <EndDetail pageTitle={ '종료된 설문' } sidx={ sidx } />
    )
}

export default EndDetailComponent;