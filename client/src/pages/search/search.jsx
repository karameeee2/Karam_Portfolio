import React, { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../../css/search/search.css';

const Search = (props) => {
    const [value, setValue] = useState('');
    const search = props.search;

    const onClickSearch = () => {
        // 검색어 담아서 요청보내기
        return value;
    }

    const onChangeInput = (e) => {
        setValue(e.currentTarget.value);
    }

    const changeCategory = (e) => {
        // 내가보기엔, 랜딩페이지에서 Search컴포넌트로 categoryChange함수를 안보내줘서 그런거같은데 왜 안보내주는데 ㅇㅅㅇ 
        // 그 SearchResult 컴포넌트에선 props 에다가 함수를넣어주는데
        // 랜딩에서는 안넣어줘서그런거같아
        // 함 부쟈
        if(props.categoryChange) props.categoryChange(e.target.value)
    }

    return (
        <section id="searchBox">
            <div id="searchWrap">
                <form>
                    <select name="searchValue" className="searchValue" onChange={changeCategory}>
                        {search.map((item, idx) => {
                            return (
                                <option key={idx} value={item.value}>{item.valueTitle}</option>
                            );
                        })};
                    </select>
                    <input className="typeSearch" name="typeSearch" type="text" placeholder="검색어를 입력하세요." onChange={onChangeInput} />
                    <Link to={`/searchResult/${value}`} ><button id="goSearch" name="goSearch" type="submit" onClick={onClickSearch} >검색</button></Link>
                </form>
            </div>
        </section>
    );
}

export default Search;