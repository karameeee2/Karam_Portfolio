import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import EndList from '../../../pages/end/endList/endList'

const EndListComponent = () => {
    const [endList, setEndList] = useState([]);

    useEffect(() => {
        getEndList();
    }, [])

    const getEndList = () => {
        Axios.get('http://localhost:8080/api/selectEndList')
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

        if(!selected) {
            arr = arr.splice(0, item_per_page);
        } else  {
            arr = arr.splice(offset, selected * item_per_page);
        }

        setActiveEndList(arr);
    }

    return (
        <EndList endList={ endList } activeEndList={activeEndList} item_per_page={item_per_page} handlePageClick={handlePageClick} />
    );
}

export default EndListComponent;