import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Cookie from 'js-cookie';
import { API_LIST } from '../../../constants/api';
import EndList from '../../../pages/end/endList/endList'

const EndListComponent = () => {
    const cookie = Cookie.get('connect.sid');

    const [endList, setEndList] = useState([]);

    useEffect(() => {
        getEndList();
    }, [])

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

    const [activeEndList, setActiveEndList] = useState([]);
    const item_per_page = 6;

    useEffect(() => {
        handlePageClick({selected: 0});
    }, [endList]);

    const handlePageClick = (data) => {
        let selected = data.selected;
        let offset = Math.ceil(selected * item_per_page);

        let arr = [...endList];

        arr = arr.slice(offset, offset + item_per_page);

        setActiveEndList(arr);
    }

    return (
        <EndList endList={ endList } activeEndList={activeEndList} item_per_page={item_per_page} handlePageClick={handlePageClick}
        cookie={cookie} />
    );
}

export default EndListComponent;