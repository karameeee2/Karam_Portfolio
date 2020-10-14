import React from 'react';
import { topBtn } from '../../constants/const';
import TopBtn from '../../pages/topBtn/topBtn';

const TopBtnComponent = () => {
    // 데이터를 세팅
    const scrollTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return (
        <TopBtn topBtn={topBtn} onClick={scrollTop} />
    )
}

export default TopBtnComponent;