import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_LIST } from '../../../constants/api';
import EndPreview from '../../../pages/end/endList/endPreview';


const EndPreviewComponent = () => {
    useEffect(() => {
        getEndList();
    }, [])

    const [endList, setEndList] = useState([]);
    const getEndList = () => {
        let url = API_LIST.END_LIST;
        Axios.get(url)
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