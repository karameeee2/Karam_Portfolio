import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_LIST } from '../../constants/api';
import SearchResult from '../../pages/search/searchResult';

const SearchResultComponent = (props) => {
    // const [searchWord, setSearchWord] = useState('');
    const [surveyList, setServeyList] = useState([]);
    const [endList, setEndList] = useState([]);
    const [noticeList, setNoticeList] = useState([]);
    const [searchTotal, setSearchTotal] = useState(0);
    // const [category, setCategory] = useState('');

    useEffect(() => {
        let value = props.match.params.searchWord;
        getsearchWord(value);
    }, [props.match.params.searchWord])

    // const categoryChange = (categoryValue) => {
    //     // console.log('설정한 카테고리 :::::: ',categoryValue);
    //     setCategory(categoryValue);
    // }

    const getsearchWord = (value) => {
        // const url = `http://localhost:8080/search?value=${value}&category=${category}`;
        const url = API_LIST.GET_SEARCH_RESULT;
        Axios.get(url + `?value=${value}`)
        .then(res => {
            //let result = res.data;
            // result[0] : progressList, result[1]: endList, result[2]: noticeList
            // setSearchWord(res.data[0]);
            setServeyList(res.data[0]);
            setEndList(res.data[1]);
            setNoticeList(res.data[2]);
            
            setSearchTotal(res.data[0].length + res.data[1].length + res.data[2].length);
        })
        .catch(err => {
            console.log('getSearchWord', err, err.res);
        })
    }
    return (
        <SearchResult searchTotal={searchTotal} surveyList={surveyList} endList={endList} noticeList={noticeList} />
    );
}

export default SearchResultComponent;