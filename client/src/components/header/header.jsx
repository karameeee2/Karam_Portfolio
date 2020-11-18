import React from 'react';
import { gnb, gnb2 } from '../../constants/const';
import Header from '../../pages/header/header';
import '../../css/common/header.css';

const HeaderComponent = (props) => {
    // 데이터를 세팅
    const cookie = props.cookie;
    

    return (
        <Header gnb={gnb} gnb2={gnb2} cookie={cookie} />
    )
}

export default HeaderComponent;