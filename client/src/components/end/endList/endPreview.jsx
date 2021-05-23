import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import EndPreview from '../../../pages/end/endList/endPreview';


const EndPreviewComponent = () => {
    useEffect(() => {
        getEndList();
    }, [])

    const [endList, setEndList] = useState([]);
    const getEndList = () => {
        Axios.get('http://localhost:8080/api/selectEndList')
            .then((res) => {
                setEndList(res.data);
            })
            .catch((err) => {
                console.log('에러낫음', err.res, err);
            })
    }
    return(
        <EndPreview endList={ endList } />
    );
}
export default EndPreviewComponent;