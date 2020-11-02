import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import EndList from '../../../pages/end/endList/endList'

const EndListComponent = () => {
    useEffect(() => {
        getEndList();
    }, [])

    const [endList, setEndList] = useState([]);
    const getEndList = () => {
        Axios.get('http://localhost:8080/selectEndList')
            .then((res) => {
                setEndList(res.data);
            })
            .catch((err) => {
                console.log('에러낫음', err.res, err);
            })
    }
    return (
        <EndList pageTitle={ '종료된 설문' } endList={ endList } />
    );
}

export default EndListComponent;