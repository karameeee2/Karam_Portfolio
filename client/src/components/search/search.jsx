import Axios from 'axios';
import React, { useState } from 'react';
import { search } from '../../constants/const'
import Search from '../../pages/search/search'

const SearchComponent = () => {
    const [searchWord, setSearchWord] = useState=({});
    const getsearchWord = () => {
        Axios()
    }
    return (
        <Search search = {search} />
    )
}

export default SearchComponent;