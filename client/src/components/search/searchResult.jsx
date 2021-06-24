import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_LIST } from '../../constants/api';
import SearchResult from '../../pages/search/searchResult';

const SearchResultComponent = (props) => {
    const [surveyList, setServeyList] = useState([]);
    const [endList, setEndList] = useState([]);
    const [noticeList, setNoticeList] = useState([]);
    const [searchTotal, setSearchTotal] = useState(0);

    useEffect(() => {
        let value = props.match.params.searchWord;
        getsearchWord(value);
    }, [props.match.params.searchWord])

    const getsearchWord = (value) => {
        const url = API_LIST.GET_SEARCH_RESULT;
        Axios.get(url + `?value=${value}`)
        .then(res => {
            setServeyList(res.data[0]);
            setEndList(res.data[1]);
            setNoticeList(res.data[2]);
            
            setSearchTotal(res.data[0].length + res.data[1].length + res.data[2].length);
        })
        .catch(err => {
            console.log('getSearchWord error', err, err.res);
        })
    }
    return (
        <SearchResult searchTotal={searchTotal} surveyList={surveyList} endList={endList} noticeList={noticeList} />
    );
}

export default SearchResultComponent;