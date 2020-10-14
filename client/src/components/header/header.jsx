import React from 'react';
import { gnb } from '../../constants/const';
import Header from '../../pages/header/header';
import '../../css/common/header.css';

const HeaderComponent = () => {
    // 데이터를 세팅
    

    return (
        <Header gnb={gnb} />
    )
}

export default HeaderComponent;