import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../../css/search/search.css';

const Search = (props) => {
    const search = props.search;

    const onClickSearch = () => {
        
    }

    return (
        <section id="searchBox">
            <div id="searchWrap">
                <form>
                    <select name="searchValue" className="searchValue">
                        {search.map((item, idx) => {
                            return (
                                <option key={idx} value={item.value}>{item.valueTitle}</option>
                            );
                        })};
                    </select>
                    <input className="typeSearch" name="typeSearch" type="text" placeholder="검색어를 입력하세요."/>
                    <Link to='/searchResult'><button id="goSearch" name="goSearch" type="submit" >검색</button></Link>
                </form>
            </div>
        </section>
    );
}

export default Search;