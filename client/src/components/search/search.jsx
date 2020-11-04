import React from 'react';
import { search } from '../../constants/const'
import Search from '../../pages/search/search'

const SearchComponent = (props) => {

    return (
        <Search search = {search} categoryChange={props.categoryChange} />
    )
}

export default SearchComponent;