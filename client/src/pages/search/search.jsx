import React, { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import searchIconActive from '../../assets/icons/searchIcon_active.svg';
import closeIcon from '../../assets/icons/closeIcon.svg';
import '../../css/search/search.css';

const Search = () => {
    // window.onload = function() {
    //     document.getElementById('typeSearch').setAttribute('autofocus', true);
    // }

    const [value, setValue] = useState('');

    const onClickSearch = () => {
        let search = document.getElementById('search');
        search.style.display = 'none';
        // 검색어 담아서 요청보내기
        return value;
    }

    const onChangeInput = (e) => {
        setValue(e.currentTarget.value);
    }

    const closeSearch = () => {
        let search = document.getElementById('search');
        search.style.display = 'none';
    }

    return (
        <section id="search">
            <div id="searchBox">
                <div id="searchWrap">
                    <input className="typeSearch" id='typeSearch' name="typeSearch" type="text" placeholder="검색어 입력" onChange={onChangeInput} />
                    <Link to={`/searchResult/${value}`} >
                        <button id="goSearch" name="goSearch" type="submit" onClick={onClickSearch} >
                            <img src={searchIconActive} alt="검색"/>
                        </button>
                    </Link>
                </div>
                <button className="searchClose" onClick={closeSearch}>
                    <img src={closeIcon} alt="검색창닫기"/>
                </button>
            </div>
        </section>
    );
}

export default Search;